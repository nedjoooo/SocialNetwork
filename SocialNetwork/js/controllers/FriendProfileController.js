app.controller('FriendProfileController', function($scope, $routeParams, authService, postService) {
    $scope.friendPosts = {};
    $scope.userData = {};

    function getFriendPosts(friend) {
        postService.getFriendWall(
            friend,
            function success(data) {
                $scope.friendPosts = data;
            }
        )
    }

    function getUserData(user) {
        authService.getUserFullData(
            user,
            function success(data) {
                $scope.userData = data;
            }
        )
    }

    getFriendPosts($routeParams.username);
    getUserData($routeParams.username);

});