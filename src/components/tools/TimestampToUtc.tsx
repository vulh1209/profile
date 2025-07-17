import { useState, useCallback } from 'react';
import { Clock, Copy, RefreshCw, Loader2 } from 'lucide-react';
import ToolLayout from './shared/ToolLayout';
import Notification from './shared/Notification';
import { useNotification } from '../../hooks/useNotification';
import { useFileUtils } from '../../hooks/useFileUtils';
import { useDebouncedInput } from '../../hooks/useDebouncedInput';

const TimestampToUtc = () => {
  const [output, setOutput] = useState('');
  const [isConverting, setIsConverting] = useState(false);
  
  const { notification, showNotification } = useNotification();
  const { copyToClipboard } = useFileUtils();
  const { displayValue, handleChange } = useDebouncedInput('');

  const convertToUtc = useCallback(async (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsConverting(true);
    
    try {
      const input = displayValue.trim();
      if (!input) {
        showNotification('error', 'Please enter a timestamp');
        return;
      }

      const timestamp = parseInt(input);
      if (isNaN(timestamp)) {
        showNotification('error', 'Invalid timestamp format');
        return;
      }

      const date = new Date(timestamp * 1000);
      const utcResult = date.toISOString();
      setOutput(utcResult);
      showNotification('success', 'Timestamp converted to UTC successfully!');
    } catch (error) {
      showNotification('error', 'Error converting timestamp to UTC');
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

  const handleClear = () => {
    handleChange('');
    setOutput('');
  };

  return (
    <ToolLayout
      title="Timestamp to UTC"
      description="Convert Unix timestamps to UTC date format"
      icon={Clock}
    >
      <div className="glass-card p-8">
        <div className="space-y-6">
          {/* Input */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Unix Timestamp
            </label>
            <input
              type="text"
              value={displayValue}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="1640995200"
              className="w-full p-4 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none text-lg"
            />
            <p className="text-xs text-muted-foreground mt-2">
              Enter a Unix timestamp (seconds since January 1, 1970)
            </p>
          </div>

          {/* Convert Button */}
          <div className="flex gap-3">
            <button
              onClick={convertToUtc}
              disabled={isConverting || !displayValue.trim()}
              className="flex-1 btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isConverting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <RefreshCw className="w-5 h-5" />
              )}
              {isConverting ? 'Converting...' : 'Convert to UTC'}
            </button>
            
            <button
              onClick={handleClear}
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
            >
              Clear
            </button>
          </div>

          {/* Converting Progress */}
          {isConverting && (
            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <div className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin text-blue-400" />
                <span className="text-sm text-blue-400 font-medium">Converting timestamp...</span>
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
                </div>
              </div>
              
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between">
                  <code className="text-foreground font-mono text-lg">{output}</code>
                  <button
                    onClick={handleCopy}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors duration-200 flex items-center gap-2 text-sm"
                  >
                    <Copy className="w-4 h-4" />
                    Copy
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Info */}
          <div className="p-4 bg-muted/30 rounded-lg">
            <h3 className="font-medium text-foreground mb-2">About Unix Timestamps</h3>
            <p className="text-sm text-muted-foreground">
              Unix timestamps represent the number of seconds since January 1, 1970 (UTC). 
              This tool converts them to human-readable UTC dates in ISO 8601 format.
            </p>
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

export default TimestampToUtc;