define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/department.html',
], function($, _, Backbone, departmentTemplate) {

    var EnrollView = Backbone.View.extend({
        el: $('#bb-page'),
        render: function() {
            // Load the compiled HTML into the Backbone "el"


            var introduction = {
                'tech': 'sdfsdfsdf',
                'res' : 'sdfsdfsdf'
            }


            // var template = _.template(departmentTemplate, {artists: artists.models});

            // this.$el.html(departmentTemplate);

            // utils.updateTextFields();

        },

    });

    return EnrollView;

});
