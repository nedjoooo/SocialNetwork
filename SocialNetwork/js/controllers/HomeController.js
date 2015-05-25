app.controller('HomeController', ['$scope', 'authentication', function($scope, authentication) {
    $scope.isLoggedIn = authentication.isLoggedIn();
}]);