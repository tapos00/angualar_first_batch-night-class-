angular.module("app", ["ngRoute", "courseInfo"]);
angular.module("courseInfo", [])
    .config(function (routeProvider) {
        routeProvider.when('/start', {
            templateUrl: 'partial/start.html'
        });
        routeProvider.when('/workout', {
            templateUrl: 'partial/workout.html',
            controller: 'workingCtrl'
        });
        routeProvider.otherwise({
            redirectTo: '/start'
        });
    });