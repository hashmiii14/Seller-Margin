'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Share2, Check } from 'lucide-react';

export const ShareButton: React.FC<{ getShareUrl: () => string }> = ({ getShareUrl }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const url = getShareUrl();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleCopy}
      className="gap-1.5 text-xs"
      aria-label="Copy shareable calculation link"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-600" /> Link Copied!
        </>
      ) : (
        <>
          <Share2 className="w-3.5 h-3.5 text-slate-500" /> Share Calculation
        </>
      )}
    </Button>
  );
};
