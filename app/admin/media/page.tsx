'use client';

import { useEffect, useState } from 'react';
import { ref, uploadBytes, listAll, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from '@/lib/firebase';
import { Loader2, Upload, Trash2, Copy, Check } from 'lucide-react';
import Image from 'next/image';

interface MediaItem {
    name: string;
    url: string;
    path: string;
}

export default function MediaPage() {
    const [images, setImages] = useState<MediaItem[]>([]);
    const [uploading, setUploading] = useState(false);
    const [loading, setLoading] = useState(true);
    const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

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

    useEffect(() => {
        fetchImages();
    }, []);

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        try {
            const storageRef = ref(storage, `uploads/${Date.now()}_${file.name}`);
            await uploadBytes(storageRef, file);
            await fetchImages(); // Refresh list
        } catch (error) {
            console.error("Upload failed", error);
            alert("Upload failed. Check console or Firebase Storage rules.");
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (path: string) => {
        if (!confirm("Are you sure you want to delete this image?")) return;

        try {
            const deleteRef = ref(storage, path);
            await deleteObject(deleteRef);
            setImages(prev => prev.filter(img => img.path !== path));
        } catch (error) {
            console.error("Delete failed", error);
            alert("Delete failed.");
        }
    };

    const copyToClipboard = (url: string) => {
        navigator.clipboard.writeText(url);
        setCopiedUrl(url);
        setTimeout(() => setCopiedUrl(null), 2000);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-heading font-medium text-deep-charcoal">Media Library</h1>
                    <p className="text-sm text-deep-charcoal/60">Upload and manage images for your site.</p>
                </div>
                <div className="relative">
                    <input
                        type="file"
                        id="file-upload"
                        className="hidden"
                        accept="image/*"
                        onChange={handleUpload}
                        disabled={uploading}
                    />
                    <label
                        htmlFor="file-upload"
                        className={`bg-desaturated-teal text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-2 ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                        {uploading ? 'Uploading...' : 'Upload Image'}
                    </label>
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center p-12">
                    <Loader2 className="w-8 h-8 animate-spin text-desaturated-teal" />
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {images.length === 0 ? (
                        <div className="col-span-full py-12 text-center text-deep-charcoal/40 border-2 border-dashed border-border-subtle rounded-lg">
                            No images found. Upload one to get started.
                        </div>
                    ) : (
                        images.map((img) => (
                            <div key={img.path} className="group relative bg-white border border-border-subtle rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <div className="aspect-square relative bg-soft-bg">
                                    <Image
                                        src={img.url}
                                        alt={img.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-3 border-t border-border-subtle">
                                    <p className="text-xs text-deep-charcoal/70 truncate mb-3" title={img.name}>
                                        {img.name}
                                    </p>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => copyToClipboard(img.url)}
                                            className="flex-1 flex items-center justify-center gap-1.5 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-soft-bg hover:bg-deep-charcoal hover:text-white transition-colors rounded-sm border border-border-subtle"
                                            title="Copy URL"
                                        >
                                            {copiedUrl === img.url ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                                            {copiedUrl === img.url ? 'Copied' : 'Copy URL'}
                                        </button>
                                        <button
                                            onClick={() => handleDelete(img.path)}
                                            className="p-1.5 text-deep-charcoal/40 hover:text-red-500 transition-colors"
                                            title="Delete"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
