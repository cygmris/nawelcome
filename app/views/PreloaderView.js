define([
    'jquery',
    'underscore',
    'backbone',
    // 'text!templates/preloader.html',
], function($, _, Backbone) {

    var PreloaderView = Backbone.View.extend({
        el: $('#bb-page'),
        render: function() {
            // Load the compiled HTML into the Backbone "el"

            // this.$el.html(enrollTemplate);
            // if (this.$el.css('display') == 'none') {
            //     this.$el.fadeIn();
            // } else {
            //     this.$el.fadeOut();
            // }
            this.$el.html($('.preloader-wrapper').html());

        },

    });

    return PreloaderView;

});
