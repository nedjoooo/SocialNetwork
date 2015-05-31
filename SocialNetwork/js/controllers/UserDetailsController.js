app.controller('UserDetailsController', function($scope, $location, $routeParams, authService, notifyService) {
    $scope.userData = {};


    function getUser(username) {
        authService.getUserFullData(
            username,
            function success(data) {
                $scope.userData = data;
                switch (data.gender) {
                    case 1: $scope.userData.gender = 'Male'; break;
                    case 2: $scope.userData.gender = 'Female'; break;
                    case 3: $scope.userData.gender = 'Other'; break;
                }
            },
            function error(err) {
                notifyService.showError("Cannot load user", err);
            }
        );
    }

    getUser($routeParams.username);

    $scope.sendFriendship = function(username) {
        authService.sendFriendRequest(
            username,
            function success(success) {
                notifyService.showInfo("Friendship has been sent successfully", success);
            },
            function error(err) {
                notifyService.showError("Friendship could not be sent", err);
            }
        )
    }
});