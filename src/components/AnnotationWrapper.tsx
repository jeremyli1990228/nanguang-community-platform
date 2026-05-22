import React from 'react';
import { useAnnotation } from '../contexts/AnnotationContext';
import AnnotationMarker from './Annotation';
import annotations from '../annotations/data';

interface AnnotationWrapperProps {
  id: number;
  children: React.ReactNode;
}

const AnnotationWrapper: React.FC<AnnotationWrapperProps> = ({ id, children }) => {
  const { isAnnotationMode } = useAnnotation();

  if (!isAnnotationMode) {
    return <>{children}</>;
  }

  const annotation = annotations.find(a => a.id === id);

  if (!annotation) {
    return <>{children}</>;
  }

  return (
    <AnnotationMarker
      id={annotation.id}
      title={annotation.title}
      content={annotation.content}
    >
      {children}
    </AnnotationMarker>
  );
};

export default AnnotationWrapper;
