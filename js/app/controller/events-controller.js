(function() {
    var app = angular.module("nbrcjax");
    app.controller("eventsCalendarController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', eventsCalendarController]);
    app.controller("eventsAnnouncementController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', eventsAnnouncementController]);
//    app.controller("ministriesWorshipController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', ministriesWorshipController]);
//    app.controller("ministriesYouthController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', ministriesYouthController]);
//    app.controller("ministriesChildrenController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', ministriesChildrenController]);
    
    function eventsCalendarController($scope, $http, $location, $window, $, $log, $controller) {
    	$controller('baseController', {$scope: $scope});
    }
    
    function eventsAnnouncementController($scope, $http, $location, $window, $, $log, $controller) {
    	$controller('baseController', {$scope: $scope});
    }
//    
//    function ministriesWorshipController($scope, $http, $location, $window, $, $log, $controller) {
//    	$controller('baseController', {$scope: $scope});
//    }
//    
//    function ministriesYouthController($scope, $http, $location, $window, $, $log, $controller) {
//    	$controller('baseController', {$scope: $scope});
//    }
//    
//    function ministriesYouthController($scope, $http, $location, $window, $, $log, $controller) {
//    	$controller('baseController', {$scope: $scope});
//	}
//    
//    function ministriesChildrenController($scope, $http, $location, $window, $, $log, $controller) {
//    	$controller('baseController', {$scope: $scope});
//	}
}());