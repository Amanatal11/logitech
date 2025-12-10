import React from 'react';
import { useToast } from '../context/ToastContext';
import { Bell, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react';

const NotificationDemo = () => {
    const { addToast } = useToast();

    const showSuccessToast = () => {
        addToast('Shipment created successfully!', 'success', 5000);
    };

    const showErrorToast = () => {
        addToast('Failed to update shipment status', 'error', 5000);
    };

    const showWarningToast = () => {
        addToast('Delivery may be delayed due to weather', 'warning', 5000);
    };

    const showInfoToast = () => {
        addToast('New driver assigned to your shipment', 'info', 5000);
    };

    const showMultipleToasts = () => {
        addToast('First notification', 'success', 5000);
        setTimeout(() => addToast('Second notification', 'info', 5000), 500);
        setTimeout(() => addToast('Third notification', 'warning', 5000), 1000);
        setTimeout(() => addToast('Fourth notification', 'error', 5000), 1500);
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Notification System Demo</h1>
                <p className="text-gray-500 dark:text-gray-400">Test the enhanced notification system with different types and animations</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                    <Bell className="w-5 h-5 mr-2" />
                    Notification Types
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                        onClick={showSuccessToast}
                        className="flex items-center justify-center px-6 py-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors group"
                    >
                        <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 mr-3" />
                        <div className="text-left">
                            <div className="font-semibold text-green-900 dark:text-green-100">Success</div>
                            <div className="text-sm text-green-600 dark:text-green-400">Show success notification</div>
                        </div>
                    </button>

                    <button
                        onClick={showErrorToast}
                        className="flex items-center justify-center px-6 py-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors group"
                    >
                        <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 mr-3" />
                        <div className="text-left">
                            <div className="font-semibold text-red-900 dark:text-red-100">Error</div>
                            <div className="text-sm text-red-600 dark:text-red-400">Show error notification</div>
                        </div>
                    </button>

                    <button
                        onClick={showWarningToast}
                        className="flex items-center justify-center px-6 py-4 bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-200 dark:border-yellow-800 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors group"
                    >
                        <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mr-3" />
                        <div className="text-left">
                            <div className="font-semibold text-yellow-900 dark:text-yellow-100">Warning</div>
                            <div className="text-sm text-yellow-600 dark:text-yellow-400">Show warning notification</div>
                        </div>
                    </button>

                    <button
                        onClick={showInfoToast}
                        className="flex items-center justify-center px-6 py-4 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors group"
                    >
                        <Info className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                        <div className="text-left">
                            <div className="font-semibold text-blue-900 dark:text-blue-100">Info</div>
                            <div className="text-sm text-blue-600 dark:text-blue-400">Show info notification</div>
                        </div>
                    </button>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                        onClick={showMultipleToasts}
                        className="w-full px-6 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg hover:shadow-xl font-semibold"
                    >
                        Show Multiple Notifications
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Features</h2>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Smooth Animations:</strong> Slide-in and slide-out transitions</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Progress Bar:</strong> Visual countdown showing time remaining</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Hover to Pause:</strong> Hover over notification to pause auto-dismiss</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Manual Dismiss:</strong> Click the X button to close immediately</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Stacking:</strong> Maximum of 5 notifications displayed at once</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Dark Mode:</strong> Fully compatible with dark theme</span>
                    </li>
                </ul>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl border border-primary-200 dark:border-primary-800 p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Usage Example</h3>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {`import { useToast } from './context/ToastContext';

const MyComponent = () => {
  const { addToast } = useToast();

  const handleAction = () => {
    // Show notification
    addToast('Action completed!', 'success', 5000);
    // Types: 'success', 'error', 'warning', 'info'
    // Duration in milliseconds (default: 5000)
  };

  return <button onClick={handleAction}>Click me</button>;
};`}
                </pre>
            </div>
        </div>
    );
};

export default NotificationDemo;
