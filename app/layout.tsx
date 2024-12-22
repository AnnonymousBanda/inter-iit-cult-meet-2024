import React from 'react';
import './globals.css';
import { Footer, Navbar } from './../components';

export const metadata = {
    title: 'Inter IIT Cultural Meet 2024',
    description: 'The official website for the Inter IIT Cultural Meet 2024',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main className="max-container">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
