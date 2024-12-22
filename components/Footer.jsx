'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube,
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const FooterContent = () => {
    return (
        <div className="w-full max-container bg-[#141516] text-[#d7d3c8] py-8 flex flex-col justify-between items-center min-h-screen h-auto">
            <div className="flex flex-col items-center text-center gap-[2rem] py-[4rem]">
                <Image
                    src="/images/admin-block.svg"
                    width={500}
                    height={200}
                    alt="admin block"
                />
                <h2 className="text-[#d7d3c8] uppercase xl:text-[3.6rem] md:text-[2.7rem] text-[1.5rem]">
                    Indian Institute of Technology, Patna
                </h2>
            </div>

            <div className="flex lg:gap-[7rem] py-[2rem] gap-[5rem] flex-wrap justify-center">
                <div className="flex flex-col gap-[2rem] items-center">
                    <h2 className="xl:text-[3.6rem] md:text-[2.7rem] text-[1.8rem]">
                        Useful&nbsp;Links
                    </h2>
                    <div className="flex flex-col items-center gap-[1rem] ">
                        <Link href="https://academics.iitp.ac.in/">
                            <p className="text-[#d7d3c8] lg:text-[2.5rem]">
                                Academics
                            </p>
                        </Link>
                        <Link href="/admissions">
                            <p className="text-[#d7d3c8]  lg:text-[2.5rem]">
                                Admissions
                            </p>
                        </Link>
                        <Link href="/about">
                            <p className="text-[#d7d3c8]  lg:text-[2.5rem]">
                                About Us
                            </p>
                        </Link>
                        <Link href="/visit">
                            <p className="text-[#d7d3c8]  lg:text-[2.5rem]">
                                Visit&nbsp;IITP
                            </p>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-[2rem] items-center">
                    <h2 className="xl:text-[3.6rem] md:text-[2.7rem] text-[1.8rem]">
                        Useful&nbsp;Links
                    </h2>
                    <div className="flex flex-col items-center gap-[1rem] ">
                        <Link href="https://academics.iitp.ac.in/">
                            <p className="text-[#d7d3c8] lg:text-[2.5rem]">
                                Academics
                            </p>
                        </Link>
                        <Link href="/admissions">
                            <p className="text-[#d7d3c8]  lg:text-[2.5rem]">
                                Admissions
                            </p>
                        </Link>
                        <Link href="/about">
                            <p className="text-[#d7d3c8]  lg:text-[2.5rem]">
                                About Us
                            </p>
                        </Link>
                        <Link href="/visit">
                            <p className="text-[#d7d3c8]  lg:text-[2.5rem]">
                                Visit&nbsp;IITP
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-[2rem] items-center">
                    <h2 className="xl:text-[3.6rem] md:text-[2.7rem] text-[1.8rem]">
                        Useful&nbsp;Links
                    </h2>
                    <div className="flex flex-col items-center gap-[1rem] ">
                        <Link href="https://academics.iitp.ac.in/">
                            <p className="text-[#d7d3c8] lg:text-[2.5rem]">
                                Academics
                            </p>
                        </Link>
                        <Link href="/admissions">
                            <p className="text-[#d7d3c8]  lg:text-[2.5rem]">
                                Admissions
                            </p>
                        </Link>
                        <Link href="/about">
                            <p className="text-[#d7d3c8]  lg:text-[2.5rem]">
                                About Us
                            </p>
                        </Link>
                        <Link href="/visit">
                            <p className="text-[#d7d3c8]  lg:text-[2.5rem]">
                                Visit&nbsp;IITP
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-[2rem] items-center">
                    <h2 className="xl:text-[3.6rem] md:text-[2.7rem] text-[1.8rem]">
                        Useful&nbsp;Links
                    </h2>
                    <div className="flex flex-col items-center gap-[1rem] ">
                        <Link href="https://academics.iitp.ac.in/">
                            <p className="text-[#d7d3c8] lg:text-[2.5rem]">
                                Academics
                            </p>
                        </Link>
                        <Link href="/admissions">
                            <p className="text-[#d7d3c8]  lg:text-[2.5rem]">
                                Admissions
                            </p>
                        </Link>
                        <Link href="/about">
                            <p className="text-[#d7d3c8]  lg:text-[2.5rem]">
                                About Us
                            </p>
                        </Link>
                        <Link href="/visit">
                            <p className="text-[#d7d3c8]  lg:text-[2.5rem]">
                                Visit&nbsp;IITP
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex md:gap-[10rem] gap-[1.5rem] text-[2rem] md:justify-start justify-center">
                <Link
                    href="https://www.facebook.com/IITPatna"
                    target="_blank"
                    aria-label="Facebook"
                >
                    <FaFacebookF className="text-[20px] sm:text-[25px] md:text-[30px]" />
                </Link>
                <Link
                    href="https://twitter.com/IITPatna"
                    target="_blank"
                    aria-label="Twitter"
                >
                    <FaTwitter className="text-[20px] sm:text-[25px] md:text-[30px]" />
                </Link>
                <Link
                    href="https://www.linkedin.com/school/iitpatna"
                    target="_blank"
                    aria-label="LinkedIn"
                >
                    <FaLinkedinIn className="text-[20px] sm:text-[25px] md:text-[30px]" />
                </Link>
                <Link
                    href="https://www.instagram.com/IITPatna"
                    target="_blank"
                    aria-label="Instagram"
                >
                    <FaInstagram className="text-[20px] sm:text-[25px] md:text-[30px]" />
                </Link>
                <Link
                    href="https://www.youtube.com/IITPatna"
                    target="_blank"
                    aria-label="YouTube"
                >
                    <FaYoutube className="text-[20px] sm:text-[25px] md:text-[30px]" />
                </Link>
            </div>
            <div className="flex justify-between w-full mt-4">
                <div>
                    <p className="lg:text-[1.8rem] text-[1.2rem]">
                        &copy;Indian Institute of Technology, Patna
                    </p>
                </div>
                <div>
                    <p className="lg:text-[1.8rem] text-[1.2rem]">
                        Privacy Policy
                    </p>
                </div>
            </div>
        </div>
    );
};

