import React, { useState, useEffect } from 'react';

const Toast = ({ message, type = 'success', isVisible, onClose, duration = 3000 }) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const toastStyles = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    backgroundColor: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6',
    color: 'white',
    padding: '1rem 1.5rem',
    borderRadius: '12px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.25), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    minWidth: '300px',
    maxWidth: '500px',
    animation: 'slideInRight 0.3s ease-out',
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.95rem',
    fontWeight: '500'
  };

  const iconStyles = {
    fontSize: '1.25rem',
    flexShrink: 0
  };

  const closeButtonStyles = {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    padding: '0.25rem',
    marginLeft: 'auto',
    borderRadius: '4px',
    opacity: 0.8,
    transition: 'opacity 0.2s ease'
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'info':
        return 'ℹ';
      default:
        return '✓';
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes slideInRight {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>
      <div style={toastStyles}>
        <span style={iconStyles}>{getIcon()}</span>
        <span style={{ flex: 1 }}>{message}</span>
        <button 
          style={closeButtonStyles}
          onClick={onClose}
          onMouseEnter={(e) => e.target.style.opacity = '1'}
          onMouseLeave={(e) => e.target.style.opacity = '0.8'}
        >
          ×
        </button>
      </div>
    </>
  );
};

export default Toast;
