import { useState, useCallback, useEffect } from 'react';
import { FileText, Download, Loader2 } from 'lucide-react';
import ToolLayout from './shared/ToolLayout';
import FileDropZone from './shared/FileDropZone';
import Notification from './shared/Notification';
import { useNotification } from '../../hooks/useNotification';
import { useFileUtils } from '../../hooks/useFileUtils';

interface DroppedFile {
  file: File;
  content: string;
}

const ExcelToJson = () => {
  const [file, setFile] = useState<DroppedFile | null>(null);
  const [output, setOutput] = useState('');
  const [isConverting, setIsConverting] = useState(false);
  
  const { notification, showNotification } = useNotification();
  const { downloadFile } = useFileUtils();

  const convertToJson = useCallback(async (inputData: string) => {
    setIsConverting(true);
    
    try {
      const data = inputData.trim();
      if (!data) {
        showNotification('error', 'Please upload a file');
        return;
      }

      // Handle different separators
      const lines = data.split('\n').filter(line => line.trim());
      if (lines.length === 0) {
        showNotification('error', 'No data found in input');
        return;
      }

      // Detect separator (comma, tab, semicolon)
      const firstLine = lines[0];
      let separator = '\t';
      if (firstLine.includes(',')) separator = ',';
      else if (firstLine.includes(';')) separator = ';';

      const headers = lines[0].split(separator).map(h => h.trim().replace(/["']/g, ''));
      const result = [];

      for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(separator).map(v => v.trim().replace(/["']/g, ''));
        const obj: Record<string, string> = {};
        headers.forEach((header, index) => {
          obj[header] = values[index] || '';
        });
        result.push(obj);
      }

      const jsonOutput = JSON.stringify(result, null, 2);
      setOutput(jsonOutput);
      showNotification('success', 'Excel converted to JSON successfully!');
    } catch (error) {
      showNotification('error', 'Error converting Excel to JSON');
      console.error('Conversion error:', error);
    } finally {
      setIsConverting(false);
    }
  }, [showNotification]);

  // Auto-convert when file is uploaded
  useEffect(() => {
    if (file && file.content) {
      convertToJson(file.content);
    }
  }, [file, convertToJson]);

  const handleFileSelect = (selectedFile: DroppedFile) => {
    // Validate file type
    if (!selectedFile.file.name.match(/\.(csv|tsv|txt)$/i)) {
      showNotification('error', 'Please upload a CSV, TSV, or TXT file');
      return;
    }
    
    setFile(selectedFile);
    showNotification('success', `File ${selectedFile.file.name} uploaded successfully!`);
  };

  const handleClear = () => {
    setFile(null);
    setOutput('');
  };

  const handleDownload = () => {
    if (output) {
      downloadFile(output, 'converted-data.json', 'application/json');
      showNotification('success', 'Downloaded converted-data.json successfully!');
    }
  };

  return (
    <ToolLayout
      title="Excel/CSV to JSON"
      description="Convert Excel/CSV files to JSON format with drag & drop functionality"
      icon={FileText}
    >
      <div className="glass-card p-8">
        <div className="space-y-6">
          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Upload CSV/TSV File
            </label>
            <FileDropZone
              accept=".csv,.tsv,.txt"
              onFileSelect={handleFileSelect}
              onClear={handleClear}
              currentFile={file}
              placeholder="Drag & drop your CSV/TSV file here or click to browse"
            />
          </div>

          {/* Converting Progress */}
          {isConverting && (
            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <div className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin text-blue-400" />
                <span className="text-sm text-blue-400 font-medium">Converting to JSON...</span>
              </div>
            </div>
          )}

          {/* Result */}
          {output && !isConverting && (
            <div className="space-y-4">
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-400 font-medium">
                    ✓ Conversion completed successfully
                  </span>
                  <span className="text-xs text-green-400/70">
                    {output.split('\n').length} lines generated
                  </span>
                </div>
              </div>
              
              <div className="max-h-96 overflow-auto bg-muted/50 rounded-lg p-4">
                <pre className="text-sm text-foreground whitespace-pre-wrap">
                  {output}
                </pre>
              </div>
            </div>
          )}

          {/* Download Button */}
          <button
            onClick={handleDownload}
            disabled={!output || isConverting}
            className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
          >
            <Download className="w-5 h-5" />
            Download JSON
          </button>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
    </ToolLayout>
  );
};

export default ExcelToJson;