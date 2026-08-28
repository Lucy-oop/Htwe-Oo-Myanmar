import React, { useState, useEffect } from 'react';

const PILL_LABELS = [
  'Pitch us an idea',
  'Come work here',
  'Send a brief hello',
  'See how we operate',
];

const CONTACT_EMAIL = 'hello@mainframe.co';

export const ActionPills: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(CONTACT_EMAIL);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = CONTACT_EMAIL;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div
      id="action-pills-container"
      className="flex flex-wrap gap-y-1"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
      }}
    >
      {PILL_LABELS.map((label, index) => (
        <button
          key={index}
          id={`pill-action-${index}`}
          type="button"
          className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap cursor-pointer hover:bg-black hover:text-white transition-colors duration-200"
        >
          {label}
        </button>
      ))}

      {/* Outline Pill Button for Email & Copy */}
      <button
        id="pill-contact-copy"
        type="button"
        onClick={handleCopyEmail}
        title={copied ? 'Copied to clipboard!' : 'Click to copy email address'}
        className="inline-flex items-center justify-center text-white bg-transparent border border-white rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap cursor-pointer gap-2 sm:gap-3 hover:bg-white hover:text-black transition-colors duration-200 group"
      >
        <span>
          Reach us:{' '}
          <span className="underline underline-offset-1">
            {CONTACT_EMAIL}
          </span>
        </span>
        {copied ? (
          <span className="text-[11px] uppercase tracking-wider font-semibold">
            Copied!
          </span>
        ) : (
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
            aria-hidden="true"
          >
            <rect
              x="3.5"
              y="3.5"
              width="7"
              height="7"
              rx="1"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M8.5 2V1.5C8.5 1.22386 8.27614 1 8 1H1.5C1.22386 1 1 1.22386 1 1.5V8C1 8.27614 1.22386 8.5 1.5 8.5H2"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
};
