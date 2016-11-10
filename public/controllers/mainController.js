var app = angular.module("MainApp");

app.controller("mainController", ["$scope", "templeService", function($scope, templeService) {
    $scope.temples = [];
    templeService.getTemples().then(function(data) {
        $scope.temples = data;
    })
    $scope.temple = {
        title: "",
        mainImg: "",
        otherImgs: []
    };
    $scope.addTemples = function(temple) {
        templeService.addTemples(temple).then(function(data) {
            $scope.temple = {
        title: "",
        mainImg: "",
        otherImgs: []
    };
            $scope.temples.push(data.temple);
        })
    }
    $scope.addImg = function(image) {
        $scope.temple.otherImgs.push(image);
        $scope.image = "";
    }
}])