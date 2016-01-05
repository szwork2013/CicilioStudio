/**
 * Created by Lance on 1/4/2016.
 */
mod.directive("csMain", function(){
    return {
        scope: {},
        restrict: 'E',
        link: function(){
            var menu = $('.button-collapse');
            menu.sideNav({
                menuWidth: 200,
                edge: 'right',
                closeOnClick: true
            });
        },
        templateUrl: './views/main.html'
    };
});