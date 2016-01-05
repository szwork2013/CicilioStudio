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