/**
 * Created by Lance on 1/4/2016.
 */
mod.directive("csMain", function(){

    var csMainCtrl = ['$scope', 'csData', function($scope, csData){
        //Saves Data to $Scope
        csData().success(function(data) {
            if (data){
                $scope.data = data;
            }else{
                console.log('No Data');
            }
        });
    }];

    return {
        scope: {},
        restrict: 'E',
        controller: csMainCtrl,
        link: function(scope){
            scope.breadcrumbs = [
                '<a href="#!" class="cs-breadcrumb cs-left-margin valign">First</a>',
                '<a href="#!" class="cs-breadcrumb valign">Second</a>',
                '<a href="#!" class="cs-breadcrumb valign">Third</a>'
            ];

            //Sets up mobile side nav
            var menu = $('.cs-mobile-menu');
            menu.sideNav({
                menuWidth: 200,
                edge: 'right',
                closeOnClick: true
            });

            //Sets up projects dropdown button
            var dropdownProject = $('.dropdown-button');
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
        },
        templateUrl: './views/main.html'
    };
});