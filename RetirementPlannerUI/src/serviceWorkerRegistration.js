// Service Worker Registration

export function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) {
    console.log('[PWA] Service Workers are not supported in this browser');
    return;
  }

  window.addEventListener('load', () => {
    const swUrl = `${process.env.PUBLIC_URL}/serviceWorker.js`;

    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        console.log('[PWA] Service Worker registered:', registration);

        // Check for updates periodically (every hour)
        setInterval(() => {
          registration.update();
        }, 60 * 60 * 1000);

        // Listen for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;

          if (newWorker === null) return;

          newWorker.addEventListener('statechange', () => {
            if (
              newWorker.state === 'installed' &&
              navigator.serviceWorker.controller
            ) {
              console.log('[PWA] New service worker available - app update ready');
              // Optionally notify the user about the update
              notifyUserAboutUpdate();
            }
          });
        });
      })
      .catch((error) => {
        console.error('[PWA] Service Worker registration failed:', error);
      });

    // Check if a new service worker is waiting
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('[PWA] Service Worker updated');
        // Page will reload automatically or show a message
      });
    }
  });
}

// Prompt user about available updates
function notifyUserAboutUpdate() {
  // You can customize this notification based on your app's design
  if (
    window.confirm(
      'A new version of Retirement Planner is available. Would you like to update?'
    )
  ) {
    window.location.reload();
  }
}

// Unregister service worker (if needed)
export function unregisterServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .getRegistration()
      .then((registration) => {
        if (registration) {
          registration.unregister();
        }
      })
      .catch((error) => {
        console.error('[PWA] Error unregistering Service Worker:', error);
      });
  }
}

// Check if app is installed as PWA
export function isAppInstalled() {
  return window.navigator.standalone === true || window.matchMedia('(display-mode: standalone)').matches;
}

// Get installation state
export function onBeforeInstallPrompt(callback) {
  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    callback(event);
  });
}
