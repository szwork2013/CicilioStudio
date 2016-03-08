/**
 * Created by Lance on 1/4/2016.
 */
mod.directive("csMain", () => {


    return {
        scope: {},
        restrict: 'E',
        link: function(scope, a, b, $controller){
            let data = {};
            if (scope.$parent.mainC.data){
                data = scope.$parent.mainC.data;
            }


            //Sets up mobile side nav
            let menu = $('.cs-mobile-menu');
            menu.sideNav({
                menuWidth: 200,
                edge: 'right',
                closeOnClick: true
            });

            //Sets up projects dropdown button
            let dropdownProject = $('.dropdown-button');
            dropdownProject.dropdown({
                    inDuration: 300,
                    outDuration: 225,
                    constrain_width: false, // Does not change width of dropdown to that of the activator
                    hover: true, // Activate on hover
                    gutter: 0, // Spacing from edge
                    belowOrigin: true, // Displays dropdown below the button
                    alignment: 'left' // Displays dropdown with edge aligned to the left of button
                }
            );

            //Icon Tooltips
            $('.tooltipped').tooltip();

            //Link Mobile Nav Back Button to Browser Back Button
            $('.cs-mobile-back').click(function(event){
                window.history.back();
            });
        },
        templateUrl: './views/main.html'
    };
});