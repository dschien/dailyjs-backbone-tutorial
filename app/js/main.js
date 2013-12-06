requirejs.config({
    baseUrl: 'js',

    paths: {
        text: 'lib/text',
        jquery: 'lib/jquery',
        picker: 'lib/picker'
    },

    shim: {
        'lib/underscore-min': {
            exports: '_'
        },

        'lib/backbone': {
            deps: ['lib/underscore-min'], exports: 'Backbone'
        },
        'lib/picker': {
            deps: ['jquery']
        },
        'lib/jquery.sortable': {
            deps: ['jquery']
        },
        'app': {
            deps: ['lib/underscore-min', 'lib/backbone', 'lib/jquery.sortable','lib/picker.time', 'lib/picker.date']
        }
    }
});

require([
    'app'
],

    function (App) {
        window.bTask = new App();
    });
