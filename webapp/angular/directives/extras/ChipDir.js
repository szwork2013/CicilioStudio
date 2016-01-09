/**
 * Created by Lance on 1/8/2016.
 */
mod.directive('csChip', function(){
    return {
        scope: {
            imageUrl: '&dataImageUrl',
            linkUrl: '&dataLinkUrl',
            name: '&dataName'
        },
        restrict: 'E',
        link: function(scope, elm, attrs){
            var imageUrl = attrs.imageUrl;
            var linkUrl = attrs.linkUrl;
            var name = attrs.name;
            scope.imageUrl = imageUrl;
            scope.linkUrl = linkUrl;
            scope.name = name;

            //Icon Tooltips
            $('.tooltipped').tooltip();
        },
        templateUrl: './views/chip.html'
    }
});