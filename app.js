/**
 * Created by Lance on 12/24/2014.
 */
var START_URL = "https://ciciliostudio.com";
var homeApp = angular.module('homeApp',['ngRoute']);

homeApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/', {
            templateUrl: 'templates/main.html',
            //template: '<div> test </div>',
            controller: 'defaultCtrl'
        }).
        when('/Projects',{
            templateUrl: 'templates/test.html',
            controller: 'defaultCtrl'
        }).
        when('/ProjectsArduino',{
            templateUrl: 'templates/test.html',
            controller: 'defaultCtrl'
        }).
        otherwise({
            redirectTo: "/"
        });
}]);

homeApp.controller('defaultCtrl', function ($scope, $location, $window, $routeParams) {
    $scope.message = "Display Please";

});
homeApp.controller('navCtrl', function ($scope,$location){
   $scope.items = [
       {name: 'Projects', sources:['Arduino', 'Music', 'Trebuchet']},
       {name: 'Lesson Plans', sources: ['Google Applications', 'Computer Security']},
       {name: 'Bio', sources:[]}
   ];

    $scope.go = function(item){
        var path = "#/" + item.toString().trim();
        console.log(path);
        $location.path(path);
    }
    $scope.go = function(item,source){
        var path = "#/" + item.toString().trim() + source.toString();
        console.log(path);
        $location.path(path);
    }


});