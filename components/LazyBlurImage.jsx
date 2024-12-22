'use client';

import { useState } from 'react';
import Image from 'next/image';

const LazyBlurImage = ({
    src,
    alt,
    width = 0,
    height = 0,
    rounded = true,
    bgColor = true,
    className = '',
}) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div
            style={{
                width: width === 0 ? '100%' : width / 10 + 'rem',
                height: height === 0 ? '100%' : height / 10 + 'rem',
                position: 'relative',
                backgroundColor: bgColor ? 'rgba(0, 0, 0, 0.1)' : '',
                borderRadius: rounded && '100%',
                overflow: 'hidden',
            }}
            className={className}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(/images/blurred/${src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(10px)',
                    transition: 'opacity 0.7s ease',
                    opacity: loaded ? 0 : 1,
                }}
                className={className}
            />

            <Image
                src={`/images/${src}`}
                alt={alt}
                className={`object-cover object-center transition-opacity duration-700 ${
                    loaded ? 'opacity-100' : 'opacity-0'
                } ${rounded ? 'rounded-full' : ''} ${className}`}
                fill
                loading="lazy"
                placeholder="blur"
                blurDataURL={`/images/blurred/${src}`}
                onLoad={() => setLoaded(true)}
                sizes="100%"
            />
        </div>
    );
};

const FullScreenLazyBlurImage = ({
    src,
    alt,
    rounded = true,
    bgColor = true,
    className = '',
}) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div
            className={`relative w-full h-full ${bgColor ? 'bg-[rgba(0,0,0,0.1)]' : ''} ${rounded ? 'rounded-full' : ''} ${className}`}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(/images/blurred/${src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(10px)',
                    transition: 'opacity 0.7s ease',
                    opacity: loaded ? 0 : 1,
                }}
            />

            <Image
                src={`/images/${src}`}
                alt={alt}
                fill
                placeholder="blur"
                blurDataURL={`/images/blurred/${src}`}
                quality={100}
                sizes="100vw"
                className={`object-cover object-center transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'} ${rounded ? 'rounded-full' : ''} ${className}`}
                onLoad={() => setLoaded(true)}
                priority
            />
        </div>
    );
};

export { LazyBlurImage, FullScreenLazyBlurImage };
