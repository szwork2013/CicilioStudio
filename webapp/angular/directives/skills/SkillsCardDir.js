/**
 * Created by Lance on 1/7/2016.
 */
mod.directive('csSkillsCard', function(){
    return {
        scope: {
            skill: '&skill'
        },
        restrict: 'E',
        link: {

        },
        templateUrl: './views/skillsCard.html'
    }
});