var app = angular.module("MainApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/login", {
        templateUrl: "./veiws/signin.html",
        controller: "authController"
    })
        .when("/gallery", {
        templateUrl: "./veiws/gallery.html",
        controller: "mainController"
    })
        .when("/aboutus", {
        templateUrl: "./veiws/about.html",
        controller: "mainController"
    })
        .when("/contact", {
        templateUrl: "./veiws/contact.html",
        controller: "mainController"
    })
        .when("/signup", {
        templateUrl: "./veiws/signUp.html",
        controller: "authController"
    })
        .when("/login", {
        templateUrl: "./veiws/logIn.html",
        controller: "authController"
    })
        .otherwise({
        templateUrl: "./veiws/home.html",
        controller: "mainController"
    })
        
})