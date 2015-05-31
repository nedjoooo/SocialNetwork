'use strict';

app.controller('ChangePasswordController',
    function($scope, $location, authService, notifyService) {
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

        $scope.changePassword = function(passData) {
            authService.changePass(passData,
                function success() {
                    notifyService.showInfo("Password changed successfully");
                    $location.path("/user/user-home");
                },
                function error(err) {
                    notifyService.showError("Password change failed", err);
                }
            );
        };
    }
);