// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'router', // Request router.js
  'slide'
  // 'materialize',
], function($, _, Backbone, Router, Slide) {
  var initialize = function() {
    // Pass in our Router module and call it's initialize function


    Router.initialize();

    $('.loading-app').fadeOut();



  };
  
  return {
    initialize: initialize
  };
});
