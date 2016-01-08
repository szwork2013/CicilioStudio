var mod = angular.module("mod", ['ui.router', 'ui.materialize']);
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
        .state('main.home', {
            url: "/",
            template: "<cs-home></cs-home>"
        })
        .state('main', {
            template : "<cs-main></cs-main>"
        })
        .state('main.projects', {
            url: "^/projects",
            template: "<cs-projects></cs-projects>"
        })
        .state('main.skills', {
            url: '^/skills',
            template: "<cs-skills data-skills='{{data.skills}}'></cs-skills>"
        });
    $urlRouterProvider.otherwise("/");
}]);