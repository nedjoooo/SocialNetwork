'use strict';

var app = angular.module('socialNetworkApp', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api/');

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/public/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/public/login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/public/register.html',
        controller: 'RegisterController'
    });

    $routeProvider.when('/user-home', {
        templateUrl: 'templates/users/user-home.html',
        controller: 'UserHomeController'
    });

    $routeProvider.when('/edit-profile', {
        templateUrl: 'templates/users/edit-profile.html',
        controller: 'EditUserProfileController'
    });

    $routeProvider.when('/change-password', {
        templateUrl: 'templates/users/change-password.html',
        controller: 'ChangePasswordController'
    });

    $routeProvider.otherwise(
        { redirectTo: '/' }
    );

});