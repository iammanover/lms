import { createContext, useContext, useState, useCallback } from "react";

// Toast context
export const ToastContext = createContext();

// Toast Provider component
export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message, duration = 3000) => {
    setToast({ message });

    const timeout = setTimeout(() => {
      setToast(null);
    }, duration);

    // Cleanup
    return () => clearTimeout(timeout);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div
          className="custom-toast show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          {toast.message}
        </div>
      )}
    </ToastContext.Provider>
  );
};
