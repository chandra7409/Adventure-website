;window.pgGeo="IN";;window.pgDevice="Desktop";window.pgWrappers = [{"src":"\/\/dsh7ky7308k4b.cloudfront.net\/publishers\/abtestwrappers\/Programizcom_fpd_default.min.js","key":"10d3dd2b-b608-4c00-9f9e-81ea58499a52","lowerThan":0.5},{"src":"\/\/dsh7ky7308k4b.cloudfront.net\/publishers\/abtestwrappers\/Programizcom_fpd_disabled.min.js","key":"a991e4d2-fb32-476e-b751-3b3a5f3357cc","lowerThan":1}];
window.pgRandom = Math.random();

var choosePgWrapper = function() {
  for (var i = 0; i < window.pgWrappers.length; i++) {
    if (window.pgWrappers[i].lowerThan >= window.pgRandom) {
      var script = document.createElement('script');
      script.src = window.pgWrappers[i].src;
      script.async = true;
      window.wrapperActive = window.pgWrappers[i].key;
      document.head.appendChild(script);
      return;
    }
  }
};

choosePgWrapper();