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
            template : "<cs-main></cs-main>"
        })
        .state('main.projects', {
            url: "^/projects",
            templateUrl: "../views/projects.html"
        });
    $urlRouterProvider.otherwise("/");
}]);
/**
 * Created by Lance on 1/4/2016.
 */
mod.directive("csMain", function(){
    return {
        scope: {},
        restrict: 'E',
        link: function(){
            var menu = $('.button-collapse');
            menu.sideNav({
                menuWidth: 200,
                edge: 'right',
                closeOnClick: true
            });
        },
        templateUrl: './views/main.html'
    };
});
/**
 * Created by Lance on 1/4/2016.
 */
mod.directive("csProjectsCards", function(){
    return {
        scope: {},
        restrict: 'A',
        link: function($http, scope){
            scope.projects = {
                projects : {
                    title: "nothing"
                }
            };
            //$http.get('/webapp/data/projects.json').success(function(data){
            //    scope.projects = data.projects;
            //});
        },
        templateUrl: './views/projects_cards.html'
    };
});