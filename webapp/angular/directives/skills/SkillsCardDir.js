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
            var skill = JSON.parse(attrs.skill);
            scope.skill = skill;

            var actionProjects = $('.cs-skills-card-projects');

            //debugger;

            for (var i=0; i<skill.projects.length; i++){
                var actionProject = $('<cs-chip></cs-chip>')
                    .attr({
                        'data-url': skill.projects[i].icon_image,
                        'data-name': skill.projects[i].name
                    });
                angular.bootstrap(actionProject, [mod.name]);

                actionProjects.append(actionProject);
            }
            $('.cs-skills-card-projects').append(actionProjects);

        },
        templateUrl: './views/skills_card.html'
    }
});