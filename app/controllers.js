//Controller
popol.controller('mainController', ['$scope','$location',function($scope,$location){
    $scope.goToList = function(){
        $location.path("/list");
    }
}]);

popol.controller('listController', ['$scope',function($scope){

}]);