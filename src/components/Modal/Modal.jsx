import React, {useEffect, useState} from "react";

const Modal = ({isOpen, onClose, title, children, size = "md"}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 150);
  };

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-6xl",
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      {/* Backdrop */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${isVisible ? "overlay-enter" : "overlay-exit"}`} onClick={handleClose} />

      {/* Modal */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${isVisible ? "modal-enter" : "modal-exit"}`}>
        <div
          className={`bg-white dark:bg-gray-900 rounded-2xl w-full ${sizeClasses[size]} max-h-[90vh] overflow-hidden transform transition-all duration-200 border border-gray-200 dark:border-gray-800`}
          onClick={(e) => e.stopPropagation()}>
          {/* Header */}
          {title && (
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-80px)]">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
