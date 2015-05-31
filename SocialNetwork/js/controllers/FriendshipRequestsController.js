app.controller('FriendshipRequestsController', function($scope, authService, notifyService) {
    $scope.usersData = {};
    $scope.isFriendshipRequests = false;

    function getFriendshipRequestUsers() {
        authService.getFriendRequests(
            function success(data) {
                $scope.usersData = data;

                function isEmpty(obj) {
                    return Object.keys(obj).length === 0;
                }

                if(isEmpty($scope.usersData)) {
                    $scope.isFriendshipRequests = true;
                    var a=5;
                }
            },
            function error(err) {
                console.log(err);
            }
        )
    }

    getFriendshipRequestUsers();

    $scope.approveFriendRequest = function(requestId) {
        authService.approveFriendRequest(
            requestId,
            function success(info) {
                window.location.reload();
                notifyService.showInfo("Friendship request is already approved");
            }
        )
    };

    $scope.rejectFriendRequest = function(requestId) {
        authService.approveFriendRequest(
            requestId,
            function success(info) {
                window.location.reload();
                notifyService.showInfo("Friendship request is already approved");
            }
        )
    };
});