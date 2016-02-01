var mod = angular.module("mod", ['ui.router', 'ui.materialize']);
mod.directive('csApp', function(){
    return {
        scope: {},
        restrict: 'E',
        templateUrl: './angular/cs-app.html'
    };
});

//cs: cicilio studio
//Creates the angular app element
var el = document.createElement('cs-app');
angular.bootstrap(el, [mod.name]);
$('.cs-app-class').append(el);