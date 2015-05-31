app.controller('SearchController',
    function($scope, $routeParams, authService, notifyService) {
        $scope.searchingUsers = {};

        function searchUsers(string) {
            authService.searchUser(
                string,
                function success(data) {
                    $scope.searchingUsers = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load user", err);
                }
            );
        }

        searchUsers($routeParams.userQuery);
    }
);