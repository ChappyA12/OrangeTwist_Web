
const TRACKING_ID = "UA-120289024-1";

$(window).load(function() {
	window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', TRACKING_ID);
});
