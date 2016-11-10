var app = angular.module("MainApp");

app.service("templeService", ["$http", function ($http) {
    var baseUrl = "/public/"
    this.getTemples = function () {
        return $http.get(baseUrl + "temples").then(function (responce) {
                return responce.data;
            }
        )}
    this.addTemples = function (temple) {
        return $http.post("/api/gallery", temple).then(function (responce) {
            return responce.data;
        })
    }
    this.getEvents = function () {
        return $http.get(baseUrl + "events").then(function (responce) {
            return responce.data;
        })
    }
}])