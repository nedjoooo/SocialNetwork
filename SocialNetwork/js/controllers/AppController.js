'use strict';

app.controller('AppController',
    function ($scope, $location, authService, postService, notifyService) {
        $scope.authService = authService;
    }
);