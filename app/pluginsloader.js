// Filename: app.js
define([
  'jquery',
  // 'materialize',
  'velocity',
  'slide',
  'buttons',
  'utils'
], function($, velocity, slide, buttons) {
  var initialize = function() {
    // Pass in our Router module and call it's initialize function
    // console.log($.fn.slide);

    slide.initialize();

  };
  
  return {
    initialize: initialize
  };
});
