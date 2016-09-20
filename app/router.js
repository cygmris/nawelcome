define([
    'jquery',
    'underscore',
    'backbone',
    'views/header/HeaderView',
    'views/home/HomeView',
    'views/footer/FooterView',
    'views/EnrollView',
    // 'views/PreloaderView',
    'views/VideoView',
    'views/DepartmentView'
], function($, _, Backbone, HeaderView, HomeView, FooterView, EnrollView, VideoView, DepartmentView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            "": "homepage",
            "!": "homepage",
            "enroll": "enroll",
            "video": "video",
            "department/:department": "department",
            "*actions": "homepage",
            // "teacher/:id": "getTeacher",
            // "teachers/*": "teachersInfo",
            // "*actions": "defaultRoute", // matches http://example.com/#anything - here
            // ":route/:action": "loadView"
        }
    });

    var initialize = function() {
        var appRouter = new AppRouter;

        //render common layout
        var headerView = new HeaderView();
        headerView.render();

        var footerView = new FooterView();
        footerView.render();

        // var preloaderView = new PreloaderView();


        // var ViewManager = {
        //     currentView: null,
        //     showView: function(view) {
        //         if (this.currentView !== null && this.currentView.cid != view.cid) {
        //             // this.currentView.empty();
        //         }

        //         this.currentView = view;


        //         return view.render();


        //     }
        // };

        appRouter.on('route:homepage', function() {
            var homeView = new HomeView();
            // var searchView = new SearchView();
            homeView.render();
            // ViewManager.showView(homeView);

            console.log('homepage rendered');
        });

        appRouter.on('route:enroll', function() {

            // Call render on the module we loaded in via the dependency array

            var enrollView = new EnrollView();

            enrollView.render();

        });

        appRouter.on('route:video', function() {

            // Call render on the module we loaded in via the dependency array

            var videoView = new VideoView();

            videoView.render();


        });


        appRouter.on('route:department', function(department) {
            var departmentView = new DepartmentView();
            // Call render on the module we loaded in via the dependency array
            console.log(department);

        });


        Backbone.history.start();

    };

    return {
        initialize: initialize
    };

});
