(function() {
    var app = angular.module("nbrcjax");
    app.controller("ministriesController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', ministriesController]);
//    app.controller("aboutFindController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', aboutFindController]);
//    app.controller("aboutBelieveController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', aboutBelieveController]);
//    app.controller("aboutStaffController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', aboutStaffController]);
    
    function ministriesController($scope, $http, $location, $window, $, $log, $controller) {
    	$controller('baseController', {$scope: $scope});
//    	$scope.nav.about();
    }
    
//    function aboutFindController($scope, $http, $location, $window, $, $log, $controller) {
//    	$controller('baseController', {$scope: $scope});
////    	$scope.nav.about();
//    }
//    
//    function aboutBelieveController($scope, $http, $location, $window, $, $log, $controller) {
//    	$controller('baseController', {$scope: $scope});
////    	$scope.nav.about();
//    }
//    
//    function aboutStaffController($scope, $http, $location, $window, $, $log, $controller) {
//    	$controller('baseController', {$scope: $scope});
////    	$scope.nav.about();
//    }
}());