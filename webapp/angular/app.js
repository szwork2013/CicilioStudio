var mod = angular.module("mod", ['ui.router', 'ui.materialize', 'csTemplates']);

mod.directive('csApp', function($templateCache){
	'ngInject'

    return {
        scope: {},
        restrict: 'E',
        template: $templateCache.get('cs-app.html')
    };
});

//cs: cicilio studio
//Creates the angular app element
var el = document.createElement('cs-app');
angular.bootstrap(el, [mod.name]);
$('.cs-app-class').append(el);