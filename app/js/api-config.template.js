/**
 * Created by schien on 07/11/2013.
 */
define([], function() {
    var config = {};
    config.apiKey = 'YOUR KEY';
    config.scopes = 'https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/userinfo.profile';
    config.clientId = 'ID.apps.googleusercontent.com';

    _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g
    };

    return config;
});