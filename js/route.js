app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'views/home.html'
        })
        .when("/matches", {
            templateUrl: 'views/matchView.html',
            controller: 'matchView'
        })
        .when('/singlematch/:y/:x', {
            templateUrl: 'views/singleView.html',
            controller: 'singleViewController'
        })
        .when("/stats", {
            templateUrl: 'views/matchStatsView.html',
            controller: 'statsController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);