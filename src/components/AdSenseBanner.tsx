import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export const AdSenseBanner: React.FC = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Ignore AdSense push errors in dev or when ad blockers are active
    }
  }, []);

  return (
    <section aria-label="Advertisement" className="w-full py-6 px-4 flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-[728px] min-h-[90px] flex items-center justify-center">
        <ins
          className="adsbygoogle inline-block w-[728px] max-w-full h-[90px]"
          data-ad-client="ca-pub-3426623111820173"
          data-ad-slot="4087206701"
        />
      </div>
    </section>
  );
};
