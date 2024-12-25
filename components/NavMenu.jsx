'use client';
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';
import { MdOutlineClose } from 'react-icons/md';

export default function NavMenu({ menuOpen, setMenuOpen }) {
    const [activeLink, setActiveLink] = useState(null);

    const data = [
        {
            title: 'Home',
            link: '/',
        },
        {
            title: 'Rulebook',
            link: 'https://drive.google.com/file/d/10Klmfe6tuvGYcDDolDFJEj5jqmEV57We/view?usp=sharing',
        },
        {
            title: 'Schedule',
            link: 'https://docs.google.com/spreadsheets/d/16aj5holPMxsDlvULhnmG7ecDDyvFHT97R-ToTeUhaa4/edit?gid=82654713#gid=82654713',
        },
        {
            title: 'Leaderboard',
            link: '/leaderboard',
        },
        {
            title: 'Gymkhana',
            link: 'https://www.iitp.ac.in/gymkhana/',
        },
    ];

    useEffect(() => {
        const navLinks = document.querySelectorAll('.navlinks');
        if (menuOpen) {
            const tl = gsap.timeline();
            tl.fromTo(
                '.nav-header',
                { opacity: 0 },
                { opacity: 1, duration: 0.5, ease: 'linear' }
            );
            tl.to(navLinks, {
                opacity: 0.8,
                duration: 0.5,
                stagger: 0.1,
            });
        } else {
            const tl = gsap.timeline();
            tl.to(navLinks, {
                opacity: 0,
                duration: 0.3,
                stagger: -0.1,
            });
            tl.fromTo(
                '.nav-header',
                { opacity: 1 },
                { opacity: 0, duration: 0.5 }
            );
        }
    }, [menuOpen]);

    const router = useRouter();

    const handleMenuClick = () => {
        if (menuOpen) {
            setMenuOpen(false);
            gsap.to('.menu-transition', {
                duration: 0.5,
                right: '-100%',
                delay: 1,
            });
            setTimeout(() => {
                setActiveLink(null);
            }, 2000);
        } else {
            setMenuOpen(true);
            gsap.to('.menu-transition', {
                duration: 0.5,
                right: '0',
                delay: 0.3,
            });
        }
    };

    const handleCloseMenu = () => {
        setMenuOpen(false);
        gsap.to('.menu-transition', {
            duration: 2,
            right: '-100%',
            delay: 1,
        });
        setTimeout(() => {
            setActiveLink(null);
        }, 1000);
    };

    const handleNavOnClick = (link) => {
        handleCloseMenu();
        setTimeout(() => {
            router.push(link);
        }, 3000);
    };

    const isLinkSelected = (link) => activeLink && activeLink !== link;

    return (
        <div
            className={`bg-black xl:w-1/4 md:w-1/2 sm:w-1/2 w-full h-full fixed z-[500] menu-transition right-[-100%] top-0 text-[#dfdfdf]`}
        >
            <div className="w-full h-full flex flex-col max-container py-[2rem] bg-[#171717] overflow-x-hidden ">
                <div className="nav-header flex justify-end items-end border-b border-white text-[1.6rem] mb-[1.5rem] py-[1rem] px-[2rem]">
                    <div className="flex items-center justify-center sm:gap-[2rem] gap-[0.5rem]">
                        <>
                            <button
                                className="cursor-pointer flex justify-center items-center w-20 h-20"
                                onClick={handleMenuClick}
                            >
                                <MdOutlineClose size={45} />
                            </button>
                        </>
                    </div>
                </div>
                <ul className="flex flex-col items-end tracking-tight relative md:overflow-hidden no-scrollbar select-none">
                    {data.map(({ title, link }) => (
                        <li
                            key={title}
                            className={`navlinks px-[1.5rem] transition-opacity duration-500 ${
                                isLinkSelected(link) ? 'text-[#3a3a3a9e]' : ''
                            }`}
                        >
                            <p
                                onClick={() => handleNavOnClick(link)}
                                className="cursor-pointer md:text-[4rem] text-[3.5rem]"
                            >
                                {title}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
/* vi: set et sw=4: */
