/**
 * Created by Lance on 1/8/2016.
 */
mod.directive('csChip', function(){
    return {
        scope: {
            url: '&dataUrl',
            name: '&dataName'
        },
        restrict: 'E',
        link: function(scope, elm, attrs){
            var url = attrs.url;
            var name = attrs.name;
            scope.url = url;
            scope.name = name;
        },
        templateUrl: './views/chip.html'
    }
});