/**
 * Created by Lance on 1/7/2016.
 */
mod.directive('csSkills', function(){

    return {
        scope: {
            skills: '&dataSkills'
        },
        restrict: 'E',
        link: function(scope){
            //Where the data comes from
            let data = {};
            if (scope.$parent.mainC.data){
                data = scope.$parent.mainC.data;
            }

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
            var skills = data.skills;

            //Generate and append New Card
            skills.forEach(function(skill) {

                var card = $("<cs-skills-card></cs-skills-card>");
                card.attr({'data-skill': JSON.stringify(skill)});
                angular.bootstrap(card, [mod.name]);
                $('.cs-skills-card-wrapper').append(card);
            });

        },
        templateUrl: './views/skills.html'
    }
});