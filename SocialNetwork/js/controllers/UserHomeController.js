'use strict';

app.controller('UserHomeController',
    function($scope, authService, postService, notifyService) {
        $scope.newsPosts = {};

        function getNewsPosts() {
            postService.getNewsWall(
                function success(data) {
                    $scope.newsPosts = data;
                }
            )
        }

        getNewsPosts();
});