app.factory('authService', function($http, baseServiceUrl) {
    return {
        login: function(userData, success, error) {
            var request = {
                method: 'POST',
                url: baseServiceUrl + 'users/login',
                data: userData
            };
            $http(request).success(function(data) {
                sessionStorage['currentUser'] = JSON.stringify(data);
                success(data);
            }).error(error);
        },

        register: function(userData, success, error) {
            var request = {
                method: 'POST',
                url: baseServiceUrl + 'users/register',
                data: userData
            };
            $http(request).success(function(data) {
                sessionStorage['currentUser'] = JSON.stringify(data);
                success(data);
            }).error(error);
        },

        logout: function() {
            delete sessionStorage['currentUser'];
        },

        isLoggedIn : function() {
            return !!sessionStorage['currentUser'];
        },

        getCurrentUser : function() {
            var userObject = sessionStorage['currentUser'];
            if (userObject) {
                return JSON.parse(sessionStorage['currentUser']);
            }
        },

        getUserProfile: function(success, error) {
            var username = angular.fromJson(sessionStorage['currentUser']).userName;
            var headers = this.getAuthHeaders();
            var request = {
                method: 'GET',
                url: baseServiceUrl + 'users/' + username + '/preview',
                headers: headers
            };
            $http(request).success(success).error(error);
        },

        getAuthHeaders : function() {
            var headers = {};
            var currentUser = this.getCurrentUser();
            if (currentUser) {
                headers.Authorization = 'Bearer ' + currentUser.access_token;
            }
            return headers;
        }
    }
});