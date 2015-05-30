app.controller('FriendsSideBarController', function($scope, authService, notifyService) {
    $scope.authService = authService;

    $scope.friendsData = {};

    function getFriends() {
        if(authService.isLoggedIn()) {
            authService.getMyFriends(
                function success(data) {
                    $scope.friendsData = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load friends", err);
                }
            )
        }
    }

    getFriends();
});