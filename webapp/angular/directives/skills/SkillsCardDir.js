/**
 * Created by Lance on 1/7/2016.
 */
mod.directive('csSkillsCard', function(){
    return {
        scope: {
            skill: '&dataSkill'
        },
        restrict: 'E',
        link: function(scope, elm, attrs){

            // To Read Skills From Attribute
            console.log('yo');
            var skill = JSON.parse(attrs.skill);
            console.log(skill);
        },
        templateUrl: './views/skills_card.html'
    }
});