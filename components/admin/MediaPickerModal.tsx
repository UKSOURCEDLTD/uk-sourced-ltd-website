'use client';

import { useEffect, useState } from 'react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '@/lib/firebase';
import { Loader2, X, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

interface MediaItem {
    name: string;
    url: string;
    path: string;
}

interface MediaPickerModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (url: string) => void;
}

export default function MediaPickerModal({ isOpen, onClose, onSelect }: MediaPickerModalProps) {
    const [images, setImages] = useState<MediaItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (isOpen) {
            fetchImages();
        }
    }, [isOpen]);

    const fetchImages = async () => {
        setLoading(true);
        try {
            const listRef = ref(storage, 'uploads');
            const res = await listAll(listRef);

            const imagePromises = res.items.map(async (itemRef) => {
                const url = await getDownloadURL(itemRef);
                return {
                    name: itemRef.name,
                    url,
                    path: itemRef.fullPath
                };
            });

            const resolvedImages = await Promise.all(imagePromises);
            setImages(resolvedImages);
        } catch (error) {
            console.error("Error fetching images:", error);
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-deep-charcoal/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-lg w-full max-w-4xl max-h-[80vh] flex flex-col shadow-2xl animate-in zoom-in-95 duration-200 border border-white/10">
                <div className="flex justify-between items-center p-6 border-b border-border-subtle">
                    <h2 className="text-xl font-heading font-medium text-deep-charcoal flex items-center gap-2">
                        <ImageIcon className="w-5 h-5 text-desaturated-teal" />
                        Select Image
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-soft-bg rounded-full transition-colors"
                    >
                        <X className="w-5 h-5 text-deep-charcoal/40" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 bg-soft-bg">
                    {loading ? (
                        <div className="flex justify-center py-20">
                            <Loader2 className="w-8 h-8 animate-spin text-desaturated-teal" />
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {images.length === 0 ? (
                                <div className="col-span-full py-20 text-center text-deep-charcoal/40 border-2 border-dashed border-border-subtle rounded-lg">
                                    No images found in Media Library.
                                </div>
                            ) : (
                                images.map((img) => (
                                    <button
                                        key={img.path}
                                        onClick={() => {
                                            onSelect(img.url);
                                            onClose();
                                        }}
                                        className="group relative aspect-square bg-white border border-border-subtle rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:ring-2 hover:ring-desaturated-teal transition-all text-left"
                                    >
                                        <div className="absolute inset-0 bg-soft-bg">
                                            <Image
                                                src={img.url}
                                                alt={img.name}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                            <p className="text-[10px] text-white/90 truncate font-mono">
                                                {img.name}
                                            </p>
                                        </div>
                                    </button>
                                ))
                            )}
                        </div>
                    )}
                </div>

                <div className="p-4 border-t border-border-subtle bg-white rounded-b-lg flex justify-between items-center text-xs text-deep-charcoal/60">
                    <p>Select an image to use in this slot.</p>
                </div>
            </div>
        </div>
    );
}
