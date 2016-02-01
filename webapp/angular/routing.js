/**
 * Created by Lance on 1/31/2016.
 */
//Routing
mod.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('main.home', {
            url: "/",
            template: "<cs-home></cs-home>"
        })
        .state('main', {
            template : "<cs-main></cs-main>",
            resolve: {
                data: ['csData', function(csData) {
                    var info = {};
                    csData.get().success(function(jsonData) {
                        if (jsonData){
                            info = jsonData;
                        }else{
                            console.log('No Data');
                        }
                    });
                    return info;
                }]
            },
            controller: "csMainCtrl",
            controllerAs: "mainC"
        })
        .state('main.projects', {
            url: "^/projects",
            template: "<cs-projects></cs-projects>"
        })
        .state('main.skills', {
            url: '^/skills',
            template: "</cs-skills>",
            controller: "csSkillsCtrl",
            controllerAs: "skillsC"
        }).state('main.life', {
            url: '^/life',
            template: "<cs-skills data-life='{}'></cs-skills>",
            controller: "csSkillsCtrl",
            controllerAs: "skillsC"
    });
    $urlRouterProvider.otherwise("/");
}]);