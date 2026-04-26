'use client';

import { useState } from 'react';
import { FAQ } from '@/types';

interface FAQAccordionProps {
  faqs: FAQ[];
  loading: boolean;
  error: string;
}

export default function FAQAccordion({ faqs, loading, error }: FAQAccordionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="w-full">
      <h2
        className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
      >
        Frequently Asked Questions
      </h2>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400"></div>
          <span className="ml-3 text-gray-600">Loading FAQs...</span>
        </div>
      ) : faqs.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <p className="text-gray-500">No FAQs available yet.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-lg overflow-hidden shadow-sm"
                style={{
                  backgroundColor: isOpen ? '#ff7a2f' : '#f3f4f6',
                }}
              >
                <button
                  onClick={() => setExpandedId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors"
                >
                  <span
                    className="font-semibold text-sm md:text-base pr-4"
                    style={{ color: isOpen ? '#ffffff' : '#111827' }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-lg font-medium"
                    style={{
                      color: isOpen ? '#ffffff' : '#6b7280',
                      backgroundColor: isOpen ? 'rgba(255,255,255,0.2)' : 'transparent',
                    }}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div
                    className="px-5 py-4"
                    style={{ backgroundColor: '#ffffff' }}
                  >
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