const Footer = () => {
    const pathRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => {
            if (typeof window !== 'undefined') {
                setContainerWidth(window.innerWidth);
            }
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);

        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.footer',
                start: 'top bottom',
                end: 'top top',
                scrub: 1,
            },
        });

        tl.to(pathRef.current, {
            attr: {
                d: `M 0 0 Q 250 ${containerWidth >= 770 ? 150 : containerWidth >= 430 ? 50 : 35} 500 0`,
            },
            duration: 1,
        }).to(pathRef.current, {
            attr: {
                d: 'M 0 0 Q 250 0 500 0',
            },
            duration: 1,
        });

        return () => {
            ScrollTrigger.getAll().forEach((instance) => instance.kill());
            tl.kill();
        };
    }, []);

    return (
        <footer className="footer bg-transparent bg-[#141516] h-auto text-white text-[1.6rem] relative w-full font-home scroll-smooth">
            <div className="w-full h-auto flex flex-col justify-between items-center bg-transparent">
                <svg
                    className="w-full h-screen absolute top-[0] z-[100] bg-transparent pointer-events-none"
                    viewBox="0 0 500 250"
                    preserveAspectRatio="none"
                    fill="#f0f0f0"
                >
                    <path
                        ref={pathRef}
                        d="M 0 0 Q 250 0 500 0"
                        strokeWidth="1"
                        fill="#fff"
                        className="filter drop-shadow-[0_7px_13px_rgba(128,128,128,0.3)]"
                    />
                </svg>
                <div className="w-full min-h-full h-auto bg-[#141516] fixed bottom-0 z-[-1]">
                    <FooterContent />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
