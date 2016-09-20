// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'router', // Request router.js
  // 'materialize',
  'pluginsloader',

  // 'materialize',
], function($, _, Backbone, Router, Pluginsloader) {
  var initialize = function() {
    // Pass in our Router module and call it's initialize function


    $('.preloader-wrapper').fadeOut();

    Router.initialize();

    // setTimeout(function(){ 
    //   setTimeout(function(){
    //   }, 800);
    // }, 1000);

    // $('ul.slide').slide()

    // console.log($('ul.slide'));
    Pluginsloader.initialize();
    

  };
  
  return {
    initialize: initialize
  };
});
