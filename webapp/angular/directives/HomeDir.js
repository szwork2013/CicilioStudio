/**
 * Created by Lance on 1/4/2016.
 */
mod.directive("csHome", ['$rootScope', ($rootScope) => {
    return {
        scope: {
        },
        restrict: 'E',
        link: function(scope, element){

            //Turns Aframe display on when at home and off when not
            let aframe = $('.a-canvas');
            $rootScope.$on('$stateChangeStart', (event, toState) => {
                (toState.name == 'main.home') ? aframe.show() : aframe.hide();
            });

            // IDEA: On hover change cs-home background image

        },
        templateUrl: './views/home.html'
    };
}]);