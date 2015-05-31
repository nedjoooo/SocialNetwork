'use strict';

app.controller('UserHomeController',
    function($scope, $location, authService, postService, notifyService) {
        $scope.newsPosts = {};
        $scope.commentData = {commentContent: null};
        $scope.isShowCommentArea = [];

        function getNewsPosts() {
            postService.getNewsWall(
                function success(data) {
                    $scope.newsPosts = data;
                    for(var i = 0; i < data.length; i++) {
                        $scope.isShowCommentArea[data[i].id] = false;
                    }
                }
            )
        }

        getNewsPosts();

        $scope.createNewComment = function(commentId, commentData) {
            postService.createNewComment(
                commentId,
                commentData,
                function success() {
                    notifyService.showInfo("Your comment added successfully");
                    $location.path("/user/user-home");
                }
            )
        };

        $scope.showCommentArea = function(postId) {
            $scope.isShowCommentArea[postId] = true;
        }
});