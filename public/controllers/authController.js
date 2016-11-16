var app = angular.module("MainApp");


var authController = app.controller("authController", ["$scope", "authService", "$location", function($scope, authService, $location) {
    $scope.user = {};
    $scope.loggedIn = false;
    $scope.logIn = function(user) {
        authService.logIn(user).then(function(responce) {
            console.log(responce)
            localStorage.setItem("token", responce.token);
            localStorage.setItem("user", JSON.stringify(responce.user));
            $scope.loggedIn = true;
            $scope.user = {};
        })
    }
     $scope.currentUser = JSON.parse(localStorage.getItem("user"));
    $scope.tokenChecker = function () {
        if ($scope.currentUser) {
            $scope.loggedIn = true;
        } else {
            $scope.loggedIn = false;
        }
    }();
    $scope.signUp = function(user) {
        authService.signUp(user).then(function(responce) {
            console.log(responce)
            $scope.user = {};
        })
    }
     $scope.logOut = function() {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        $scope.loggedIn = false;
    }
}])