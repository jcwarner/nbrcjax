(function() {
    var app = angular.module("nbrcjax");
    app.controller("contactController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', contactController]);
    
        
    function contactController($scope, $http, $location, $window, $, $log, $controller) {
    	$controller('baseController', {$scope: $scope});
    	$scope.contactSubmit = contactSubmit;
    	$scope.contact = {};
    	$scope.alertClass = "hidden";
    	
    	function contactSubmit(){
    		open('POST', 'https://script.google.com/macros/s/AKfycbwTA5fsM8Yfx9fZTTe8OQZeW1fA68QUwnbdkhA8bxNMAIua7Bs/exec', $scope.contact, '_blank');
    		$scope.contact = {};
    	}
    	
    	function onSubmitContactSuccess(){
    		$scope.contact = {};
    		$scope.alertClass = "success";
    		$scope.alertMessage = "Thank you for your inquiry. We will get back to you soon.";
    	}
    	
    	function onSubmitContactError() {
    		$scope.alertClass = "error";
    		$scope.alertMessage = "There was an error sending your contact request. Please try again later or call the church office.";
    	}
    	
    	function open(verb, url, data, target) {
    		  var form = document.createElement("form");
    		  form.action = url;
    		  form.method = verb;
    		  form.target = target || "_self";
    		  if (data) {
    		    for (var key in data) {
    		      var input = document.createElement("textarea");
    		      input.name = key;
    		      input.value = typeof data[key] === "object" ? JSON.stringify(data[key]) : data[key];
    		      form.appendChild(input);
    		    }
    		  }
    		  form.style.display = 'none';
    		  document.body.appendChild(form);
    		  form.submit();
    	};
    }   
    
}());