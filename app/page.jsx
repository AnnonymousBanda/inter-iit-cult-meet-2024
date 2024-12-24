import React from 'react';
import { Footer, LazyBlurImage, Navbar, Stairs } from '../components';
import Image from 'next/image';

const EventCard = ({ imageUrl, text, heading }) => {
    return (
        <div className="md:basis-1/2 lg:basis-1/3 p-12">
            <div className="bg-textbox rounded-xl h-full flex flex-col justify-between">
                <Image
                    src={'/images/' + imageUrl}
                    width={1080}
                    height="1080"
                    className="w-full rounded-xl"
                    alt={heading}
                />
                <div className="p-4 h-full">
                    <div className="flex flex-col gap-4 justify-between h-full">
                        <div>
                            <h1 className="text-xl font-bold">{heading}</h1>
                            {/*<p>{heading} Description</p>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const page = () => {
    return (
        <>
            <Stairs>
                <section className="min-h-screen w-full relative bg-[#FFF8E7]">
                    <Navbar />
                    <div className="w-full lg:h-[12rem] h-[5rem]"></div>{' '}
                    {/* <div className="md:w-fit md:h-fit lg:block hidden absolute z-10 lg:bottom-[-3rem] bottom-[-2rem] right-0 leading-none">
                        <span className="lg:text-[55rem] text-[35rem] tracking-[-0.1em] text-black m-0 p-0 leading-[0.8] overflow-hidden">
                            7.0
                        </span>
                    </div> */}
                    <div className="w-0 h-0 xl:w-[55rem] xl:h-[50rem] lg:w-[45rem] lg:h-[40rem] md:w-[45rem] md:h-[40rem] z-10 absolute lg:bottom-0 bottom-[5rem] left-0">
                        <LazyBlurImage
                            src="herobg.png"
                            alt="Hero Image"
                            rounded={false}
                            bgColor={false}
                        />
                    </div>
                    <div className="w-[20rem] h-[30rem] z-10 md:w-0 md:h-0 absolute lg:bottom-0 bottom-[5rem] left-[-8rem]">
                        <LazyBlurImage
                            src="herobg3.png"
                            alt="Hero Image"
                            rounded={false}
                            bgColor={false}
                        />
                    </div>
                    <div className="w-full h-[15rem] lg:h-[0rem] xl:h-[0rem] absolute lg:bottom-0 bottom-[5rem]">
                        <LazyBlurImage
                            src="herobg4.png"
                            alt="Hero Image"
                            rounded={false}
                            bgColor={false}
                        />
                    </div>
                    <div className="w-[25rem] h-[25rem] lg:w-[35rem] lg:h-[35rem] absolute lg:bottom-0 bottom-[5rem] right-[0rem]">
                        <LazyBlurImage
                            src="herobg2.png"
                            alt="Hero Image"
                            rounded={false}
                            bgColor={false}
                        />
                    </div>
                    <div className="w-full h-full lg:py-[3rem] md:py-[8rem] py-[5rem] flex flex-col gap-[2rem] justify-center text-center items-center">
                        <h1 className="lg:text-[5.5rem] text-[4rem] tracking-wider uppercase">
                            INTER IIT CULTURAL MEET 7.0
                        </h1>
                        <h2 className="uppercase tracking-tight">
                            Hosted by IIT Patna
                        </h2>
                        <h2 className="tracking-widest py-[3rem]">
                            26th - 29th December 2024
                        </h2>
                    </div>
                </section>
            </Stairs>
            <div className="bg-[#FFF8E7] flex flex-col py-[6rem] items-center justify-center max-container">
                <h1 className="text-[5.5rem]">EVENTS</h1>
                <main className="w-full min-h-screen py-[6rem] bg-[#FFF8E7] flex flex-wrap items-center justify-center">
                    <EventCard
                        imageUrl="com.png"
                        text="hi"
                        heading="COMEDY CUP"
                    />
                    <EventCard
                        imageUrl="DAC.png"
                        text="hi"
                        heading="DIGITAL ARTS CUP"
                    />
                    <EventCard
                        imageUrl="Culinary Arts.png"
                        text="hi"
                        heading="CULINARY ARTS CUP"
                    />
                    <EventCard
                        imageUrl="FA.png"
                        text="hi"
                        heading="FINE ARTS CUP"
                    />
                    <EventCard
                        imageUrl="Fashion Cup.png"
                        text="hi"
                        heading="FASHION CUP"
                    />
                    <EventCard
                        imageUrl="Theartre.png"
                        text="hi"
                        heading="THEATRE CUP"
                    />
                    <EventCard
                        imageUrl="Dance art.png"
                        text="hi"
                        heading="DANCE ARTS CUP"
                    />
                    <EventCard
                        imageUrl="MA.png"
                        text="hi"
                        heading="MUSIC ARTS CUP"
                    />
                    <EventCard
                        imageUrl="LA.png"
                        text="hi"
                        heading="LITERARY ARTS CUP"
                    />
                    <EventCard
                        imageUrl="SA.png"
                        text="hi"
                        heading="SPEAKING ARTS CUP"
                    />
                    <EventCard
                        imageUrl="FIILM.png"
                        text="hi"
                        heading="FILM ARTS CUP"
                    />
                    <EventCard
                        imageUrl="QUIZ.png"
                        text="hi"
                        heading="QUIZ CUP"
                    />
                </main>
            </div>
            <Footer bgcolor="#FFF8E7" />
        </>
    );
};

export default page;
/* vi: set et sw=4: */
