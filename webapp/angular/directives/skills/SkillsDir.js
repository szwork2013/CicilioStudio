/**
 * Created by Lance on 1/7/2016.
 */
mod.directive('csSkills', function(){

    return {
        scope: {
            skills: '&dataSkills'
        },
        restrict: 'E',
        link: function(scope, elm, attrs, ctrl){

            //Sets up projects dropdown button
            var dropdownProject = $('.dropdown-button');
            dropdownProject.dropdown({
                    inDuration: 300,
                    outDuration: 225,
                    constrain_width: true, // Does not change width of dropdown to that of the activator
                    hover: false, // Activate on hover
                    gutter: 0, // Spacing from edge
                    belowOrigin: true, // Displays dropdown below the button
                    alignment: 'right' // Displays dropdown with edge aligned to the left of button
                }
            );

            // To Read Skills From Attribute
            var skills = JSON.parse(attrs.skills);
            console.log(skills);


        },
        templateUrl: './views/skills.html'
    }
});