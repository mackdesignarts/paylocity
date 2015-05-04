/*************************
Paylocity Code Challenge
app.js
==========================
Auth: TmAck.072 <tonymclaughlin72@gmail.com> 
Date: 5/3/15
*************************/

'use strict';


var app = angular.module('paylocity', ['ui.router', 'ui.bootstrap']);

app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$httpProvider', function ($urlRouterProvider, $stateProvider, $locationProvider, $httpProvider) {
            
    // Handle unmatched routes
    $urlRouterProvider
        .when('', '/')
        .when('index.html', '/');
                        
    // State config
    $stateProvider
                
        // Catalog
        .state('main', {
            url: "/",
            views: {
                content: {
                    templateUrl: 'Content/main/views/mainView.html',
                    controller: 'mainCtrl'
                }
            }
        })        
                                       
    $locationProvider.html5Mode(true);
    
}]).run(['$rootScope', '$http', '$state', '$location',
function ($rootScope, $http, $state, $location) { 

}]);


