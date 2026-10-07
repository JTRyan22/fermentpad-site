// Fills every element with class "stores" with the download buttons, or a
// "coming soon" note before launch. Shared by the home and recipe pages.
(function () {
  var cfg = window.FERMENTPAD || {};
  var apple = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.2-1.7-3-1.9-3.6-2-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8s2 .8 3.3.8c1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.1 0-2.8-1-2.8-4.4zM14 5.4c.7-.8 1.2-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.4z"/></svg>';
  var play = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.6 1.8 13.8 12 3.6 22.2c-.4-.2-.6-.6-.6-1.1V2.9c0-.5.2-.9.6-1.1zm11.3 11.3 2.6 2.6-11.9 6.8 9.3-9.4zm4-2.3c.6.3.9.8.9 1.2s-.3.9-.9 1.2l-2.6 1.5-2.8-2.7 2.8-2.7 2.6 1.5zM5.6 1.5l11.9 6.8-2.6 2.6-9.3-9.4z"/></svg>';
  var html;
  if (cfg.storeLinksLive) {
    html = '';
    if (cfg.appStoreUrl) {
      html += '<a class="store" href="' + cfg.appStoreUrl + '">' + apple + 'Download on the App Store</a>';
    }
    html += '<a class="store" href="' + cfg.playStoreUrl + '">' + play + 'Get it on Google Play</a>';
  } else {
    html = '<p class="soon">Coming soon to the App Store and Google Play.</p>';
  }
  var slots = document.querySelectorAll(".stores");
  for (var i = 0; i < slots.length; i++) slots[i].innerHTML = html;
})();
