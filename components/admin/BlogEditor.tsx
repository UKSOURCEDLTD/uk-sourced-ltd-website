'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/lib/firebase';
import { collection, addDoc, doc, updateDoc, Timestamp } from 'firebase/firestore';
import { Loader2, Save, Image as ImageIcon, ArrowLeft, Eye } from 'lucide-react';
import MediaPickerModal from './MediaPickerModal';
import Image from 'next/image';

interface BlogPost {
    id?: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featuredImage: string;
    category: string;
    author: string;
    status: 'draft' | 'published';
    publishedAt?: any;
    createdAt?: any;
    updatedAt?: any;
}

interface BlogEditorProps {
    initialData?: BlogPost;
    isEditing?: boolean;
}

export default function BlogEditor({ initialData, isEditing = false }: BlogEditorProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [showMediaPicker, setShowMediaPicker] = useState(false);
    const [mediaPickerMode, setMediaPickerMode] = useState<'featured' | 'content'>('featured');

    const [formData, setFormData] = useState<BlogPost>({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        featuredImage: '',
        category: 'Strategy',
        author: 'Admin', // default for now
        status: 'draft',
        ...initialData
    });

    // Auto-generate slug from title if not editing and slug is empty
    useEffect(() => {
        if (!isEditing && formData.title && !formData.slug) {
            const slug = formData.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)+/g, '');
            setFormData(prev => ({ ...prev, slug }));
        }
    }, [formData.title, isEditing]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageSelect = (url: string) => {
        if (mediaPickerMode === 'featured') {
            setFormData(prev => ({ ...prev, featuredImage: url }));
        } else {
            // Insert into content
            const imageMarkdown = `\n![Image](${url})\n`;
            setFormData(prev => ({ ...prev, content: prev.content + imageMarkdown }));
        }
    };

    const openMediaPicker = (mode: 'featured' | 'content') => {
        setMediaPickerMode(mode);
        setShowMediaPicker(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const postData = {
                ...formData,
                updatedAt: Timestamp.now(),
                publishedAt: formData.status === 'published' && (!initialData?.publishedAt) ? Timestamp.now() : (initialData?.publishedAt || null),
            };

            if (isEditing && initialData?.id) {
                // Update
                const docRef = doc(db, 'blog_posts', initialData.id);
                await updateDoc(docRef, postData);
            } else {
                // Create
                postData.createdAt = Timestamp.now();
                await addDoc(collection(db, 'blog_posts'), postData);
            }

            router.push('/admin/blogs');
        } catch (error) {
            console.error("Error saving post:", error);
            alert("Failed to save post. Check console for details.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="p-2 hover:bg-white rounded-full transition-colors hidden md:block"
                    >
                        <ArrowLeft className="w-5 h-5 text-deep-charcoal/60" />
                    </button>
                    <h1 className="text-2xl font-heading font-medium text-deep-charcoal">
                        {isEditing ? 'Edit Post' : 'New Post'}
                    </h1>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => window.open('/blog/preview', '_blank')}
                        className="hidden px-4 py-2 text-sm font-medium text-deep-charcoal/60 hover:text-deep-charcoal transition-colors md:flex items-center gap-2"
                        disabled // Disabled for now until preview is implemented
                    >
                        <Eye className="w-4 h-4" />
                        Preview
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-deep-charcoal text-white px-6 py-2.5 rounded-lg flex items-center gap-2 font-medium hover:bg-deep-charcoal/90 transition-all disabled:opacity-50"
                    >
                        {loading ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                            <Save className="w-4 h-4" />
                        )}
                        {isEditing ? 'Update Post' : 'Publish Post'}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-lg border border-border-subtle shadow-sm space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-deep-charcoal/40 uppercase tracking-wider mb-2">Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Enter post title"
                                className="w-full text-xl font-heading font-medium border-b border-border-subtle focus:border-desaturated-teal focus:outline-none py-2 bg-transparent placeholder:text-deep-charcoal/20"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-deep-charcoal/40 uppercase tracking-wider mb-2">Detailed Content (Markdown)</label>
                            <div className="relative">
                                <textarea
                                    name="content"
                                    value={formData.content}
                                    onChange={handleChange}
                                    placeholder="Write your post content in Markdown..."
                                    className="w-full h-[500px] border border-border-subtle rounded-md p-4 focus:border-desaturated-teal focus:outline-none resize-y font-mono text-sm leading-relaxed"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => openMediaPicker('content')}
                                    className="absolute top-2 right-2 p-2 bg-soft-bg hover:bg-white border border-border-subtle rounded text-deep-charcoal/60 hover:text-desaturated-teal transition-all"
                                    title="Insert Image"
                                >
                                    <ImageIcon className="w-4 h-4" />
                                </button>
                            </div>
                            <p className="text-[10px] text-deep-charcoal/40 mt-2 text-right">Supports standard Markdown.</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-border-subtle shadow-sm space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-deep-charcoal/40 uppercase tracking-wider mb-2">Excerpt</label>
                            <textarea
                                name="excerpt"
                                value={formData.excerpt}
                                onChange={handleChange}
                                placeholder="Short summary for cards (1-2 sentences)"
                                className="w-full h-24 border border-border-subtle rounded-md p-3 focus:border-desaturated-teal focus:outline-none resize-none text-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Status & Meta */}
                    <div className="bg-white p-6 rounded-lg border border-border-subtle shadow-sm space-y-4">
                        <h3 className="font-heading font-medium text-deep-charcoal">Publishing</h3>

                        <div>
                            <label className="block text-xs font-bold text-deep-charcoal/40 uppercase tracking-wider mb-2">Status</label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full border border-border-subtle rounded-md p-2 text-sm focus:border-desaturated-teal focus:outline-none bg-white"
                            >
                                <option value="draft">Draft</option>
                                <option value="published">Published</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-deep-charcoal/40 uppercase tracking-wider mb-2">Category</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full border border-border-subtle rounded-md p-2 text-sm focus:border-desaturated-teal focus:outline-none bg-white"
                            >
                                <option value="Strategy">Strategy</option>
                                <option value="Logistics">Logistics</option>
                                <option value="Advertising">Advertising</option>
                                <option value="Market Insights">Market Insights</option>
                                <option value="Case Studies">Case Studies</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-deep-charcoal/40 uppercase tracking-wider mb-2">Slug</label>
                            <input
                                type="text"
                                name="slug"
                                value={formData.slug}
                                onChange={handleChange}
                                className="w-full border border-border-subtle rounded-md p-2 text-sm font-mono text-deep-charcoal/60 bg-soft-bg focus:border-desaturated-teal focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="bg-white p-6 rounded-lg border border-border-subtle shadow-sm space-y-4">
                        <h3 className="font-heading font-medium text-deep-charcoal">Featured Image</h3>

                        <div
                            onClick={() => openMediaPicker('featured')}
                            className={`
                                relative aspect-video border-2 border-dashed border-border-subtle rounded-lg overflow-hidden cursor-pointer hover:border-desaturated-teal transition-all group
                                ${!formData.featuredImage ? 'flex items-center justify-center bg-soft-bg' : ''}
                            `}
                        >
                            {formData.featuredImage ? (
                                <>
                                    <Image
                                        src={formData.featuredImage}
                                        alt="Featured"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <p className="text-white text-xs font-medium">Change Image</p>
                                    </div>
                                </>
                            ) : (
                                <div className="text-center p-4">
                                    <ImageIcon className="w-8 h-8 text-deep-charcoal/20 mx-auto mb-2" />
                                    <p className="text-xs text-deep-charcoal/40">Click to select image</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <MediaPickerModal
                isOpen={showMediaPicker}
                onClose={() => setShowMediaPicker(false)}
                onSelect={handleImageSelect}
            />
        </form>
    );
}
