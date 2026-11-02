/* A page opened straight from the folder (file://) can't save reservations or reach the admin.
   If the site's server (start.bat) is running, move to the same page on it. */
(() => {
  if (location.protocol !== 'file:') return;
  const route = document.currentScript.dataset.route || '/';
  const base = 'http://localhost:5173';
  fetch(`${base}/assets/tables.js`, { mode: 'no-cors', cache: 'no-store' })
    .then(() => location.replace(base + route + location.hash))
    .catch(() => {});
})();
