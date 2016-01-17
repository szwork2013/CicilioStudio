/**
 * Created by Lance on 1/8/2016.
 */
mod.directive('csChip', function(){

    var chipCtrl = ['$state', function($state){
        //Allows Clicks on Chips
        $('.cs-chip').click(function(event){
            var ref = $(this).attr('ui-serf'); //ui-serf reference
            $state.go(ref); //Dynamically goes to different state

            //Need to clear backdrops and siblings, otherwise they say on the screen
            $('.backdrop').siblings('span').css('display', 'none');
            $('.backdrop').css('display', 'none');
        });
    }];

    return {
        scope: {
            imageUrl: '&dataImageUrl',
            linkUrl: '&dataLinkUrl',
            name: '&dataName'
        },
        restrict: 'E',
        controller: chipCtrl,
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