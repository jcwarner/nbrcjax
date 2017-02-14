(function() {
    var app = angular.module("nbrcjax");
    app.controller("eventsCalendarController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', eventsCalendarController]);
    app.controller("eventsAnnouncementController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', eventsAnnouncementController]);
    
    function eventsCalendarController($scope, $http, $location, $window, $, $log, $controller) {
    	$controller('baseController', {$scope: $scope});
    }
    
    function eventsAnnouncementController($scope, $http, $location, $window, $, $log, $controller) {
    	$controller('baseController', {$scope: $scope});
    }
}());