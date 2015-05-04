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



/*************************
Main controller
==========================
Auth: TmAck.072 <tonymclaughlin72@gmail.com> 
Date: 5/3/15
*************************/

'use strict';

app.controller('mainCtrl', function($scope, $rootScope, httpFactory) {
    
    // employee & dependents containers
    $scope.employee = {};
    $scope.dependents = [];
    $scope.compensation = {};
    $scope.benefits = [];
    $scope.isSetResult = true;
    $scope.hideDependents = true;

    // total number of dependents
    $scope.isActive = function(route) {
        return route === $location.path();
    }

    $scope.result = function(isSetResult){
        return isSetResult || true;
    }

    // watch changes in dependent number input
    $scope.$watch('TotalDependents', function(){
        var deps = $scope.TotalDependents;
        var depArray = [];

        for(var i=0; i<deps; i++){
            depArray.push({
                id: i + 1   
            });    
        }        
        $scope.dependents = depArray;
        $scope.hideDependents = false;
    }, true);
    
    // process single employee entry form
    $scope.submit = function(){
        var totalChecks = 26;
        var paycheck = 2000;
        var discount = .90;
        var employeeCost = $scope.EmployeeCost;
        var dependentCost = $scope.DependentCost;
        var totalBenefitsCost = 0;
        var totalPay = paycheck*totalChecks;
        var totalAnnualCost = 0;

        // employee costs and filter
        if($scope.FirstName.charAt(0) === "A" || $scope.FirstName.charAt(0) === "a"){
            totalBenefitsCost += parseInt(employeeCost*discount);
        } else {
             totalBenefitsCost += parseInt(employeeCost);
        }

        // dependents costs and filter
        if($scope.dependents.length > 0){
            var numDependents = $scope.dependents.length;            
            // check dependents first name for letter A
            for(var i = 0; i < numDependents; i++){
                if($scope.dependents[i].FirstName.charAt(0) === "A" || $scope.dependents[i].FirstName.charAt(0) === "a"){
                    totalBenefitsCost += parseInt(dependentCost*discount);
                } else {
                    totalBenefitsCost += parseInt(dependentCost);
                }
            }
        }

        $scope.isSetResult = false;
        $scope.TotalDeductions = totalBenefitsCost;
        $scope.employee = {
            FirstName: $scope.FirstName,
            LastName: $scope.LastName
        };                
    }

    // save employee record
    $scope.save = function(){
        var depCount = $scope.dependents.length > 0 ? $scope.dependents.length : 0;
        console.log(depCount);
        var userAccount = {
            FirstName: $scope.FirstName,
            LastName: $scope.LastName,
            DependentCount: depCount,
            BenefitTotalCost: $scope.TotalDeductions
        }

        var dependents = {
            
        }

        httpFactory.post("UserAccount", userAccount).success(function (res) {
            console.log(res);
            var id = res.Id;
            for(var i=0; i < depCount; i++){
                dependents = {
                    UserAccountId: id,
                    FirstName: $scope.dependents[i].FirstName,
                    LastName: $scope.dependents[i].LastName
                }
                httpFactory.post("Dependents", dependents).success(function (res) {
                    console.log(res);                
                });
            }
        });              
    }

    function init() {
        // get costs for employee and dependents
        httpFactory.get("BenefitsCost").success(function (data) {
            $scope.EmployeeCost = data[0].EmployeeBenefit;
            $scope.DependentCost = data[0].DependentBenefit;
        });        
    }

    init();
    
});
/*************************
HTTP factory
==========================
Auth: TmAck.072 <tonymclaughlin72@gmail.com> 
Date: 5/3/15
*************************/

'use strict';

// Simple XHR wrapper
app.factory('httpFactory', function($http){
    var obj = {};
    obj.get = function(service){        
        return $http.get('/api/' + service);
    } 
    obj.post = function(service, body){
        return $http.post('/api/' + service, body);
    }
    return obj;
});