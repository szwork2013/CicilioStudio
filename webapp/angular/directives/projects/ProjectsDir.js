/**
 * Created by Lance on 1/7/2016.
 */
mod.directive("csProjects", ($templateCache) => {
    'ngInject'
    return {
        scope: {},
        restrict: 'E',
        controller: 'csProjectsCtrl',
        controllerAs: 'projectsC',
        link: function(scope){},
        template: $templateCache.get('./views/projects.html')
    };
});