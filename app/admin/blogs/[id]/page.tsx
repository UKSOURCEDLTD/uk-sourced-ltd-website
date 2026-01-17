'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import BlogEditor from '@/components/admin/BlogEditor';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Loader2 } from 'lucide-react';

export default function EditBlogPage() {
    const params = useParams();
    const id = params?.id as string;
    const [post, setPost] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            fetchPost();
        }
    }, [id]);

    const fetchPost = async () => {
        try {
            const docRef = doc(db, 'blog_posts', id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setPost({ id: docSnap.id, ...docSnap.data() });
            } else {
                console.error("Post not found");
            }
        } catch (error) {
            console.error("Error fetching post:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <Loader2 className="w-8 h-8 animate-spin text-desaturated-teal" />
            </div>
        );
    }

    if (!post) {
        return <div>Post not found</div>;
    }

    return <BlogEditor initialData={post} isEditing={true} />;
}
