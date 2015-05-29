'use strict';

app.controller('UserHomeController',
    function($scope, authService, notifyService) {
        $scope.getUserPreviewData = function() {
            authService.getUserPreviewData(
                function success(data) {
                    $scope.userData = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load user data", err);
                }
            );
        };

        $scope.getUserPreviewData();
})