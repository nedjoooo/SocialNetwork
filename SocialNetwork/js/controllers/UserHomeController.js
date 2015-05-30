'use strict';

app.controller('UserHomeController',
    function($scope, authService, postService, notifyService) {
        $scope.posts = {};
        $scope.getUserPreviewData = function() {
            authService.getUserPreviewData(
                function success(data) {
                    $scope.userData = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load user data", err);
                }
            );
        };

        $scope.getUserPreviewData();

        $scope.getFriendPosts = function() {
            postService.getNewsFeeds(
                function success(data) {
                    $scope.posts = data;
                },
                function(err) {
                    console.log(err);
                }
            )
        }

        $scope.getFriendPosts();
});