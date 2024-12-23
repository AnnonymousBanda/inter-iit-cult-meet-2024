'use client';
import Link from 'next/link';
import React, { use, useEffect, useState } from 'react';
import { LazyBlurImage } from './LazyBlurImage';
import gsap from 'gsap';
import NavMenu from './NavMenu';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Magnetic } from '.';

gsap.registerPlugin(ScrollTrigger);

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

    useEffect(() => {
        gsap.to('.navbar', {
            scrollTrigger: {
                trigger: '.footer',
                start: 'top center',
                toggleActions: 'play none reverse none',
                onEnter: () => {
                    gsap.to('.navbar', {
                        duration: 1,
                        top: '-15rem',
                        ease: 'back.out',
                    });
                },
                onLeaveBack: () => {
                    gsap.to('.navbar', {
                        duration: 1,
                        top: '0px',
                        ease: 'back.in',
                    });
                },
            },
        });
    }, []);

    return (
        <div className="w-full fixed top-0 z-50 navbar bg-white shadow-md">
            <nav className="max-container py-[1rem] flex justify-between items-center">
                <div className="lg:w-[8rem] lg:h-[8rem] w-[6rem] h-[6rem]">
                    <LazyBlurImage
                        src="inter-iit.png"
                        alt="Inter-IIT logo"
                        bgColor={false}
                    />
                </div>
                <Magnetic>
                    <div className="flex h-fit w-fit bg-[#1C1D20] rounded-full cursor-pointer">
                        <div
                            className="flex flex-col justify-center items-center gap-[0.4rem] lg:w-[5rem] lg:h-[5rem] w-[4rem] h-[4rem] p-[1rem] cursor-pointer"
                            onClick={handleMenuClick}
                        >
                            <div className="w-3/5 h-[0.2rem] bg-[#AEAAA5]"></div>
                            <div className="w-3/5 h-[0.2rem] bg-[#AEAAA5]"></div>
                        </div>
                    </div>
                </Magnetic>
                <NavMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </nav>
        </div>
    );
};

export default Navbar;
