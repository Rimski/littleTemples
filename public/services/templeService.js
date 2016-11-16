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
    this.deletTemples = function (temple) {
        return $http.delete("/api/gallery/" + temple._id).then(function (responce) {
            return responce.data;
        })
    }
    this.editTemple = function (temple) {
        return $http.put("/api/gallery/" + temple._id, temple).then(function (responce) {
            return responce.data;
        })
    }
    this.getEvents = function () {
        return $http.get(baseUrl + "events").then(function (responce) {
            return responce.data;
        })
    }
    this.addEvents = function (event) {
        return $http.post("/api/events", event).then(function (responce) {
            return responce.data;
        })
    }
    this.deleteEvents = function (event) {
        return $http.delete("/api/events/" + event._id).then(function (responce) {
            return responce.data;
        })
    }
    this.editEvent = function (event) {
        return $http.put("/api/events/" + event._id, event).then(function (responce) {
            return responce.data
        })
    }
}])