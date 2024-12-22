import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="max-container">
            <ul className="w-full flex justify-between items-center">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/leaderboard">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
