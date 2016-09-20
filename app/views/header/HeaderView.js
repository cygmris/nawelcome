define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/header/header.html',
  'sideNav',
  'hammerjs',
  'hammer-jquery'
], function($, _, Backbone, headerTemplate, sideNav, hammerjs) {

  var HeaderView = Backbone.View.extend({
    el: $('#bb-header'),
    render: function() {
      // Load the compiled HTML into the Backbone "el"
      this.$el.html(headerTemplate);

      $(".button-collapse").sideNav();

      // var navbarView = new NavbarView();
      // navbarView.render();
      // $('.collapsible').collapsible({
      //   accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      // });

    }
  });

  return HeaderView;

});
