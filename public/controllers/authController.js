var app = angular.module("MainApp");


var authController = app.controller("authController", ["$scope", "authService", "$location", function($scope, authService, $location) {
    $scope.user = {};
    $scope.logIn = function(user) {
        authService.logIn(user).then(function(responce) {
            console.log(responce)
            localStorage.setItem("token", responce.token);
            localStorage.setItem("user", responce.user);
//            $scope.user = {};
        })
    }
    $scope.signUp = function(user) {
        authService.signUp(user).then(function(responce) {
            console.log(responce)
//            $scope.user = {};
        })
    }
    
}])