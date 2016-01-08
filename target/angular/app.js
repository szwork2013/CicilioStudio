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
/**
 * Created by Lance on 1/5/2016.
 */

/**
 * Created by Lance on 1/8/2016.
 */
mod.factory('csData', function($http) {
    var promise = null;

    return function() {
        if (promise) {
            // If we've already asked for this data once,
            // return the promise that already exists.
            return promise;
        } else {
            promise = $http.get('/assets/data/data.json');
            return promise;
        }
    };
});
/**
 * Created by Lance on 1/4/2016.
 */
mod.directive("csHome", function(){
    return {
        scope: {
        },
        restrict: 'E',
        link: function(scope){

            //On hover change cs-home background image

        },
        templateUrl: './views/home.html'
    };
});
/**
 * Created by Lance on 1/4/2016.
 */
mod.directive("csMain", function(){

    var csMainCtrl = ['$scope', 'csData', function($scope, csData){
        //Saves Data to $Scope
        csData().success(function(data) {
            if (data){
                $scope.data = data;
            }else{
                console.log('No Data');
            }
        });
    }];

    return {
        scope: {},
        restrict: 'E',
        controller: csMainCtrl,
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

            //Icon Tooltips
            $('.tooltipped').tooltip();
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
            //$http.get('/webapp/data/data.json').success(function(data){
            //    scope.projects = data.projects;
            //});
        },
        templateUrl: './views/projects_cards.html'
    };
});
/**
 * Created by Lance on 1/7/2016.
 */
mod.directive("csProjects", function(){
    return {
        scope: {
        },
        restrict: 'E',
        link: function(scope){},
        templateUrl: './views/projects.html'
    };
});
/**
 * Created by Lance on 1/7/2016.
 */
mod.directive('csSkillsCard', function(){
    return {
        scope: {
            skill: '&dataSkill'
        },
        restrict: 'E',
        link: function(scope, elm, attrs){

            // To Read Skills From Attribute
            console.log('yo');
            var skill = JSON.parse(attrs.skill);
            console.log(skill);
        },
        templateUrl: './views/skills_card.html'
    }
});
/**
 * Created by Lance on 1/7/2016.
 */
mod.directive('csSkills', function(){

    return {
        scope: {
            skills: '&dataSkills'
        },
        restrict: 'E',
        link: function(scope, elm, attrs){

            //Sets up projects dropdown button
            var dropdownProject = $('.dropdown-button');
            dropdownProject.dropdown({
                    inDuration: 300,
                    outDuration: 225,
                    constrain_width: true, // Does not change width of dropdown to that of the activator
                    hover: false, // Activate on hover
                    gutter: 0, // Spacing from edge
                    belowOrigin: true, // Displays dropdown below the button
                    alignment: 'right' // Displays dropdown with edge aligned to the left of button
                }
            );

            // To Read Skills From Attribute
            var skills = JSON.parse(attrs.skills);

            var skill = {name: "test"};

            //Generate and append New Card
            var card = $("<cs-skills-card></cs-skills-card>");
            card.attr({'data-skill' : JSON.stringify(skill)});
            angular.bootstrap(card, [mod.name]);
            $('.cs-skills-card-wrapper').append(card);

        },
        templateUrl: './views/skills.html'
    }
});