app.controller('HeaderController', function($scope, authService) {
    $scope.authService = authService;

    $scope.userData = {};

    function getCurrentUser() {
        if(authService.isLoggedIn) {
            authService.getMyData(
                function success(data) {
                    $scope.userData = data;
                    $scope.name = $scope.userData.name;
                    $scope.coverImage = "<img class='coverArea' ng-src='{{userData.coverImageData}}'>";
                },
                function error(err) {
                    notifyService.showError("Cannot load user ad", err);
                }
            )
        }
    }

    getCurrentUser();
});