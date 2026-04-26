'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

import Link from 'next/link';

import Header from '@/components/faq/Header';
import SecondaryNav from '@/components/faq/SecondaryNav';
import FAQAccordion from '@/components/faq/FAQAccordion';
import SupportForm from '@/components/faq/SupportForm';
import Footer from '@/components/faq/Footer';

import { FAQ } from '@/types';

export default function FAQPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const defaultFaqs: FAQ[] = [
    {
      id: 'default-1',
      question: 'How do I create an account on the blog?',
      answer: 'You can create an account by clicking the "Sign Up" button on the authentication page. You will need to provide a valid email address and create a secure password. Once registered, you can log in and start exploring all features.',
    },
    {
      id: 'default-2',
      question: 'How can I reset my password if I forget it?',
      answer: 'Currently, you can contact our support team through the support form on this page to request a password reset. We are working on an automated password reset feature that will be available soon.',
    },
    {
      id: 'default-3',
      question: 'How do I write and publish a new blog post?',
      answer: 'After logging in, navigate to the Blogs section where you can create a new post. Add a compelling title, write your content, and include an excerpt. Once ready, your post will be published and visible to all readers.',
    },
    {
      id: 'default-4',
      question: 'What are the content guidelines for blog posts?',
      answer: 'We encourage original, respectful, and informative content. Please avoid plagiarism, hate speech, or inappropriate material. All posts should provide value to readers and adhere to our community standards.',
    },
    {
      id: 'default-5',
      question: 'How can I contact support for additional help?',
      answer: 'You can use the support form on the right side of this page. Simply fill in your email, subject, and message, and our team will get back to you as soon as possible. We typically respond within 24-48 hours.',
    },
  ];

  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  const router = useRouter();
  const { user, loading: authLoading } = useAuth();

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/auth');
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (!user) return;

    const fetchFaqs = async () => {
      try {
        const response = await fetch('/api/faq');
        const data = await response.json();

        if (response.ok) {
          setFaqs(data.faqs || []);
        } else {
          setError(data.error || 'Failed to fetch FAQs');
        }
      } catch (err) {
        setError('An error occurred while fetching FAQs');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, [user]);

  const handleSubmitSupport = useCallback(
    async ({ email, subject, message }: { email: string; subject: string; message: string }) => {
      setFormError('');
      setFormSuccess(false);
      setFormLoading(true);

      try {
        const response = await fetch('/api/support', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, subject, message }),
        });

        const data = await response.json();

        if (!response.ok) {
          setFormError(data.error || 'Failed to send message');
          return;
        }

        setFormSuccess(true);
        setTimeout(() => setFormSuccess(false), 3000);
      } catch (err) {
        setFormError('An error occurred. Please try again.');
        console.error(err);
      } finally {
        setFormLoading(false);
      }
    },
    []
  );

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

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f5f5f5' }}>
      {/* Top Header */}
      <Header />

      {/* Secondary Navigation */}
      <SecondaryNav />

      {/* Breadcrumb */}
      <div className="w-full bg-white border-b border-grey-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <nav className="text-sm text-gray-500">
            <span className="hover:text-gray-700 cursor-pointer">Home</span>
            <span className="mx-2">{'>'}</span>
            <span className="hover:text-gray-700 cursor-pointer">Pages</span>
            <span className="mx-2">{'>'}</span>
            <span className="text-gray-900 font-medium">FAQs</span>
          </nav>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white px-4 py-2 rounded-md transition-colors hover:opacity-90"
            style={{ backgroundColor: '#e34d07' }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT: FAQ Accordion (65%) */}
          <div className="w-full lg:w-[65%]">
            <FAQAccordion faqs={[...defaultFaqs, ...faqs]} loading={loading} error={error} />
          </div>

          {/* RIGHT: Support Form (35%) */}
          <div className="w-full lg:w-[35%]">
            <SupportForm
              onSubmit={handleSubmitSupport}
              formLoading={formLoading}
              formError={formError}
              formSuccess={formSuccess}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

