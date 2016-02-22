/**
 * Created by Lance on 1/7/2016.
 */
mod.directive('csSkillsCard', () => {
    return {
        scope: {
            skillString: '@skill'
        },
        restrict: 'E',
        link: function(scope, elm, attrs){

            // Parses skillString to js object, adds it to scope.skill
            try{
                let skill = JSON.parse(scope.skillString);
                scope.skill = skill;
            }catch (e) {
                console.log ('Error: ' + e);
                scope.skill = {};
            }

        },
        templateUrl: './views/skills_card.html'
    }
});