define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/video.html',
  // 'utils',
  // 'forms'
], function($, _, Backbone, videoTemplate) {

  var EnrollView = Backbone.View.extend({
    el: $('#bb-page'),
    render: function() {
      // Load the compiled HTML into the Backbone "el"
      this.$el.html(videoTemplate);

    }
  });

  return EnrollView;

});
