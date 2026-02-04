window.onload = function () {
    console.log("Portfolio loaded successfully");
};

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(() => console.log('Service Worker registered'))
      .catch(err => console.log('SW failed', err));
  });
}
