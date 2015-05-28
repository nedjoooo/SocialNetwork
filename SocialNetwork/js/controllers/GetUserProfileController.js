app.controller('GetUserProfileController',
    function($scope, authService, notifyService) {
        $scope.getUserProfile = function() {
            authService.getUserProfile(
                function success(data) {
                    $scope.userData = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load user data", err);
                }
            );
        };

    $scope.getUserProfile();
    }
);