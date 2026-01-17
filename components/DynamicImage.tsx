'use client';

import { useEffect, useState } from 'react';
import Image, { ImageProps, StaticImageData } from 'next/image';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Loader2 } from 'lucide-react';

interface DynamicImageProps extends Omit<ImageProps, 'src' | 'alt'> {
    slot: string;
    fallbackSrc: StaticImageData | string;
    alt: string;
}

export default function DynamicImage({ slot, fallbackSrc, alt, className, ...props }: DynamicImageProps) {
    const [imageSrc, setImageSrc] = useState<string | StaticImageData>(fallbackSrc);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Subscribe to real-time updates for this image slot
        const unsub = onSnapshot(doc(db, "cms_images", slot), (doc) => {
            if (doc.exists() && doc.data().url) {
                setImageSrc(doc.data().url);
            } else {
                setImageSrc(fallbackSrc);
            }
            setLoading(false);
        }, (error) => {
            console.error(`Error fetching image for slot ${slot}:`, error);
            setLoading(false);
        });

        return () => unsub();
    }, [slot, fallbackSrc]);

    return (
        <div className={`relative w-full h-full`}>
            <Image
                src={imageSrc}
                alt={alt}
                className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'} ${className}`}
                {...props}
            />
        </div>
    );
}
