import { useState, useCallback } from 'react';
import { Type, Copy, Download, Loader2 } from 'lucide-react';
import ToolLayout from './shared/ToolLayout';
import Notification from './shared/Notification';
import { useNotification } from '../../hooks/useNotification';
import { useFileUtils } from '../../hooks/useFileUtils';
import { useDebouncedInput } from '../../hooks/useDebouncedInput';

type CaseType = 'upper' | 'lower' | 'title' | 'camel' | 'pascal' | 'snake' | 'kebab';

const StringConverter = () => {
  const [output, setOutput] = useState('');
  const [isConverting, setIsConverting] = useState(false);
  const [caseType, setCaseType] = useState<CaseType>('upper');
  
  const { notification, showNotification } = useNotification();
  const { copyToClipboard, downloadFile } = useFileUtils();
  const { displayValue, handleChange } = useDebouncedInput('');

  const convertCase = useCallback(async (targetCase: CaseType) => {
    setIsConverting(true);
    setCaseType(targetCase);
    
    try {
      const input = displayValue.trim();
      if (!input) {
        showNotification('error', 'Please enter text to convert');
        return;
      }

      let result = '';
      switch (targetCase) {
        case 'upper':
          result = input.toUpperCase();
          break;
        case 'lower':
          result = input.toLowerCase();
          break;
        case 'title':
          result = input.replace(/\w\S*/g, (txt) => 
            txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
          );
          break;
        case 'camel':
          result = input.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => 
            index === 0 ? word.toLowerCase() : word.toUpperCase()
          ).replace(/\s+/g, '');
          break;
        case 'pascal':
          result = input.replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => 
            word.toUpperCase()
          ).replace(/\s+/g, '');
          break;
        case 'snake':
          result = input.toLowerCase().replace(/\s+/g, '_');
          break;
        case 'kebab':
          result = input.toLowerCase().replace(/\s+/g, '-');
          break;
      }

      setOutput(result);
      showNotification('success', `Text converted to ${targetCase} case successfully!`);
    } catch (error) {
      showNotification('error', 'Error converting text');
      console.error('Conversion error:', error);
    } finally {
      setIsConverting(false);
    }
  }, [displayValue, showNotification]);

  const handleCopy = async () => {
    if (output) {
      const success = await copyToClipboard(output);
      if (success) {
        showNotification('success', 'Copied to clipboard!');
      } else {
        showNotification('error', 'Failed to copy to clipboard');
      }
    }
  };

  const handleDownload = () => {
    if (output) {
      downloadFile(output, 'converted-text.txt', 'text/plain');
      showNotification('success', 'Downloaded converted-text.txt successfully!');
    }
  };

  const handleClear = () => {
    handleChange('');
    setOutput('');
  };

  const caseButtons = [
    { type: 'upper' as CaseType, label: 'UPPER CASE', description: 'Convert to uppercase' },
    { type: 'lower' as CaseType, label: 'lower case', description: 'Convert to lowercase' },
    { type: 'title' as CaseType, label: 'Title Case', description: 'Capitalize first letter of each word' },
    { type: 'camel' as CaseType, label: 'camelCase', description: 'First word lowercase, rest capitalized' },
    { type: 'pascal' as CaseType, label: 'PascalCase', description: 'All words capitalized' },
    { type: 'snake' as CaseType, label: 'snake_case', description: 'Lowercase with underscores' },
    { type: 'kebab' as CaseType, label: 'kebab-case', description: 'Lowercase with hyphens' }
  ];

  return (
    <ToolLayout
      title="String Converter"
      description="Convert text to different case formats"
      icon={Type}
    >
      <div className="glass-card p-8">
        <div className="space-y-6">
          {/* Input */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Input Text
            </label>
            <textarea
              value={displayValue}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="Hello World Example"
              className="w-full h-32 p-4 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none resize-none"
            />
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-muted-foreground">
                Enter the text you want to convert
              </p>
              <button
                onClick={handleClear}
                className="text-xs text-primary hover:text-primary/80 transition-colors"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Case Conversion Buttons */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Choose Conversion Type
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {caseButtons.map((button) => (
                <button
                  key={button.type}
                  onClick={() => convertCase(button.type)}
                  disabled={isConverting || !displayValue.trim()}
                  className={`p-3 rounded-lg transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed text-sm ${
                    caseType === button.type 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                  title={button.description}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>

          {/* Converting Progress */}
          {isConverting && (
            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <div className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin text-blue-400" />
                <span className="text-sm text-blue-400 font-medium">Converting text...</span>
              </div>
            </div>
          )}

          {/* Result */}
          {output && !isConverting && (
            <div className="space-y-4">
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-400 font-medium">
                    ✓ Converted to {caseType} case
                  </span>
                  <span className="text-xs text-green-400/70">
                    {output.length} characters
                  </span>
                </div>
              </div>
              
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="mb-3">
                  <h3 className="text-sm font-medium text-foreground mb-2">Result:</h3>
                  <div className="p-3 bg-background rounded border">
                    <code className="text-foreground font-mono text-lg break-all">{output}</code>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={handleCopy}
                    className="flex-1 btn-secondary flex items-center justify-center gap-2"
                  >
                    <Copy className="w-4 h-4" />
                    Copy Result
                  </button>
                  
                  <button
                    onClick={handleDownload}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200 flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Info */}
          <div className="p-4 bg-muted/30 rounded-lg">
            <h3 className="font-medium text-foreground mb-2">Case Conversion Types</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>• <strong>UPPER CASE:</strong> ALL LETTERS CAPITALIZED</p>
              <p>• <strong>lower case:</strong> all letters lowercase</p>
              <p>• <strong>Title Case:</strong> First Letter Of Each Word Capitalized</p>
              <p>• <strong>camelCase:</strong> firstWordLowerCaseRestCapitalized</p>
              <p>• <strong>PascalCase:</strong> AllWordsCapitalized</p>
              <p>• <strong>snake_case:</strong> words_separated_by_underscores</p>
              <p>• <strong>kebab-case:</strong> words-separated-by-hyphens</p>
            </div>
          </div>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
    </ToolLayout>
  );
};

export default StringConverter;