define([
  'jquery',
  'underscore',
  'backbone',
  'views/header/HeaderView',
  'views/home/HomeView',
  'views/footer/FooterView'
], function($, _, Backbone, HeaderView, HomeView, FooterView) {

  var AppRouter = Backbone.Router.extend({
    routes: {
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


    appRouter.on('route:homepage', function() {
      var homeView = new HomeView();
      // var searchView = new SearchView();
      homeView.render();
      console.log('xxoo');
    });

    appRouter.on('route:getTeacher', function(id) {

      // Call render on the module we loaded in via the dependency array
      // var projectsView = new ProjectsView();
      // projectsView.render();

      console.log(id);

    });
    appRouter.on('route:teachersInfo', function() {
      var teachersView = new TeachersView();
      // Call render on the module we loaded in via the dependency array
      // var projectsView = new ProjectsView();
      // projectsView.render();
      console.log('listing');

    });

    Backbone.history.start();

  };

  return {
    initialize: initialize
  };

});
