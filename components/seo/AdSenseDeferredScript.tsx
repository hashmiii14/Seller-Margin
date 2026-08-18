'use client';

import { useEffect } from 'react';

export interface AdSenseDeferredScriptProps {
  clientId: string;
}

export const AdSenseDeferredScript: React.FC<AdSenseDeferredScriptProps> = ({ clientId }) => {
  useEffect(() => {
    const loadAdSense = () => {
      if (document.getElementById('adsense-script')) return;

      const script = document.createElement('script');
      script.id = 'adsense-script';
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`;
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    };

    // Trigger loading on user interaction (scroll, touch, click, mousemove) or after 3.5s idle window
    const timer = setTimeout(loadAdSense, 3500);

    const onUserInteraction = () => {
      clearTimeout(timer);
      loadAdSense();
      window.removeEventListener('scroll', onUserInteraction);
      window.removeEventListener('touchstart', onUserInteraction);
      window.removeEventListener('click', onUserInteraction);
      window.removeEventListener('mousemove', onUserInteraction);
    };

    window.addEventListener('scroll', onUserInteraction, { passive: true });
    window.addEventListener('touchstart', onUserInteraction, { passive: true });
    window.addEventListener('click', onUserInteraction, { passive: true });
    window.addEventListener('mousemove', onUserInteraction, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onUserInteraction);
      window.removeEventListener('touchstart', onUserInteraction);
      window.removeEventListener('click', onUserInteraction);
      window.removeEventListener('mousemove', onUserInteraction);
    };
  }, [clientId]);

  return null;
};
