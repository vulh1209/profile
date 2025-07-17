import { useState, useCallback, useEffect } from 'react';
import { Code, Download, Loader2 } from 'lucide-react';
import ToolLayout from './shared/ToolLayout';
import FileDropZone from './shared/FileDropZone';
import Notification from './shared/Notification';
import { useNotification } from '../../hooks/useNotification';
import { useFileUtils } from '../../hooks/useFileUtils';

interface DroppedFile {
  file: File;
  content: string;
}

const JsonToExcel = () => {
  const [file, setFile] = useState<DroppedFile | null>(null);
  const [output, setOutput] = useState('');
  const [isConverting, setIsConverting] = useState(false);
  
  const { notification, showNotification } = useNotification();
  const { downloadFile } = useFileUtils();

  const convertToCsv = useCallback(async (inputData: string) => {
    setIsConverting(true);
    
    try {
      const data = inputData.trim();
      if (!data) {
        showNotification('error', 'Please upload a file');
        return;
      }

      const parsedData = JSON.parse(data);
      if (!Array.isArray(parsedData) || parsedData.length === 0) {
        showNotification('error', 'JSON must be an array of objects');
        return;
      }

      const headers = Object.keys(parsedData[0]);
      const csvData = headers.join(',') + '\n';
      const rows = parsedData.map(item => 
        headers.map(header => {
          const value = item[header] || '';
          // Escape commas and quotes in CSV
          return typeof value === 'string' && (value.includes(',') || value.includes('"')) 
            ? `"${value.replace(/"/g, '""')}"` 
            : value;
        }).join(',')
      ).join('\n');

      const csvOutput = csvData + rows;
      setOutput(csvOutput);
      showNotification('success', 'JSON converted to CSV successfully!');
    } catch (error) {
      showNotification('error', 'Error converting JSON to CSV. Please check your JSON format.');
      console.error('Conversion error:', error);
    } finally {
      setIsConverting(false);
    }
  }, [showNotification]);

  // Auto-convert when file is uploaded
  useEffect(() => {
    if (file && file.content) {
      convertToCsv(file.content);
    }
  }, [file, convertToCsv]);

  const handleFileSelect = (selectedFile: DroppedFile) => {
    // Validate file type
    if (!selectedFile.file.name.match(/\.json$/i)) {
      showNotification('error', 'Please upload a JSON file');
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
      downloadFile(output, 'converted-data.csv', 'text/csv');
      showNotification('success', 'Downloaded converted-data.csv successfully!');
    }
  };

  return (
    <ToolLayout
      title="JSON to CSV/Excel"
      description="Convert JSON files to CSV format with proper escaping"
      icon={Code}
    >
      <div className="glass-card p-8">
        <div className="space-y-6">
          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Upload JSON File
            </label>
            <FileDropZone
              accept=".json"
              onFileSelect={handleFileSelect}
              onClear={handleClear}
              currentFile={file}
              placeholder="Drag & drop your JSON file here or click to browse"
            />
          </div>

          {/* Converting Progress */}
          {isConverting && (
            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <div className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin text-blue-400" />
                <span className="text-sm text-blue-400 font-medium">Converting to CSV...</span>
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
                    {output.split('\n').length} rows generated
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
            Download CSV
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

export default JsonToExcel;