app.factory('postService', function($http, authService, baseServiceUrl) {
    return {
        getNewsFeeds: function(success, error) {
            var headers = authService.getAuthHeaders();
            var request = {
                method: 'GET',
                url: baseServiceUrl + 'me/feed?StartPostId=&PageSize=5',
                headers: headers
            };
            $http(request).success(success).error(error);
        },

        getFriendWall: function(user, success, error) {
            var headers = authService.getAuthHeaders();
            var request = {
                method: 'GET',
                url: baseServiceUrl + 'users/' + user + '/wall?StartPostId=&PageSize=5',
                headers: headers
            };
            $http(request).success(success).error(error);
        },

        createNewPost: function (postData, success, error) {
            var request = {
                method: 'POST',
                url: baseServiceUrl + '/posts',
                headers: authService.getAuthHeaders(),
                data: postData
            };
            $http(request).success(success).error(error);
        },

        getNewsWall: function (success, error) {
            var request = {
                method: 'GET',
                url: baseServiceUrl + 'me/feed?StartPostId=&PageSize=5',
                headers: authService.getAuthHeaders()
            };
            $http(request).success(success).error(error);
        }
    }
});