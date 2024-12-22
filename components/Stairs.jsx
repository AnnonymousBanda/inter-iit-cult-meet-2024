'use client'
import React from 'react';
import { delay, motion } from 'framer-motion';

export default function Stairs({ children }) {
    const anim = (variants, custom) => {
        return {
            initial: 'initial',
            animate: 'enter',
            exit: 'exit',
            variants,
            custom,
        };
    };

    const expand = {
        initial: { top: 0 },
        enter: (index) => ({
            top: '100%',
            transition: { duration: 1, delay: index * 0.1 },
            transitionEnd: { top: 0, height: '0' },
        }),
        exit: (index) => ({
            height: '100%',
            transition: { duration: 0.4, delay: index * 0.05 },
        }),
    };
    const numberofColumns = 5;

    return (
        <div className="stairs relative h-full w-full">
            <div className="transition-container h-screen w-full fixed top-0 left-0 pointer-events-none flex gap-0 z-[5000]">
                {[...Array(numberofColumns)].map((_, index) => (
                    <motion.div
                        {...anim(expand, 5 - index)}
                        key={index}
                        className="bg-[#000000] w-full h-full relative"
                    />
                ))}
            </div>
            {children}
        </div>
    );
}