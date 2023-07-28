import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export type FlashMessageType = 'info' | 'success' | 'warning' | 'error';

interface FlashMessageProps {
  type: FlashMessageType;
  message: string;
  onClose: () => void;
}

export default function FlashMessage({
  type,
  message,
  onClose,
}: FlashMessageProps): JSX.Element {
  const [mounted, setMounted] = useState(false);

  function getTypeStyles(): string {
    switch (type) {
      case 'info':
        return 'bg-primary-400';
      case 'success':
        return 'bg-green-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-primary-400';
    }
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted
    ? createPortal(
        <div
          className={`flashMessage fixed bottom-20 left-5 w-64 md:w-96 p-2 md:p-4 rounded-lg shadow-lg ${getTypeStyles()} text-white`}
        >
          <button className="absolute top-2 right-3" onClick={onClose}>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {message}
        </div>,
        document.body
      )
    : null;
}
