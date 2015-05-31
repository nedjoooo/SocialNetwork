app.controller('EditUserProfileController', function($scope, $location, authService, notifyService) {
    $scope.userData = {};
    $scope.name = '';

    function getCurrentUser() {
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

    getCurrentUser();

    $scope.fileSelected = function(fileInputField) {
        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function() {
                $scope.userData.profileImageData = reader.result;
                $(".image-box").html("<img class='image-box' src='" + reader.result + "'>");
            };
            reader.readAsDataURL(file);
        } else {
            $(".image-box").html("<p>File type not supported!</p>");
        }
    };

    $scope.coverFileSelected = function(fileInputField) {
        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function() {
                $scope.userData.coverImageData = reader.result;
                $(".image-profile-box").html("<img class='image-profile-box' src='" + reader.result + "'>");
            };
            reader.readAsDataURL(file);
        } else {
            $(".image-box").html("<p>File type not supported!</p>");
        }
    };

    $scope.updateProfile = function(userData) {
        userData.name = $scope.name;
        authService.editUser(userData,
            function success() {
                notifyService.showInfo("User edited successfully");
                $location.path("/user/user-home");
            },
            function error(err) {
                notifyService.showError("User edit failed", err);
            }
        );
    };
});