import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AnnotationContextType {
  isAnnotationMode: boolean;
  toggleAnnotationMode: () => void;
}

const AnnotationContext = createContext<AnnotationContextType | undefined>(undefined);

export const AnnotationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAnnotationMode, setIsAnnotationMode] = useState(false);

  const toggleAnnotationMode = () => {
    setIsAnnotationMode(!isAnnotationMode);
  };

  return (
    <AnnotationContext.Provider value={{ isAnnotationMode, toggleAnnotationMode }}>
      {children}
    </AnnotationContext.Provider>
  );
};

export const useAnnotation = () => {
  const context = useContext(AnnotationContext);
  if (context === undefined) {
    throw new Error('useAnnotation must be used within an AnnotationProvider');
  }
  return context;
};

export default AnnotationContext;
