angular
.module('feApp', [
    'ngAnimate', 
    'ngAria', 
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'oc.lazyLoad'
])  
.constant('APP_CONFIG', /* @echo APP_CONFIG */)
.value('debug', true);
