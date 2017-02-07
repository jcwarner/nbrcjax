(function() {
    var app = angular.module("nbrcjax");
    app.controller("contactController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', contactController]);
    
        
    function contactController($scope, $http, $location, $window, $, $log, $controller) {
    	$controller('baseController', {$scope: $scope});
    }   
  
}());