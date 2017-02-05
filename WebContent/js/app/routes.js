(function() {
    var app = angular.module("nbrcjax");
    app.config(['$routeProvider', '$stateProvider', '$urlRouterProvider', function ($routeProvider, $stateProvider, $urlRouterProvider) {
    	$urlRouterProvider.otherwise('/');
    		
        $stateProvider
            .state('app', {
                abstract: true,
                sticky: true,
                views: {
                    'mainContent': {
                        template: '<ui-view />'
                    }
                }
            })
            .state('app.home',
            {
                 url: '/',
                 templateUrl: '/js/app/templates/home.html',
                 controller: 'homeController',
                 pageTitle: "New Berlin Road Church | Home"
             })
             .state('app.about',
            {
                 url: '/about',
                 templateUrl: '/js/app/templates/about.html',
                 controller: 'aboutController',
                 pageTitle: "New Berlin Road Church | About"
             })
             .state('app.find',
            {
                 url: '/about/find',
                 templateUrl: '/js/app/templates/about-find.html',
                 controller: 'aboutFindController',
                 pageTitle: "New Berlin Road Church | How to Find Us"
             })
             .state('app.believe',
            {
                 url: '/about/believe',
                 templateUrl: '/js/app/templates/about-believe.html',
                 controller: 'aboutBelieveController',
                 pageTitle: "New Berlin Road Church | What We Believe"
             })
             .state('app.staff',
            {
                 url: '/about/staff',
                 templateUrl: '/js/app/templates/about-staff.html',
                 controller: 'aboutStaffController',
                 pageTitle: "New Berlin Road Church | Meet Our Staff"
             })
             .state('app.seniorpastor',
            {
                 url: '/about/seniorpastor',
                 templateUrl: '/js/app/templates/matthewmeadows.html',
                 controller: 'aboutStaffSPController',
                 pageTitle: "New Berlin Road Church | Matthew Meadows, Senior Pastor"
             })
             .state('app.worshipleader',
            {
                 url: '/about/worshipleader',
                 templateUrl: '/js/app/templates/karendavis.html',
                 controller: 'aboutStaffWLController',
                 pageTitle: "New Berlin Road Church | Karen Davis, Worship Leader"
             })
             .state('app.visionteam',
            {
                 url: '/about/visionteam',
                 templateUrl: '/js/app/templates/visionteam.html',
                 controller: 'aboutStaffVTController',
                 pageTitle: "New Berlin Road Church | Vision Team"
             })
             .state('app.ministries',
            {
                 url: '/about/ministries',
                 templateUrl: '/js/app/templates/ministries.html',
                 controller: 'ministriesController',
                 pageTitle: "New Berlin Road Church | Our Ministries"
             });
    }]);

}());