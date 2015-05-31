app.controller('FriendProfileController', function($scope, $location, $routeParams, authService, postService, notifyService) {
    $scope.friendPosts = {};
    $scope.userData = {};
    $scope.postData = {postContent: null, username: null};

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
                $scope.postData.username = data.username;
            }
        )
    }

    getFriendPosts($routeParams.username);
    getUserData($routeParams.username);

    $scope.sendMessage = function(postData) {
        postService.createNewPost(
            postData,
            function success() {
                notifyService.showInfo("Succesfully created post!");
                $location.path("/user-home");
            }
        )
    }

});