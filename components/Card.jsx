'use client';

import React from 'react';
import styled from 'styled-components';
import { LazyBlurImage } from './LazyBlurImage';
import { IoLogoLinkedin } from 'react-icons/io';
import Link from 'next/link';
import { FaPhone } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';

const Card = ({ image, link, name, por, number, mail }) => {
    return (
        <StyledWrapper>
            <div className="card">
                <div className="card-inner">
                    <div className="card-front flex flex-col gap-[1rem]">
                        <div className="w-full h-[250px]">
                            <LazyBlurImage
                                src={image}
                                alt="card image"
                                rounded={false}
                                bgColor={false}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="w-full h-auto text-center bg-[#FAFAFA] bottom-0">
                            <h3 className="leading-tight-[2rem] text-[2.2rem] font-[600]">
                                {name}
                            </h3>
                            <p className="opacity-65">{por}</p>
                        </div>
                    </div>
                    <div className="card-back">
                        <div>
                            <div className="flex flex-col items-center w-full text-center gap-[1rem]">
                                <h3 className="text-[2.5rem] font-[600]">
                                    {name}
                                </h3>
                                <p className="font-[600] flex items-center gap-[0.5rem]">
                                    <FaPhone size={18} />
                                    {'+91' + number}
                                </p>
                                <div className="flex justify-center  gap-[1rem]">
                                    <Link href={link || '#'}>
                                        <IoLogoLinkedin className="md:w-[4rem] md:h-[4rem] w-[5rem] h-[5rem] cursor-pointer" />
                                    </Link>
                                    <Link href={mail || '#'}>
                                        <FiMail className="md:w-[4rem] md:h-[4rem] w-[5rem] h-[5rem] cursor-pointer" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .card {
        width: 250px;
        height: 300px;
        perspective: 1000px;
    }

    .card-inner {
        width: 100%;
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.999s;
    }

    .card:hover .card-inner {
        transform: rotateY(180deg);
    }

    .card-front,
    .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
    }

    .card-front {
        background-color: #FAFAFA;
        color: #151515;
        display: flex;
        align-items: center;
        border: 10px solid #FAFAFA;
        border-radius: 10px;
        justify-content: center;
        font-size: 24px;
        transform: rotateY(0deg);
    }

    .card-back {
        background-color: #D5C9A8;
        color: #fff;
        display: flex;
        align-items: center;
        border: 2px solid #000000;
        border-radius: 10px;
        justify-content: center;
        font-size: 24px;
        transform: rotateY(180deg);
    }
`;

export default Card;
