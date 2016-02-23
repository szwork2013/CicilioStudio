/**
 * Created by Lance on 1/7/2016.
 */
mod.directive("csProjects", () => {
    return {
        scope: {},
        restrict: 'E',
        controller: 'csProjectsCtrl',
        controllerAs: 'projectsC',
        link: function(scope){},
        templateUrl: './views/projects.html'
    };
});