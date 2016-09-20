define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/footer/footer.html'
], function($, _, Backbone, footerTemplate) {
  var FooterView = Backbone.View.extend({
    el: $('#bb-footer'),

    render: function() {
      // Compile the template using underscore

      // Load the compiled HTML into the Backbone "el"
      this.$el.addClass("page-footer").html(footerTemplate);

    },

  });
  return FooterView;
});
