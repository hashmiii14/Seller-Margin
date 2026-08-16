'use client';

import React from 'react';

export interface AdSlotProps {
  type?: 'leaderboard' | 'rectangle' | 'infeed' | 'responsive';
  className?: string;
}

export const AdSlot: React.FC<AdSlotProps> = ({ type = 'responsive', className = '' }) => {
  const isEnabled = process.env.NEXT_PUBLIC_ENABLE_ADS === 'true';

  if (!isEnabled) {
    return null;
  }

  const getSlotStyle = () => {
    switch (type) {
      case 'leaderboard':
        return 'w-full max-w-[728px] h-[90px]';
      case 'rectangle':
        return 'w-[300px] h-[250px]';
      case 'infeed':
        return 'w-full h-[120px]';
      case 'responsive':
      default:
        return 'w-full min-h-[100px]';
    }
  };

  return (
    <div className={`my-6 flex justify-center items-center bg-slate-50 dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-800 rounded-xl overflow-hidden ${getSlotStyle()} ${className}`}>
      {/* Google AdSense Script placeholder container */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-XXXXXXXXXXXXXXXX'}
        data-ad-slot="1234567890"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};
