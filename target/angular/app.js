'use strict';

var mod = angular.module("mod", ['ui.router', 'ui.materialize']);
mod.directive('csApp', function () {
    return {
        scope: {},
        restrict: 'E',
        templateUrl: './angular/cs-app.html'
    };
});

//cs: cicilio studio
//Creates the angular app element
var el = document.createElement('cs-app');
angular.bootstrap(el, [mod.name]);
$('.cs-app-class').append(el);
'use strict';

/**
 * Created by Lance on 1/31/2016.
 */
//Routing
mod.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('main.home', {
        url: "/",
        template: "<cs-home></cs-home>"
    }).state('main', {
        template: "<cs-main></cs-main>",
        resolve: {
            dataResolver: ['csData', function (csData) {
                var info = {};
                return csData.get().success(function (jsonData) {
                    if (jsonData) {
                        info = jsonData;
                    } else {
                        console.log('No Data');
                        return false;
                    }
                    return info;
                });
            }]
        },
        controller: "csMainCtrl",
        controllerAs: "mainC"
    }).state('main.projects', {
        url: "^/projects",
        template: "<cs-projects></cs-projects>"
    }).state('main.skills', {
        url: '^/skills',
        template: "<cs-skills></cs-skills>",
        controller: "csSkillsCtrl",
        controllerAs: "skillsC"
    }).state('main.life', {
        url: '^/life',
        template: "<cs-skills></cs-skills>",
        controller: "csSkillsCtrl",
        controllerAs: "skillsC"
    });
    $urlRouterProvider.otherwise("/");
}]);
/**
 * Created by Lance on 1/5/2016.
 */
"use strict";
'use strict';

/**
 * Created by Lance on 1/31/2016.
 */
mod.service('csDataModel', function () {
    function getData() {
        var data = {};
        try {
            var rawData = localStorage.getItem('data');
            data = JSON.parse(rawData);
        } catch (e) {
            console.log('Error getting local data');
        }
        return data;
    };

    /**
     * Sets the data used in the webapp
     * @param data {Object}
     * @returns {boolean}
     */
    function setData(data) {
        var dataS = {};
        if (data) {
            try {
                dataS = JSON.stringify(data);
                localStorage.setItem('data', dataS);
            } catch (e) {
                console.log('Error: ' + e);
                return false;
            }
            return true;
        }
        return false;
    }

    //Return service object with specified methods
    return {
        getData: getData,
        setData: setData
    };
});
'use strict';

/**
 * Created by Lance on 1/8/2016.
 */
mod.factory('csData', function ($http) {
    var promise = null;

    return {
        get: function get() {
            if (promise) {
                // If we've already asked for this data once,
                // return the promise that already exists.
                return promise;
            } else {
                promise = $http.get('/assets/data/data.json');
                console.log('hardcoded data path in dataService');
                return promise;
            }
        }
    };
});
'use strict';

/**
 * Created by Lance on 1/31/2016.
 */
mod.factory('csLoadScreen', function () {
        var promise = null;

        return {

                start: function start() {},

                stop: function stop() {}
        };
});
"use strict";
'use strict';

/**
 * Created by Lance on 1/31/2016.
 */
mod.controller("csMainCtrl", ['$scope', '$state', 'csDataModel', 'dataResolver', function ($scope, $state, csDataModel, dataResolver) {
    var _this = this;

    //Saves Data to $Scope

    this.data = {};
    //Initializes the data being saved
    var init = function () {
        if (dataResolver.data) {
            _this.data = dataResolver.data;
            csDataModel.setData(dataResolver.data);
        } else {
            console.log('Error No Data from Resolver');
        }
    }();
}]);
"use strict";

/**
 * Created by Lance on 1/31/2016.
 */
mod.controller("csProjectsCtrl", ['$scope', function ($scope) {}]);
'use strict';

/**
 * Created by Lance on 1/31/2016.
 */
mod.controller("csSkillsCtrl", ['$scope', 'csDataModel', function ($scope, csDataModel) {
  this.data = csDataModel.getData();
}]);
'use strict';

/**
 * Created by Lance on 1/8/2016.
 */
mod.directive('csChip', function () {

    var chipCtrl = ['$state', function ($state) {
        //Allows Clicks on Chips
        $('.cs-chip').click(function (event) {
            var ref = $(this).attr('ui-serf'); //ui-serf reference
            $state.go(ref); //Dynamically goes to different state

            //Need to clear backdrops and siblings, otherwise they say on the screen
            $('.backdrop').siblings('span').css('display', 'none');
            $('.backdrop').css('display', 'none');
        });
    }];

    return {
        scope: {
            imageUrl: '@csDataImageUrl',
            linkUrl: '@csDataLinkUrl',
            name: '@csDataName'
        },
        restrict: 'E',
        controller: chipCtrl,
        link: function link(scope, elm, attrs) {

            //Icon Tooltips
            $('.tooltipped').tooltip();
        },
        templateUrl: './views/chip.html'
    };
});
"use strict";

/**
 * Created by Lance on 1/4/2016.
 */
mod.directive("csProjectsCards", function () {
    return {
        scope: {},
        restrict: 'A',
        link: function link($http, scope) {
            scope.projects = {
                projects: {
                    title: "nothing"
                }
            };
            //$http.get('/webapp/data/data.json').success(function(data){
            //    scope.projects = data.projects;
            //});
        },
        templateUrl: './views/projects_cards.html'
    };
});
'use strict';

/**
 * Created by Lance on 1/7/2016.
 */
mod.directive("csProjects", function () {
    return {
        scope: {},
        restrict: 'E',
        link: function link(scope) {},
        templateUrl: './views/projects.html'
    };
});
'use strict';

/**
 * Created by Lance on 1/7/2016.
 */
mod.directive('csSkillsCard', function () {
    return {
        scope: {
            skillString: '@skill'
        },
        restrict: 'E',
        link: function link(scope, elm, attrs) {

            // Parses skillString to js object, adds it to scope.skill
            try {
                var skill = JSON.parse(scope.skillString);
                scope.skill = skill;
            } catch (e) {
                console.log('Error: ' + e);
                scope.skill = {};
            }
        },
        templateUrl: './views/skills_card.html'
    };
});
'use strict';

/**
 * Created by Lance on 1/7/2016.
 */
mod.directive('csSkills', function () {

    return {
        scope: {
            skills: '&dataSkills'
        },
        controller: 'csSkillsCtrl',
        controllerAs: 'skillsC',
        restrict: 'E',
        link: function link(scope) {
            //Where the data comes from

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
            });
        },
        templateUrl: './views/skills.html'
    };
});
'use strict';

/**
 * Created by Lance on 1/4/2016.
 */
mod.directive("csHome", function () {
    return {
        scope: {},
        restrict: 'E',
        link: function link(scope) {

            //On hover change cs-home background image

        },
        templateUrl: './views/home.html'
    };
});
'use strict';

/**
 * Created by Lance on 1/4/2016.
 */
mod.directive("csMain", function () {

    return {
        scope: {},
        restrict: 'E',
        link: function link(scope, a, b, $controller) {
            var data = {};
            if (scope.$parent.mainC.data) {
                data = scope.$parent.mainC.data;
            }

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
            });

            //Icon Tooltips
            $('.tooltipped').tooltip();

            //Link Mobile Nav Back Button to Browser Back Button
            $('.cs-mobile-back').click(function (event) {
                window.history.back();
            });
        },
        templateUrl: './views/main.html'
    };
});