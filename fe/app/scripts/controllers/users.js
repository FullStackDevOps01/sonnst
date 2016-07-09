'use strict';
angular.module('feApp')
.controller('ListUserCtrl', function($scope, $stateParams, Users) {
    var page = $stateParams.page ? parseInt($stateParams.page) : 1,
        limit = $stateParams.limit ? parseInt($stateParams.limit) : 10;

    $scope.limit = limit;
    Users.list(page, limit).then(function(data){
        $scope.users = data;
    });
});
