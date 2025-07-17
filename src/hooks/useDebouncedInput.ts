import { useState, useCallback, useRef } from 'react';

export const useDebouncedInput = (initialValue: string = '', delay: number = 300) => {
  const [value, setValue] = useState(initialValue);
  const [displayValue, setDisplayValue] = useState(initialValue);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const handleChange = useCallback((newValue: string) => {
    setDisplayValue(newValue); // Immediate UI update
    
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    
    debounceRef.current = setTimeout(() => {
      setValue(newValue);
    }, delay);
  }, [delay]);

  return {
    value,
    displayValue,
    handleChange,
    setValue: (newValue: string) => {
      setValue(newValue);
      setDisplayValue(newValue);
    }
  };
};