var app = angular.module("MainApp");

var service = app.service("authService", ["$http", function($http) {
    var baseUrl = "/auth/";
    // baleted
    this.signUp = function(user) {
        return $http.post(baseUrl + "signup", user).then(function (responce) {
            return responce.data;
        })
    }
    // baleted
    this.logIn = function(user) {
        return $http.post(baseUrl + "login" , user).then(function (responce) {
            return responce.data;
        })
    }
}])