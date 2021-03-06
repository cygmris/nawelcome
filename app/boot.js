// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    // text: 'vendor/text/text',
    // hammerjs: 'vendor/materialize/js/hammer.min',
    jquery: 'vendor/jquery/dist/jquery.min',
    // 'hammer-jquery': 'vendor/Materialize/js/jquery.hammer',
    underscore: 'vendor/underscore/underscore-min',
    backbone: 'vendor/backbone/backbone-min',
    // jquery: 'libs/jquery.min',
    // materialize: 'libs/materialize.min',
    // underscore: 'libs/underscore-min',
    // backbone: 'libs/backbone-min',
    // materialize: 'vendor/materialize/dist/js/materialize',
    text: 'vendor/text/text',

    domReady: 'vendor/domReady/domReady',

    velocity: 'vendor/materialize/js/velocity.min',

    slide: 'plugins/slide',

    buttons: 'vendor/materialize/js/buttons',

    forms: 'plugins/forms',

    // utils: 'vendor/materialize/js/global',
    utils: 'plugins/utils',

    // sideNav: 'plugins/sideNav',
    sideNav: 'vendor/materialize/js/sideNav',

    hammerjs: 'vendor/materialize/js/hammer.min',
    
    'hammer-jquery': 'vendor/materialize/js/jquery.hammer',

    templates: '../templates'
  },
  shim: {
    'hammerjs': {
      exports: 'Hammer',
      deps: ['jquery']
    },
    'hammer-jquery': {
      deps: ['jquery']
    },
    'underscore': {
      // deps: ['jquery'],
      exports: '_'
    },
    'backbone': {
      deps: [
              'underscore',
              'jquery'
      ],
      exports: ['Backbone']

    },

  }
});

require([
  // Load our app module and pass it to our definition function
  'app',

], function(App) {
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});
