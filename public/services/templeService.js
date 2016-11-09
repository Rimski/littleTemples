var app = angular.module("MainApp");

app.service("templeService", ["$http", function ($http) {

    this.getTemples = function () {
        return $http.get("baseUrl").then(function (responce) {
                return responce.data;
            }
        )}
}])