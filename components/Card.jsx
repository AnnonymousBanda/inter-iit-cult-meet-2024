'use client';

import React from 'react';
import styled from 'styled-components';
import { LazyBlurImage } from './LazyBlurImage';
import { IoLogoLinkedin } from 'react-icons/io';
import Link from 'next/link';

const Card = ({ src, link, name, por }) => {
    return (
        <StyledWrapper>
            <div className="card">
                <div className="card-inner">
                    <div className="card-front flex flex-col gap-[1rem]">
                        <div className='w-full h-[250px]'>
                            <LazyBlurImage
                                src="background.jpg"
                                alt="card image"
                                rounded={false}
                                bgColor={false}
                                className='rounded-lg'
                            />
                        </div>
                        <div className="w-full h-auto text-center bg-[#e5dae5] bottom-0">
                            <h3 className="leading-tight-[2rem] text-[2.2rem] font-[600]">
                                {name}
                            </h3>
                            <p className="opacity-65">{por}</p>
                        </div>
                    </div>
                    <div className="card-back">
                        <div>
                            <Link href={link || '#'}>
                                <IoLogoLinkedin className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] cursor-pointer" />
                            </Link>
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
        background-color: #e5dae5;
        color: #151515;
        display: flex;
        align-items: center;
        border: 10px solid #e5dae5;
        border-radius: 10px;
        justify-content: center;
        font-size: 24px;
        transform: rotateY(0deg);
    }

    .card-back {
        background-color: #880088;
        color: #fff;
        display: flex;
        align-items: center;
        border: 10px solid #880088;
        border-radius: 10px;
        justify-content: center;
        font-size: 24px;
        transform: rotateY(180deg);
    }
`;

export default Card;
