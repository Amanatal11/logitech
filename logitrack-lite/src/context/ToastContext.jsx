import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { cn } from '../utils/cn';

const ToastContext = createContext(null);

const Toast = ({ toast, onRemove }) => {
    const [isExiting, setIsExiting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [progress, setProgress] = useState(100);
    const duration = toast.duration || 5000;

    useEffect(() => {
        if (isPaused) return;

        const startTime = Date.now();
        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
            setProgress(remaining);

            if (remaining === 0) {
                handleRemove();
            }
        }, 16); // ~60fps

        return () => clearInterval(interval);
    }, [isPaused, duration]);

    const handleRemove = () => {
        setIsExiting(true);
        setTimeout(() => {
            onRemove(toast.id);
        }, 300); // Match animation duration
    };

    const getToastStyles = () => {
        const baseStyles = "relative flex items-start w-full max-w-sm p-4 rounded-xl shadow-lg backdrop-blur-sm border overflow-hidden";

        switch (toast.type) {
            case 'success':
                return cn(baseStyles, "bg-white/95 dark:bg-gray-800/95 border-green-200 dark:border-green-800");
            case 'error':
                return cn(baseStyles, "bg-white/95 dark:bg-gray-800/95 border-red-200 dark:border-red-800");
            case 'warning':
                return cn(baseStyles, "bg-white/95 dark:bg-gray-800/95 border-yellow-200 dark:border-yellow-800");
            case 'info':
                return cn(baseStyles, "bg-white/95 dark:bg-gray-800/95 border-blue-200 dark:border-blue-800");
            default:
                return cn(baseStyles, "bg-white/95 dark:bg-gray-800/95 border-gray-200 dark:border-gray-700");
        }
    };

    const getIconStyles = () => {
        const baseStyles = "inline-flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg";

        switch (toast.type) {
            case 'success':
                return cn(baseStyles, "text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400");
            case 'error':
                return cn(baseStyles, "text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400");
            case 'warning':
                return cn(baseStyles, "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400");
            case 'info':
                return cn(baseStyles, "text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400");
            default:
                return cn(baseStyles, "text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-400");
        }
    };

    const getProgressBarColor = () => {
        switch (toast.type) {
            case 'success':
                return 'bg-green-500';
            case 'error':
                return 'bg-red-500';
            case 'warning':
                return 'bg-yellow-500';
            case 'info':
                return 'bg-blue-500';
            default:
                return 'bg-gray-500';
        }
    };

    const getIcon = () => {
        switch (toast.type) {
            case 'success':
                return <CheckCircle className="w-6 h-6" />;
            case 'error':
                return <AlertCircle className="w-6 h-6" />;
            case 'warning':
                return <AlertTriangle className="w-6 h-6" />;
            case 'info':
                return <Info className="w-6 h-6" />;
            default:
                return <Info className="w-6 h-6" />;
        }
    };

    return (
        <div
            className={cn(
                getToastStyles(),
                isExiting ? "animate-slide-out" : "animate-slide-in"
            )}
            role="alert"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700">
                <div
                    className={cn("h-full transition-all duration-75 ease-linear", getProgressBarColor())}
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Icon */}
            <div className={getIconStyles()}>
                {getIcon()}
            </div>

            {/* Message */}
            <div className="ml-3 flex-1 pt-0.5">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {toast.message}
                </p>
            </div>

            {/* Close button */}
            <button
                type="button"
                className="ml-3 inline-flex flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 rounded-lg p-1.5 transition-colors"
                onClick={handleRemove}
                aria-label="Close notification"
            >
                <X className="w-5 h-5" />
            </button>
        </div>
    );
};

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback((message, type = 'success', duration = 5000) => {
        const id = Math.random().toString(36).substr(2, 9);
        const newToast = { id, message, type, duration };

        setToasts((prev) => {
            // Limit to 5 toasts max
            const updated = [...prev, newToast];
            return updated.slice(-5);
        });
    }, []);

    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <div className="fixed bottom-4 right-4 z-50 space-y-3 pointer-events-none">
                {toasts.map((toast) => (
                    <div key={toast.id} className="pointer-events-auto">
                        <Toast toast={toast} onRemove={removeToast} />
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
