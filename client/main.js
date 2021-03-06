Template.setup.created = function() {
  if (!(window._gaq != null)) {
    window._gaq = [];
    _gaq.push(['_setAccount', 'UA-38480319-1']);
    _gaq.push(['_trackPageview']);
    return (function() {
      var ga, gajs, s;
      ga = document.createElement('script');
      ga.type = 'text/javascript';
      ga.async = true;
      gajs = '.google-analytics.com/ga.js';
      ga.src = document.location.protocol === 'https:' ? 'https://ssl' + gajs : 'https://www' + gajs;
      s = document.getElementsByTagName('script')[0];
      return s.parentNode.insertBefore(ga, s);
    })();
  }
};