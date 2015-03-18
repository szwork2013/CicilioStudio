/**
 * Created by Lance on 12/24/2014.
 */
var START_URL = "https://ciciliostudio.com";
var homeApp = angular.module('homeApp',['ngRoute']);

homeApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/', {
            templateUrl: 'templates/nav.html',
            //template: '<div> test </div>',
            controller: 'defaultCtrl'
        }).
        when('/Projects',{
            templateUrl: 'templates/test.html',
            controller: 'defaultCtrl'
        }).
        when('/Projects/Arduino',{
            templateUrl: 'templates/test.html',
            controller: 'defaultCtrl'
        }).
        otherwise({
            redirectTo: "/"
        });
}]);

homeApp.controller('defaultCtrl', function ($scope,$http,$sce) {
    $scope.message = "Display Please";

    /**
     * This takes an HTML file, grabs it from the server,
     * trusts it, returns the data in the file.
     * Use with ng-bind-html
     * @param filename - String - HTML filename to load
     */


    $scope.loadPage = function(filename) {
        var htmlDir = "pages/" + filename + ".html";
        console.log(htmlDir);
        $http.get(htmlDir).success(function (response) {
            return $sce.trustAsHtml(response);
        }).error(function (data) {
            console.log('Error');
            console.log(data);
        });
    };

});
homeApp.controller('navCtrl', function ($scope,$location){
   $scope.items = [
       {name: 'Projects', sources:['Arduino', 'Music', 'Trebuchet']},
       {name: 'Lesson Plans', sources: ['Google Applications', 'Computer Security']},
       {name: 'Bio', sources:[]}
   ];


    /**
     *
     * THIS IS COMMENTED OUT BECAUSE THE OVERLOADING HAD A PROBLEM WHERE
     * IT WAS ONLY CALLING THE function(name,source).
     *
     * @param name - The name of the item
     * @returns {string} - The href to go to

    $scope.testRoute = function(name){
        if (name != undefined){
            console.log("#/" + name.trim());
            return "#/" + name.trim();
        }else{
            console.log("Nothing");
            return '/';
        };
    };

    */

    /**
     *
     * @param name - The name of the item
     * @param source - One of the source items in the item
     * @returns {string} Return the href of the link
     */
    $scope.getHref = function(name,source) {
        var nameAns;
        if (name != undefined){
            nameAns = "#/" + name.replace(' ','');
        }else{
            console.log("Nothing");
            return '/';
        };
        if (source === undefined) {
            console.log(nameAns);
            return nameAns;
        } else {
            console.log(nameAns + '/' + source.toString().replace(' ',''));
            return nameAns + '/' + source.toString().replace(' ','');
        };
    };


});