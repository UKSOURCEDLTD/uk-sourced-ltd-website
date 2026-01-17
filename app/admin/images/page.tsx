'use client';

import { useEffect, useState } from 'react';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Loader2, Save, Image as ImageIcon, Edit2 } from 'lucide-react';
import Image from 'next/image';
import MediaPickerModal from '@/components/admin/MediaPickerModal';

// Configuration for available image slots
const IMAGE_SLOTS = [
    { id: 'home_hero_bg', label: 'Home: Hero Background', description: 'Main background image on the homepage.' },
    { id: 'home_about_img', label: 'Home: About Section', description: 'Image displayed in the About section.' },
    { id: 'footer_logo', label: 'Footer: Logo', description: 'Logo displayed in the site footer.' },
    { id: 'consulting_network_grid', label: 'Consulting: Network Grid', description: 'Hero image on the Consulting page.' },
    { id: 'about_hero_structure', label: 'About: Hero Structure', description: 'Hero abstract image on the About page.' },
    { id: 'about_team_jameson', label: 'About: Team Jameson', description: 'Portrait of James Thorne.' },
    { id: 'about_team_elena', label: 'About: Team Elena', description: 'Portrait of Elena Vance.' },
    { id: 'about_team_marcus', label: 'About: Team Marcus', description: 'Portrait of Marcus Chen.' },
];

interface ImageSlotData {
    url: string;
    lastUpdated: number;
}

