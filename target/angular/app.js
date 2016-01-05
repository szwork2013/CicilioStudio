var mod = angular.module("mod", ['ui.router']);
mod.directive('csApp', function(){
    return {
        scope: {},
        restrict: 'E',
        templateUrl: './angular/cs-app.html'
    };
});

//cs: cicilio studio
var el = document.createElement('cs-app');
angular.bootstrap(el, [mod.name]);
$('.cs-app-class').append(el);

//Routing

mod.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('home', {
           url: "/",
           templateUrl: "../views/home.html"
        })
        .state('main', {
            templateUrl : "../views/main.html"
        })
        .state('main.projects', {
            url: "^/projects",
            templateUrl: "../views/projects.html"
        });
    $urlRouterProvider.otherwise("/");
}]);