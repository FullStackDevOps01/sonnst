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
.constant('APP_CONFIG', {
    "services": {
        "users": {
            "create": "http://172.20.20.20:3000/api/v1/users/create",
            "login": "http://172.20.20.20:3000/api/v1/users/login",
            "list": "http://172.20.20.20:3000/api/v1/users/list/:page/:limit"
        }
    }
}

)
.value('debug', true);
