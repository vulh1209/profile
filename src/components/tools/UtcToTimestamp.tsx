import { useState, useCallback } from 'react';
import { Clock, Copy, RefreshCw, Loader2 } from 'lucide-react';
import ToolLayout from './shared/ToolLayout';
import Notification from './shared/Notification';
import { useNotification } from '../../hooks/useNotification';
import { useFileUtils } from '../../hooks/useFileUtils';
import { useDebouncedInput } from '../../hooks/useDebouncedInput';

const UtcToTimestamp = () => {
  const [output, setOutput] = useState('');
  const [isConverting, setIsConverting] = useState(false);
  
  const { notification, showNotification } = useNotification();
  const { copyToClipboard } = useFileUtils();
  const { displayValue, handleChange } = useDebouncedInput('');

  const convertToTimestamp = useCallback(async (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsConverting(true);
    
    try {
      const input = displayValue.trim();
      if (!input) {
        showNotification('error', 'Please enter a UTC date');
        return;
      }

      const date = new Date(input);
      if (isNaN(date.getTime())) {
        showNotification('error', 'Invalid UTC date format');
        return;
      }

      const timestamp = Math.floor(date.getTime() / 1000).toString();
      setOutput(timestamp);
      showNotification('success', 'UTC converted to timestamp successfully!');
    } catch (error) {
      showNotification('error', 'Error converting UTC to timestamp');
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

  const fillCurrentDate = () => {
    const now = new Date().toISOString();
    handleChange(now);
  };

  return (
    <ToolLayout
      title="UTC to Timestamp"
      description="Convert UTC dates to Unix timestamp format"
      icon={Clock}
    >
      <div className="glass-card p-8">
        <div className="space-y-6">
          {/* Input */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              UTC Date
            </label>
            <input
              type="text"
              value={displayValue}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="2022-01-01T00:00:00Z"
              className="w-full p-4 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none text-lg"
            />
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-muted-foreground">
                Enter a UTC date in ISO format (YYYY-MM-DDTHH:mm:ssZ)
              </p>
              <button
                onClick={fillCurrentDate}
                className="text-xs text-primary hover:text-primary/80 transition-colors"
              >
                Use current date
              </button>
            </div>
          </div>

          {/* Convert Button */}
          <div className="flex gap-3">
            <button
              onClick={convertToTimestamp}
              disabled={isConverting || !displayValue.trim()}
              className="flex-1 btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isConverting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <RefreshCw className="w-5 h-5" />
              )}
              {isConverting ? 'Converting...' : 'Convert to Timestamp'}
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
                <span className="text-sm text-blue-400 font-medium">Converting UTC date...</span>
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
                  <code className="text-foreground font-mono text-xl">{output}</code>
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
            <h3 className="font-medium text-foreground mb-2">Supported Date Formats</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>• ISO 8601: <code>2022-01-01T00:00:00Z</code></p>
              <p>• With milliseconds: <code>2022-01-01T00:00:00.000Z</code></p>
              <p>• Date only: <code>2022-01-01</code></p>
              <p>• Human readable: <code>January 1, 2022</code></p>
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

export default UtcToTimestamp;