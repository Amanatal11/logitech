import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-auto py-6 text-center text-sm text-gray-500 dark:text-gray-400">
            <div className="flex justify-center gap-4 mb-2">
                <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300">Privacy Policy</a>
                <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300">Terms of Service</a>
            </div>
            <p>&copy; {new Date().getFullYear()} LogiTrack. All rights reserved. <span className="text-xs ml-2 opacity-75">v1.0.0</span></p>
        </footer>
    );
};

export default Footer;
