'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { LazyBlurImage } from './LazyBlurImage';
import gsap from 'gsap';
import NavMenu from './NavMenu'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuClick = () => {
        if (menuOpen) {
            setMenuOpen(false);
            gsap.to('.menu-transition', {
                duration: 1,
                right: '-100%',
                delay: 0.2,
            });
        } else {
            setMenuOpen(true);
            gsap.to('.menu-transition', {
                duration: 1,
                right: '0',
                delay: 0.2,
            });
        }
    };
    return (
        <nav className="max-container py-[2rem] flex justify-between items-center">
            <div className="lg:w-[10rem] lg:h-[10rem] w-[6rem] h-[6rem]">
                <LazyBlurImage
                    src="inter-iit.png"
                    alt="Inter-IIT logo"
                    bgColor={false}
                />
            </div>
            <div className="flex h-fit w-fit bg-[#1C1D20] rounded-full cursor-pointer">
                <div
                    className="flex flex-col justify-center items-center gap-[0.4rem] lg:w-[6rem] lg:h-[6rem] w-[4.5rem] h-[4.5rem] p-[1rem] cursor-pointer"
                    onClick={handleMenuClick}
                >
                    <div className="w-3/5 h-[0.2rem] bg-[#AEAAA5]"></div>
                    <div className="w-3/5 h-[0.2rem] bg-[#AEAAA5]"></div>
                </div>
            </div>
            <NavMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </nav>
    );
};

export default Navbar;
