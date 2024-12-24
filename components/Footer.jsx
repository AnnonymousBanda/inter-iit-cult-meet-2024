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
import { LazyBlurImage } from './LazyBlurImage';

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
                    Inter IIT Cultural Meet 2024
                </h2>
            </div>
            <div className="flex flex-row items-center gap-[3rem] flex-wrap justify-center content-center">
                <Link href="/" className="w-fit">
                    <h3 className="text-[#d7d3c8] text-center w-fit">Home</h3>
                </Link>
                <Link
                    href="https://iitp.ac.in/gymkhana"
                    target="_blank"
                    className="w-fit"
                >
                    <h3 className="text-[#d7d3c8] text-center w-fit">
                        Gymkhana
                    </h3>
                </Link>
                <Link href="/leaderboard" className="w-fit">
                    <h3 className="text-[#d7d3c8] text-center w-fit">
                        Leaderboard
                    </h3>
                </Link>
                <Link href="/contact-us" className="w-fit">
                    <h3 className="text-[#d7d3c8] text-center w-fit">
                        Contact&nbsp;Us
                    </h3>
                </Link>
            </div>

            <div className="flex lg:gap-[7rem] py-[2rem] gap-[5rem] w-full flex-wrap justify-center items-center">
                <div className="flex flex-row justify-around gap-[4rem] items-center">
                    <div className="md:w-[100px] md:h-[100px] w-[75px] h-[75px]">
                        <LazyBlurImage
                            src="inter-iit.png"
                            alt="inter iit cult logo"
                        />
                    </div>
                    <div className="md:w-[200px] md:h-[100px] w-[150px] h-[75px]">
                        <LazyBlurImage
                            src="gymkhana.gif"
                            alt="gymkhana logo"
                            rounded={false}
                        />
                    </div>
                </div>
            </div>

            <div className="flex md:gap-[10rem] gap-[3rem] text-[2rem] md:justify-start justify-center">
                <Link
                    href="https://www.facebook.com/gymkhana.iitp/"
                    target="_blank"
                    aria-label="Facebook"
                >
                    <FaFacebookF className="text-[20px] sm:text-[25px] md:text-[30px]" />
                </Link>
                <Link
                    href="https://www.instagram.com/iitpatna_gymkhana/"
                    target="_blank"
                    aria-label="Instagram"
                >
                    <FaInstagram className="text-[20px] sm:text-[25px] md:text-[30px]" />
                </Link>
                <Link
                    href="https://www.youtube.com/@studentgymkhanaiitpatna"
                    target="_blank"
                    aria-label="YouTube"
                >
                    <FaYoutube className="text-[20px] sm:text-[25px] md:text-[30px]" />
                </Link>
            </div>
            <div className="flex justify-between w-full mt-4">
                <div>
                    <p className="lg:text-[1.8rem] text-[1.2rem]">
                        &copy; Gymkhana, IIT Patna
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
                    className="w-full h-screen absolute top-[0] z-[10] bg-transparent pointer-events-none"
                    viewBox="0 0 500 250"
                    preserveAspectRatio="none"
                    fill="#F4F7FE"
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
