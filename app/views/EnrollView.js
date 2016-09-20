define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/enroll.html',
    'utils',
    'forms',
], function($, _, Backbone, enrollTemplate, utils, forms) {

    var EnrollView = Backbone.View.extend({
        el: $('#bb-page'),
        render: function() {
            // Load the compiled HTML into the Backbone "el"
            this.$el.html(enrollTemplate);

            utils.updateTextFields();

        },
        events: {
            // "submit #enroll-form": "enroll"
        },
        enroll: function(event){
          event.preventDefault();
          var self = this;

        }
    });

    return EnrollView;

});
