import React from 'react';

interface IconProps {
  className?: string;
}

export const HeartHandsIcon = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M12 5 9.04 7.96a2.1 2.1 0 0 0 0 2.97l2.96 2.96" />
    <path d="m15 15-2-2" />
  </svg>
);

export const SparkRewardIcon = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.23 2.52c.3-.87 1.24-1.28 2.05-.88l1.43.71c.23.11.49.16.74.14l1.58-.11c.92-.06 1.7.53 1.88 1.43l.28 1.39c.04.22.13.43.26.6l1 1.22c.58.7.46 1.74-.27 2.27l-1.28.93c-.19.14-.35.33-.44.55l-.6 1.48c-.35.85-1.32 1.2-2.13.78l-1.42-.74a1.86 1.86 0 0 0-1.74 0l-1.42.74c-.81.42-1.78.07-2.13-.78l-.6-1.48a1.88 1.88 0 0 0-.44-.55l-1.28-.93c-.73-.53-.85-1.57-.27-2.27l1-1.22c.13-.17.22-.38.26-.6l.28-1.39c.18-.9.96-1.49 1.88-1.43l1.58.11c.25.02.51-.03.74-.14l1.43-.71c.81-.4 1.75.01 2.05.88Z" />
    <path fill="var(--bg-soft)" d="m10 13 2 2 3-4" />
  </svg>
);

export const ClipboardCheckIcon = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="m9 14 2 2 4-4" />
  </svg>
);

export const LinkedPathsIcon = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
  </svg>
);

export const SchoolIcon = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 9 12 4 2 9l10 5 10-5Z" />
    <path d="M6 11v5c0 2.2 2.7 4 6 4s6-1.8 6-4v-5" />
    <path d="M22 19v-4" />
    <path d="M2 19v-4" />
  </svg>
);

export const FamilyIcon = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const ChevronRightIcon = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export const StarIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);