'use strict';

app.controller('AppController',
    function ($scope, $location, authService, postService, notifyService) {
        $scope.authService = authService;


        $scope.logout = function() {
            authService.logout();
            notifyService.showInfo("Logout successful");
            $location.path('/');
        };
    }
);