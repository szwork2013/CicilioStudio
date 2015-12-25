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

mod.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
           url: "/",
           templateUrl: "views/home.html"
        });
});