app.controller('LoginController',
    function($scope, $rootScope, $location, authService, notifyService) {
    $scope.login = function(userData) {
        authService.login(userData,
            function success() {
                notifyService.showInfo("Login successful");
                window.location.reload();
                $location.path("/user/user-home");
            },
            function error(err) {
                notifyService.showError("Login failed", err);
            }
        )

    }
});