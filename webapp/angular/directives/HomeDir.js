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

            //Star Generator -- NOT PREFERMENT - 14fps
            //let elm;
            //for (let x=0; x<10; x++){
            //    for (let y=0; y<10; y++){
            //        for (let z=0; z<10; z++) {
            //            elm = $('<a-star></a-star>');
            //            elm.attr('position', `${x*10} ${y*10} ${z*10}`);
            //            $('.cs-home').append(elm);
            //        }
            //    }
            //}

            // IDEA: On hover change cs-home background image

        },
        templateUrl: './views/home.html'
    };
}]);