import React from 'react';
import './globals.css';
import { Navbar } from '../components';

export const metadata = {
    title: 'Inter IIT Cultural Meet 2024',
    description: 'The official website for the Inter IIT Cultural Meet 2024',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