export default function SiteImagesPage() {
    const [slots, setSlots] = useState<Record<string, ImageSlotData>>({});
    const [loading, setLoading] = useState(true);
    const [pickerOpen, setPickerOpen] = useState(false);
    const [activeSlot, setActiveSlot] = useState<string | null>(null);
    const [updating, setUpdating] = useState<string | null>(null);

    useEffect(() => {
        fetchSlots();
    }, []);

    const fetchSlots = async () => {
        setLoading(true);
        try {
            const newSlots: Record<string, ImageSlotData> = {};
            for (const slot of IMAGE_SLOTS) {
                const docRef = doc(db, 'cms_images', slot.id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    newSlots[slot.id] = docSnap.data() as ImageSlotData;
                }
            }
            setSlots(newSlots);
        } catch (error) {
            console.error("Error fetching image slots:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleImageSelect = async (url: string) => {
        if (!activeSlot) return;

        setUpdating(activeSlot);
        try {
            const docRef = doc(db, 'cms_images', activeSlot);
            const data: ImageSlotData = {
                url,
                lastUpdated: Date.now()
            };

            // Check if exists to determine set vs update (though setDoc with merge is safer)
            await setDoc(docRef, data, { merge: true });

            setSlots(prev => ({
                ...prev,
                [activeSlot]: data
            }));
        } catch (error) {
            console.error("Error updating image slot:", error);
            alert("Failed to update image.");
        } finally {
            setUpdating(null);
            setPickerOpen(false);
            setActiveSlot(null);
        }
    };

    const openPicker = (slotId: string) => {
        setActiveSlot(slotId);
        setPickerOpen(true);
    };


    const handleImportDefaults = async () => {
        if (!confirm("This will upload default template images to your Media Library and set them as active. Continue?")) return;

        setLoading(true);
        try {
            // Define defaults to import
            const defaults = [
                {
                    slotId: 'home_about_img',
                    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfigwmoRZmNFL23ceYUbc9gUxdKZn9BBCPoTJyzLaXcZykpVU-kb7Iz8e5IYp0yv6aUcStpKuvx_rKqFckfTLm0f0aimyPfbpShz1NcKJgAX621uekZG89h-pKbMQsV_0wQI7wc6x-u3fXBatcxSuRm4Z-n9_NU28iTpM-Hiq_1uNi2IZcQrmbX_6GOW7hAojSsnbGGUlgAa0Bl2_dtBlKGnCkufBRAQv4MQoS00fsXR-TFSpeWLHlF_9uC-xBB0xwD9pKcqzv2myM',
                    filename: 'default_about_image.jpg'
                },
                {
                    slotId: 'footer_logo',
                    url: 'https://placehold.co/100x100/222222/FFFFFF?text=UK',
                    filename: 'default_footer_logo.png'
                },
                {
                    slotId: 'consulting_network_grid',
                    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfigwmoRZmNFL23ceYUbc9gUxdKZn9BBCPoTJyzLaXcZykpVU-kb7Iz8e5IYp0yv6aUcStpKuvx_rKqFckfTLm0f0aimyPfbpShz1NcKJgAX621uekZG89h-pKbMQsV_0wQI7wc6x-u3fXBatcxSuRm4Z-n9_NU28iTpM-Hiq_1uNi2IZcQrmbX_6GOW7hAojSsnbGGUlgAa0Bl2_dtBlKGnCkufBRAQv4MQoS00fsXR-TFSpeWLHlF_9uC-xBB0xwD9pKcqzv2myM',
                    filename: 'consulting_network_grid.jpg'
                },
                {
                    slotId: 'about_hero_structure',
                    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfigwmoRZmNFL23ceYUbc9gUxdKZn9BBCPoTJyzLaXcZykpVU-kb7Iz8e5IYp0yv6aUcStpKuvx_rKqFckfTLm0f0aimyPfbpShz1NcKJgAX621uekZG89h-pKbMQsV_0wQI7wc6x-u3fXBatcxSuRm4Z-n9_NU28iTpM-Hiq_1uNi2IZcQrmbX_6GOW7hAojSsnbGGUlgAa0Bl2_dtBlKGnCkufBRAQv4MQoS00fsXR-TFSpeWLHlF_9uC-xBB0xwD9pKcqzv2myM',
                    filename: 'about_hero_structure.jpg'
                },
                {
                    slotId: 'about_team_jameson',
                    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqIFsFd_agmGSHxVmqK-v4mdmSqrsYyssWogT_ORWxxJ57pKW1yZofFUQVQAlfhjdjPF6fq1Sl366K8LoKEuvmfw788GC6e4N6wws-MQ7Y8XtHWPHhR7khGkBHzXUoHwW51HafkrEMWQzA0GcmQxXYiIDQ6zUtKAOMLmgGw2e6uM9KqRdIAflDxnUfP0GXznFpfhjv7jkEHq1IqSOwUvb_WP5B5ylE-dY8WBt2D9Ubjk-8E3-UmDuDVc_tXd__B6FuK7iJp187O4-8',
                    filename: 'about_team_jameson.jpg'
                },
                {
                    slotId: 'about_team_elena',
                    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMojOtwkEtJ3ujJcBlUrO3hCCT0a1Jwg9w6ZUJ84WowfJoHcAo8Hd9Fg4ocqFTOl1UK6oh4uBZVRHzLNX0n10Qn-3ESrGcqLV3q1o6F6pRhJbYFAyuqO_rwT0i5f0ZBEK9wRDxFjMsYSCtwoTMlnKyWrVDdEndD2th5smdNulPbSA529k-W2blBFBWFoVGCDgJwukSfNKKlTdGWvoy-MTGBXeoR4YIcQ__spkmIh6F0ADzwO4YmcvgfvIzRJk-r61wbAXBL_bZ1-UC',
                    filename: 'about_team_elena.jpg'
                },
                {
                    slotId: 'about_team_marcus',
                    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzih8pm2YJ03anOC5NkXi19mf3zdR73shJj0bJPMwNrUKqsdW1XRbVZ7mbVbnA7_n7VxV22k3Nhm6g1ELhMEUl3m6pJPPNiLCKWxVXOQ1-PlYF_iE-oRhO_Oye-se_NycH4l7wBLTqLg1Ix2Bbk00P8pu7J15YwsolUR4nKdR2fUfLViV9879WJkXSkMENgl0bJ0XLEz3fV80trfPnATeHX3CSagv1sSlE4xp-r3wXf-TJyWhg2ncgZfNosVh4yMMmKItW2ImKQ9V4',
                    filename: 'about_team_marcus.jpg'
                }
            ];

            const { ref, uploadBytes, getDownloadURL } = await import('firebase/storage');
            const { storage } = await import('@/lib/firebase');

            for (const item of defaults) {
                // 1. Fetch the image
                const response = await fetch(item.url);
                const blob = await response.blob();

                // 2. Upload to Storage
                const storageRef = ref(storage, `uploads/${item.filename}`);
                await uploadBytes(storageRef, blob);
                const downloadURL = await getDownloadURL(storageRef);

                // 3. Update Firestore Slot
                const docRef = doc(db, 'cms_images', item.slotId);
                const data: ImageSlotData = {
                    url: downloadURL,
                    lastUpdated: Date.now()
                };
                await setDoc(docRef, data, { merge: true });

                // Update local state
                setSlots(prev => ({
                    ...prev,
                    [item.slotId]: data
                }));
            }
            alert("Defaults imported successfully!");

        } catch (error) {
            console.error("Import failed:", error);
            alert("Failed to import defaults. Check console.");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center p-12">
                <Loader2 className="w-8 h-8 animate-spin text-desaturated-teal" />
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-heading font-medium text-deep-charcoal">Site Images</h1>
                    <p className="text-sm text-deep-charcoal/60">Manage dynamic images across your website.</p>
                </div>
                <button
                    onClick={handleImportDefaults}
                    className="text-xs font-bold uppercase tracking-wider text-desaturated-teal hover:underline"
                >
                    Import Defaults
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {IMAGE_SLOTS.map((slot) => {
                    const currentData = slots[slot.id];
                    const isUpdating = updating === slot.id;

                    return (
                        <div key={slot.id} className="bg-white p-6 rounded-lg border border-border-subtle shadow-sm flex flex-col gap-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-bold text-deep-charcoal text-sm uppercase tracking-wide">{slot.label}</h3>
                                    <p className="text-xs text-deep-charcoal/50 mt-1">{slot.description}</p>
                                </div>
                                <button
                                    onClick={() => openPicker(slot.id)}
                                    disabled={isUpdating}
                                    className="p-2 hover:bg-soft-bg rounded-md transition-colors text-desaturated-teal"
                                    title="Change Image"
                                >
                                    {isUpdating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Edit2 className="w-4 h-4" />}
                                </button>
                            </div>

                            <div className="aspect-video bg-soft-bg rounded-md overflow-hidden relative border border-border-subtle">
                                {currentData?.url ? (
                                    <Image
                                        src={currentData.url}
                                        alt={slot.label}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-deep-charcoal/20">
                                        <ImageIcon className="w-8 h-8" />
                                        <span className="ml-2 text-xs font-mono">No Image Set</span>
                                    </div>
                                )}
                            </div>

                            <div className="text-[10px] font-mono text-deep-charcoal/40 truncate">
                                Slot ID: {slot.id}
                            </div>
                        </div>
                    );
                })}
            </div>

            <MediaPickerModal
                isOpen={pickerOpen}
                onClose={() => setPickerOpen(false)}
                onSelect={handleImageSelect}
            />
        </div>
    );
}
