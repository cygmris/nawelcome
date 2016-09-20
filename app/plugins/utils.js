;
(function(factory) {
    if (typeof define === "function" && define.amd) {
        // AMD模式
        // define([ "jquery", 'domReady'], factory);
        define(["jquery"], factory);
    } else {
        // 全局模式
        // var domReady =  $(document).ready;
        factory(jQuery);
    }
    // }(function ($, domReady) {
}(function($) {

    // Required for Meteor package, the use of window prevents export by Meteor
    (function(window) {
        if (window.Package) {
            Materialize = {};
        } else {
            window.Materialize = {};
        }
    })(window);


    // Unique ID
    Materialize.guid = (function() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return function() {
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        };
    })();

    Materialize.elementOrParentIsFixed = function(element) {
        var $element = $(element);
        var $checkElements = $element.add($element.parents());
        var isFixed = false;
        $checkElements.each(function() {
            if ($(this).css("position") === "fixed") {
                isFixed = true;
                return false;
            }
        });
        return isFixed;
    };

    // // Velocity has conflicts when loaded with jQuery, this will check for it
    // var Vel;
    // if ($) {
    //     Vel = $.Velocity;
    // } else if (jQuery) {
    //     Vel = jQuery.Velocity;
    // } else {
    //     Vel = Velocity;
    // }

    // (function(Materialize) {
    //   console.log(Materialize);
    //   return {Materialize: Materialize};
    // })(Materialize);

    return Materialize;


}));


