import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-auto py-6 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} LogiTrack. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
