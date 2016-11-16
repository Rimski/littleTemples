var app = angular.module("MainApp");

app.controller("mainController", ["$scope", "templeService", function ($scope, templeService) {
    $scope.scroll = function () {
        window.scroll(0, 0);
    };
    $scope.loggedIn = false;
    $scope.gallery = [];
    $scope.currentUser = JSON.parse(localStorage.getItem("user"));
    $scope.tokenChecker = function () {
        if ($scope.currentUser) {
            $scope.loggedIn = true;
        } else {
            $scope.loggedIn = false;
        }
    }();
    $scope.getTemples = function () {
        templeService.getTemples().then(function (data) {
            $scope.gallery = data;
        })
    }();
    $scope.getEvents = function () {
        templeService.getEvents().then(function (data) {
            $scope.events = data;
        })
    }();

    $scope.temple = {
        title: "",
        mainImg: "",
        otherImgs: [],
    };
    $scope.event = {
        title: "",
        images: [],
        description: ""
    };
    $scope.addTemples = function (temple) {
        templeService.addTemples(temple).then(function (data) {
            $scope.temple = {
                title: "",
                mainImg: "",
                otherImgs: []
            };
            $scope.gallery.push(data.temple);
        })
    }
    $scope.addEvent = function (event) {
        templeService.addEvents(event).then(function (data) {
            $scope.event = {
                title: "",
                images: [],
                description: ""
            };
            $scope.events.push(data.event);
        })
    }
    $scope.addImg = function (image) {
        $scope.temple.otherImgs.push(image);
        $scope.image = "";
    }
    $scope.addEventImg = function (image) {
        $scope.event.images.push(image);
        $scope.eventImg = ""
    }
    $scope.deleteTemple = function (temple) {
        templeService.deletTemples(temple).then(function(data) {
            console.log(data)
        })
    }
    $scope.deleteEvent = function (event) {
        templeService.deleteEvents(event).then(function(data) {
            console.log(data)
        })
    }
    $scope.editEvent = function (item) {
        $scope.event = item;
        $scope.edit = true;
    }
    $scope.editTemple = function (item) {
        $scope.temple = item;
        $scope.edit = true
    }
    $scope.deleteTempleImg = function ($index) {
        $scope.temple.otherImgs.splice($index, 1);
    }
    $scope.deleteImg = function ($index) {
        $scope.event.images.splice($index, 1);
    }
    $scope.finalizeTemple = function(temple) {
        templeService.editTemple(temple).then(function (data) {
            $scope.edit = false;
            $scope.temple = {};
        })
    }
    $scope.finalizeEvent = function(event) {
        templeService.editEvent(event).then(function (data) {
            $scope.edit = false;
            $scope.event = {};
        })
    }
    
}])