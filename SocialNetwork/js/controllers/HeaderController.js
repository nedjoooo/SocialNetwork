app.controller('HeaderController', function($scope, $location, authService, notifyService) {
    $scope.authService = authService;
    $scope.userData = {};
    $scope.userQuery = '';

    function getCurrentUser() {
        if(authService.isLoggedIn()) {
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

    $scope.searchUser = function(user) {
        $location.path('/search-result');
    }
});