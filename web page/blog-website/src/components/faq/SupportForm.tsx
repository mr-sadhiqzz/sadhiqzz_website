'use client';

import { useState } from 'react';

interface SupportFormProps {
  onSubmit: (data: { email: string; subject: string; message: string }) => Promise<void>;
  formLoading: boolean;
  formError: string;
  formSuccess: boolean;
}

export default function SupportForm({ onSubmit, formLoading, formError, formSuccess }: SupportFormProps) {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit({ email, subject, message });
    if (!formError) {
      setEmail('');
      setSubject('');
      setMessage('');
    }
  };

  return (
    <div
      className="rounded-xl p-6 md:p-8"
      style={{ backgroundColor: '#f5e6b3' }}
    >
      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
        Don't find your answer, Ask for support.
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        We'll get back to you as soon as possible.
      </p>

      {formSuccess && (
        <div className="mb-4 p-3 bg-green-100 border border-green-300 text-green-800 rounded-lg text-sm">
          Thank you! Your message has been sent successfully.
        </div>
      )}

      {formError && (
        <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-800 rounded-lg text-sm">
          {formError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1f5f8b] focus:border-transparent text-sm"
            placeholder="your@email.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-1">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1f5f8b] focus:border-transparent text-sm"
            placeholder="How can we help?"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-1">
            Message <span className="text-gray-500 font-normal">(Optional)</span>
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1f5f8b] focus:border-transparent text-sm resize-y"
            placeholder="Tell us more..."
          />
        </div>

        <button
          type="submit"
          disabled={formLoading}
          className="w-full py-3 px-4 rounded-lg font-semibold text-white text-sm transition-colors hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ backgroundColor: '#f97316' }}
        >
          {formLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

