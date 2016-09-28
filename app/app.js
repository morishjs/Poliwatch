'use strict';

// Declare app level module which depends on views, and components
var popol = angular.module('popol', [
  'ngRoute',
  'ngResource'
]);

//Route
popol.config(['$routeProvider', function($routeProvider) {

  $routeProvider
      .when('/',{
        templateUrl : 'main_view/main_view.html',
        controller : 'mainController'
      })

    .when('/list',
        {
        templateUrl : 'list_view/list.html',
        controller : 'listController'
    }
    )

}]);


//Controller
popol.controller('mainController', ['$scope','$location',function($scope,$location){
    $scope.goToList = function(){
        $location.path("/list");
    }
}]);

popol.controller('listController', ['$scope',function($scope){

}]);