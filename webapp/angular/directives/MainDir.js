/**
 * Created by Lance on 1/4/2016.
 */
mod.directive("csMain", function(){
    return {
        scope: {
        },
        restrict: 'E',
        link: function(scope){
            scope.breadcrumbs = [
                '<a href="#!" class="cs-breadcrumb cs-left-margin valign">First</a>',
                '<a href="#!" class="cs-breadcrumb valign">Second</a>',
                '<a href="#!" class="cs-breadcrumb valign">Third</a>'
            ];
            var menu = $('.cs-mobile-menu');
            menu.sideNav({
                menuWidth: 200,
                edge: 'right',
                closeOnClick: true
            });
        },
        templateUrl: './views/main.html'
    };
});