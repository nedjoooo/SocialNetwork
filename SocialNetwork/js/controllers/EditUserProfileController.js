app.controller('EditUserProfileController', function($scope, authService, notifyService) {
    $scope.userData = {};

    function getCurrentUser() {
        authService.getUserFullData(
            function success(data) {
                $scope.userData = data;
            },
            function error(err) {
                notifyService.showError("Cannot load user ad", err);
            }
        )
    }

    getCurrentUser();

    $scope.deleteImage = function() {
        $scope.userData.profileImageData = null;
    };

    $scope.fileSelected = function(fileInputField) {
        $scope.deleteImage();
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
        $scope.deleteImage();
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
        authService.editUser(userData,
            function success() {
                notifyService.showInfo("User edited successfully");
                $location.path("/user-home");
            },
            function error(err) {
                notifyService.showError("User edit failed", err);
            }
        );
    };
});