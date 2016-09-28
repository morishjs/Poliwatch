//Route
popol.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'main_view/main_view.html',
            controller: 'mainController'
        })

        .when('/list',
            {
                templateUrl: 'list_view/list.html',
                controller: 'listController'
            }
        )

}]);