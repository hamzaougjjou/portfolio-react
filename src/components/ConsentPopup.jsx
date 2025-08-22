import React, { useEffect, useState } from 'react';

const ConsentBar = () => {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('user_consent');
    if (!consent) {
      // بعد 5 ثواني يظهر البار
      const timer = setTimeout(() => {
        setShowBar(true);

        // Set default denied consent with wait time
        window.gtag &&
          window.gtag('consent', 'default', {
            ad_storage: 'denied',
            analytics_storage: 'denied',
            wait_for_update: 500,
          });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    window.gtag &&
      window.gtag('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
      });
    localStorage.setItem('user_consent', 'accepted');
    setShowBar(false);
  };

  const rejectAll = () => {
    window.gtag &&
      window.gtag('consent', 'update', {
        ad_storage: 'denied',
        analytics_storage: 'denied',
      });
    localStorage.setItem('user_consent', 'rejected');
    setShowBar(false);
  };

  return (
    showBar && (
      <div className="fixed bottom-0 inset-x-0 bg-white shadow-lg border-t border-gray-300 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-semibold text-gray-800 mb-1">Cookie Consent</h2>
            <p className="text-gray-600 text-sm">
              We use cookies to improve your experience. You can accept or refuse tracking cookies.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={rejectAll}
              className="px-4 py-2 text-sm rounded bg-gray-200 text-gray-800 hover:bg-gray-300"
            >
              Reject All
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 text-sm rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ConsentBar;
