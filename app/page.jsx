import React from 'react';
import { Navbar, Stairs } from '../components';
import Link from 'next/link';

const page = () => {
    return (
        <Stairs>
            <section className="min-h-screen bg-white">
                <Navbar />
                <Link href="/contact">Contact</Link>
            </section>
        </Stairs>
    );
};

export default page;
