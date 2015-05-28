app.controller('EditUserProfileContainer', function($scope, authService) {
    $scope.fileSelected = function(fileInputField) {
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

        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function() {
                $scope.userData['profileImageData'] = reader.result;
                $(".image-box").html("<img src='" + reader.result + "'>");
            };
            reader.readAsDataURL(file);
        } else {
            $(".image-box").html("<p>File type not supported!</p>");
        }

        $scope.updateProfile = function(userData) {
            authService.editUser(userData,
                function success() {
                    notifyService.showInfo("User edited successfully");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("User edit failed", err);
                }
            );
        };
    };
})