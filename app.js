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
            controller: 'homeCtrl'
        }).
        otherwise({
            redirectTo: "/"
        });
}]);

homeApp.controller('homeCtrl', function ($scope, $location, $window, $routeParams) {
    $scope.message = "Display Please";
    //$scope.params = $routeParams.params;
    //$window.location.assign('main.html');
    //Script from Andrej on http://stackoverflow.com/questions/22689543 Helped a lot
    /*
     if ($location != undefined){
     console.log("Here");
     console.log("Pre: "+$location.protocol);
     if ($location.protocol() != "https" && $location.$$host != "localhost") {
     $window.location.protocol = "https";
     };
     };
     */
});