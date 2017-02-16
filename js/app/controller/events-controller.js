(function() {
    var app = angular.module("nbrcjax");
    app.controller("eventsCalendarController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', 'config', '$sce', eventsCalendarController]);
    app.controller("eventsAnnouncementController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', eventsAnnouncementController]);
    
    function eventsCalendarController($scope, $http, $location, $window, $, $log, $controller, config, $sce) {
    	$controller('baseController', {$scope: $scope});
    	$scope.calUrl = $sce.trustAsResourceUrl(config.calendarService);
    }
    
    function eventsAnnouncementController($scope, $http, $location, $window, $, $log, $controller) {
    	$controller('baseController', {$scope: $scope});
    }
}());