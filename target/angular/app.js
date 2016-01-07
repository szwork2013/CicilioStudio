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
        scope: {
        },
        restrict: 'E',
        link: function(scope){
            scope.breadcrumbs = [
                '<a href="#!" class="cs-breadcrumb cs-left-margin valign">First</a>',
                '<a href="#!" class="cs-breadcrumb valign">Second</a>',
                '<a href="#!" class="cs-breadcrumb valign">Third</a>'
            ];

            //Sets up mobile side nav
            var menu = $('.cs-mobile-menu');
            menu.sideNav({
                menuWidth: 200,
                edge: 'right',
                closeOnClick: true
            });

            //Sets up projects dropdown button
            var dropdownProject = $('.dropdown-button');
            dropdownProject.dropdown({
                    inDuration: 300,
                    outDuration: 225,
                    constrain_width: false, // Does not change width of dropdown to that of the activator
                    hover: true, // Activate on hover
                    gutter: 0, // Spacing from edge
                    belowOrigin: true, // Displays dropdown below the button
                    alignment: 'left' // Displays dropdown with edge aligned to the left of button
                }
            );
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
/**
 * Created by Lance on 1/5/2016.
 */
