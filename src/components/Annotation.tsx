import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface AnnotationProps {
  id: number;
  children: React.ReactNode;
  title: string;
  content: string;
}

const AnnotationMarker: React.FC<AnnotationProps> = ({ id, children, title, content }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (!isDragging) {
      setIsTooltipVisible(false);
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsTooltipVisible(false);
    setIsDragging(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (tooltipRef.current) {
      const rect = tooltipRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setIsDragging(true);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  const renderMarkdownContent = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, index) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('>')) {
        return (
          <div key={index} style={styles.blockquote}>
            {renderInlineText(trimmedLine.substring(1).trim())}
          </div>
        );
      }
      
      if (trimmedLine.startsWith('-')) {
        const indent = trimmedLine.match(/^(\s*)/)?.[1].length || 0;
        return (
          <div key={index} style={{ ...styles.listItem, paddingLeft: `${indent * 12 + 12}px` }}>
            <span style={styles.bullet}>•</span>
            {renderInlineText(trimmedLine.substring(1).trim())}
          </div>
        );
      }
      
      if (/^\d+\./.test(trimmedLine)) {
        const match = trimmedLine.match(/^(\d+)\.\s*(.*)$/);
        if (match) {
          return (
            <div key={index} style={styles.orderedListItem}>
              <span style={styles.orderedNumber}>{match[1]}.</span>
              {renderInlineText(match[2])}
            </div>
          );
        }
      }
      
      if (trimmedLine === '') {
        return <div key={index} style={{ height: '12px' }} />;
      }
      
      return (
        <p key={index} style={styles.paragraph}>
          {renderInlineText(trimmedLine)}
        </p>
      );
    });
  };

  const renderInlineText = (text: string) => {
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let key = 0;
    
    while (remaining.length > 0) {
      const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
      const italicMatch = remaining.match(/\*(.+?)\*/);
      
      if (boldMatch && boldMatch.index !== undefined) {
        if (boldMatch.index > 0) {
          parts.push(remaining.substring(0, boldMatch.index));
        }
        parts.push(<strong key={key++}>{boldMatch[1]}</strong>);
        remaining = remaining.substring(boldMatch.index + boldMatch[0].length);
      } else if (italicMatch && italicMatch.index !== undefined) {
        if (italicMatch.index > 0) {
          parts.push(remaining.substring(0, italicMatch.index));
        }
        parts.push(<em key={key++}>{italicMatch[1]}</em>);
        remaining = remaining.substring(italicMatch.index + italicMatch[0].length);
      } else {
        parts.push(remaining);
        break;
      }
    }
    
    return parts;
  };

  const tooltipContent = (
    <div
      ref={tooltipRef}
      style={{
        ...styles.tooltip,
        left: isDragging ? `${position.x}px` : undefined,
        top: isDragging ? `${position.y}px` : undefined,
        position: isDragging ? 'fixed' : 'absolute',
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div style={styles.tooltipHeader}>
        <div style={styles.tooltipTitle}>
          <span style={styles.markerBadge}>{id}</span>
          <span>{title}</span>
        </div>
        <button style={styles.closeButton} onClick={handleClose}>
          ✕
        </button>
      </div>
      <div style={styles.tooltipDivider} />
      <div style={styles.tooltipContent}>
        {renderMarkdownContent(content)}
      </div>
    </div>
  );

  return (
    <div
      ref={markerRef}
      style={styles.markerContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span style={styles.marker}>{id}</span>
      {children}
      {isTooltipVisible && tooltipContent}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  markerContainer: {
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'top',
  },
  marker: {
    position: 'absolute',
    top: '-8px',
    right: '-4px',
    display: 'inline-block',
    backgroundColor: 'rgb(250, 173, 20)',
    color: 'white',
    fontSize: '10px',
    fontWeight: 'bold',
    lineHeight: '14px',
    padding: '0px 4px',
    borderRadius: '2px',
    border: 'none',
    cursor: 'pointer',
    zIndex: 9999,
  },
  tooltip: {
    backgroundColor: '#f0efef',
    borderRadius: '4px',
    width: '450px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    zIndex: 9999,
    cursor: 'move',
    userSelect: 'none',
  },
  tooltipHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 16px',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
  },
  tooltipTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  markerBadge: {
    display: 'inline-block',
    backgroundColor: 'rgb(250, 173, 20)',
    color: 'white',
    fontSize: '10px',
    fontWeight: 'bold',
    lineHeight: '14px',
    padding: '0px 4px',
    borderRadius: '2px',
  },
  closeButton: {
    background: 'none',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    color: '#999',
    padding: '0',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tooltipDivider: {
    height: '1px',
    backgroundColor: '#e0e0e0',
  },
  tooltipContent: {
    padding: '16px',
    maxHeight: '500px',
    overflowY: 'auto',
    fontSize: '13px',
    lineHeight: '1.6',
    color: '#333',
  },
  paragraph: {
    marginBottom: '12px',
  },
  blockquote: {
    paddingLeft: '12px',
    borderLeft: '3px solid #ccc',
    backgroundColor: '#f5f5f5',
    padding: '8px 12px',
    marginBottom: '12px',
    fontSize: '12px',
    color: '#666',
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '8px',
  },
  bullet: {
    marginRight: '8px',
    fontWeight: 'bold',
  },
  orderedListItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '8px',
    paddingLeft: '24px',
  },
  orderedNumber: {
    marginRight: '8px',
    fontWeight: 'bold',
    minWidth: '20px',
  },
};

export default AnnotationMarker;
