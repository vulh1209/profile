import { useState } from 'react';
import { Upload, File, X } from 'lucide-react';

interface DroppedFile {
  file: File;
  content: string;
}

interface FileDropZoneProps {
  accept: string;
  onFileSelect: (file: DroppedFile) => void;
  onClear: () => void;
  currentFile: DroppedFile | null;
  placeholder: string;
}

const FileDropZone: React.FC<FileDropZoneProps> = ({ 
  accept, 
  onFileSelect, 
  onClear, 
  currentFile, 
  placeholder 
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const readFile = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result as string);
      reader.onerror = reject;
      reader.readAsText(file);
    });
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length === 0) return;
    
    const file = files[0];
    try {
      const content = await readFile(file);
      onFileSelect({ file, content });
    } catch (error) {
      console.error('Failed to read file:', error);
    }
  };

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (!file) return;
    
    try {
      const content = await readFile(file);
      onFileSelect({ file, content });
    } catch (error) {
      console.error('Failed to read file:', error);
    }
    
    // Reset the input value
    e.target.value = '';
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={() => setIsDragging(true)}
      onDragLeave={() => setIsDragging(false)}
      className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-all duration-300 cursor-pointer ${
        isDragging 
          ? 'border-primary bg-primary/5' 
          : 'border-border hover:border-primary/50'
      }`}
    >
      <input
        type="file"
        accept={accept}
        onChange={handleFileInput}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      
      {currentFile ? (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <File className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">{currentFile.file.name}</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              onClear();
            }}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          <Upload className="w-8 h-8 text-muted-foreground mx-auto" />
          <p className="text-sm text-muted-foreground">
            {placeholder}
          </p>
        </div>
      )}
    </div>
  );
};

export default FileDropZone;