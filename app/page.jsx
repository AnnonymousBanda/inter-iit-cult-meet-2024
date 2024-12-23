import React from 'react';
import { LazyBlurImage, Navbar, Stairs } from '../components';

const page = () => {
    return (
        <Stairs>
            <section className="min-h-screen w-full relative bg-white">
                <Navbar />
                <div className="w-full lg:h-[12rem] h-[8rem]"></div>                <div className="w-fit h-fit absolute bottom-[-3rem] right-0 leading-none">
                    <span className="text-[55rem] tracking-[-0.1em] text-gray-200 m-0 p-0 leading-[0.8] overflow-hidden">
                        7.0
                    </span>
                </div>
                <div className='w-[55rem] h-[50rem] absolute bottom-0 left-0'>
                    <LazyBlurImage src='herobg.png' alt='Hero Image' rounded={false} bgColor={false} />
                </div>
                <div className='w-[40rem] h-[40rem] absolute bottom-0 right-[2rem]'>
                    <LazyBlurImage src='herobg2.png' alt='Hero Image' rounded={false} bgColor={false} />
                </div>
                <div className='w-full h-full py-[3rem] flex flex-col gap-[2rem] justify-center text-center items-center'>
                    <h1 className='text-[5.5rem] tracking-wider uppercase'>INTER IIT CULTURAL MEET 7.0</h1>
                    <h2 className='uppercase tracking-tight'>Hosted by IIT Patna</h2>
                    <h2 className='tracking-widest py-[3rem]'>26th - 29th December 2024</h2>
                </div>
            </section>
        </Stairs>
    );
};

export default page;
