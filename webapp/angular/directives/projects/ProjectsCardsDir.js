/**
 * Created by Lance on 1/4/2016.
 */
mod.directive("csProjectsCard", function(){

    let projectsCardDirCtrl = ['$state', ($state) => {
        //Allows Clicks on Chips
        $('.card').click( function(event) {
            let ref = $(this).attr('ui-serf'); //ui-serf reference
            $state.go(ref); //Dynamically goes to different state
        });
    }];

    return {
        scope: {
            projectString: '@csDataProject'
        },
        restrict: 'E',
        controller: projectsCardDirCtrl,
        link: (scope) => {
            // Parses projectString to js object, adds it to scope.project
            try{
                let project = JSON.parse(scope.projectString);
                scope.project = project;
            }catch (e) {
                console.log ('Error: ' + e);
                scope.project = {};
            }
        },
        templateUrl: './views/projects_card.html'
    };
});