app.directive('homeMenu', function() {
    return {
        controller: 'HomeController',
        restrict: 'E',
        templateUrl: 'templates/home.html',
        replace: true
    }
});