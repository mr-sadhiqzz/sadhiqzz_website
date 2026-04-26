'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

import { Blog } from '@/types';

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();

  useEffect(() => {
    // Redirect if not logged in
    if (!authLoading && !user) {
      router.push('/auth');
      return;
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (!user || !slug) return;

    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${slug}`);
        const data = await response.json();

        if (response.ok) {
          setBlog(data.blog);
        } else {
          setError(data.error || 'Failed to fetch blog');
        }
      } catch (err) {
        setError('An error occurred while fetching the blog');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug, user]);

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading blog...</p>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-red-600 text-lg mb-4">
              {error || 'Blog not found'}
            </p>
            <Link
              href="/blogs"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/blogs"
          className="text-blue-600 hover:text-blue-700 font-medium mb-6 inline-block"
        >
          ← Back to Blogs
        </Link>

        <article className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>

          <div className="flex items-center gap-4 mb-6 text-gray-600 border-b pb-6">
            <span>By {blog.author}</span>
            <span>•</span>
            <span>
              {new Date(blog.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>

          <div className="prose max-w-none mb-8">
            <p className="text-lg text-gray-700 whitespace-pre-wrap">
              {blog.content}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
