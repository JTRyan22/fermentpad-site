// FermentPad website settings.
//
// BEFORE LAUNCH: the store buttons stay hidden (a "coming soon" note shows
// instead) until storeLinksLive is true. Once the app is live:
//   1. paste the App Store link into appStoreUrl
//   2. change storeLinksLive to true
//   3. when Google Play is live too, change playStoreLive to true
// Keep these matching lib/app_links.dart in the app.
window.FERMENTPAD = {
  storeLinksLive: false,
  appStoreUrl: "",
  playStoreLive: false,
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.jt.fermentpad",
};
