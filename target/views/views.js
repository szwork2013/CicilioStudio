(function(module) {
try {
  module = angular.module('csTemplates');
} catch (e) {
  module = angular.module('csTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('chip.html',
    '<div ui-serf="{{linkUrl}}" class="tooltipped col s3 m2 l2 cs-chip"\n' +
    '     data-position="bottom" data-delay="10" data-tooltip="{{name}}">\n' +
    '    <img src="{{imageUrl}}"/>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('csTemplates');
} catch (e) {
  module = angular.module('csTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('cs-app.html',
    '<div ui-view></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('csTemplates');
} catch (e) {
  module = angular.module('csTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('home.html',
    '\n' +
    '    <!--<div class="row">-->\n' +
    '        <!--<ul class="cs-home-btn-wrapper ">-->\n' +
    '            <!--<li class="cs-home-btn waves-effect waves-light btn z-depth-1 col s2">Projects</li>-->\n' +
    '            <!--<li class="cs-home-btn waves-effect waves-light btn z-depth-1 col s2">Skills</li>-->\n' +
    '            <!--<li class="cs-home-btn waves-effect waves-light btn z-depth-1 col s3">Experience</li>-->\n' +
    '            <!--<li class="cs-home-btn waves-effect waves-light btn z-depth-1 col s2">Life</li>-->\n' +
    '            <!--<li class="cs-home-btn waves-effect waves-light btn z-depth-1 col s2">Contact</li>-->\n' +
    '        <!--</ul>-->\n' +
    '    <!--</div>-->\n' +
    '<div>\n' +
    '    <a-scene class="cs-home" stats="true">\n' +
    '        <!--<a-entity id="background-music" position="0 0 0" autoplay="true"-->\n' +
    '                  <!--sound="src: ../assets/music/floret.mp3"></a-entity>-->\n' +
    '\n' +
    '        <template is="a-template" element="a-star">\n' +
    '            <a-cube color="white" depth=".1" height=".1" width=".1" position="0 0 0"></a-cube>\n' +
    '        </template>\n' +
    '\n' +
    '\n' +
    '        <a-assets>\n' +
    '            <img id="t0" src="../assets/images/projects/trebuchet/trebuchet21.jpg">\n' +
    '            <img id="t1" src="../assets/images/projects/trebuchet/trebuchet22.jpg">\n' +
    '            <img id="t2" src="../assets/images/projects/trebuchet/trebuchet23.jpg">\n' +
    '            <img id="t3" src="../assets/images/projects/trebuchet/trebuchet24.jpg">\n' +
    '            <img id="t4" src="../assets/images/projects/trebuchet/trebuchet25.jpg">\n' +
    '            <img id="t5" src="../assets/images/projects/trebuchet/trebuchet26.jpg">\n' +
    '            <img id="t6" src="../assets/images/projects/trebuchet/trebuchet27.jpg">\n' +
    '            <img id="t7" src="../assets/images/projects/trebuchet/trebuchet28.jpg">\n' +
    '            <img id="t8" src="../assets/images/projects/trebuchet/trebuchet29.jpg">\n' +
    '        </a-assets>\n' +
    '\n' +
    '        <!--<a-entity id="background-music" position="0 0 0"-->\n' +
    '                  <!--sound="src: ../assets/music/floret.mp3; autoplay: true"></a-entity>-->\n' +
    '\n' +
    '        <!--Left Photos-->\n' +
    '        <a-entity rotation="335 260 0">\n' +
    '            <a-image src="../assets/images/projects/trebuchet/trebuchet21.jpg" position="0 -1 3" width="4" height="3"></a-image>\n' +
    '        </a-entity>\n' +
    '\n' +
    '        <a-entity rotation="335 260 0">\n' +
    '            <a-image src="../assets/images/projects/trebuchet/trebuchet22.jpg" position="-5 -1 3" width="4" height="3"></a-image>\n' +
    '        </a-entity>\n' +
    '\n' +
    '        <a-entity rotation="335 260 0">\n' +
    '            <a-image src="../assets/images/projects/trebuchet/trebuchet23.jpg" position="-10 -1 3" width="4" height="3"></a-image>\n' +
    '        </a-entity>\n' +
    '\n' +
    '        <a-entity rotation="335 260 0">\n' +
    '            <a-image src="../assets/images/projects/trebuchet/trebuchet24.jpg" position="-15 -1 3" width="4" height="3"></a-image>\n' +
    '        </a-entity>\n' +
    '\n' +
    '        <!--Right Photos-->\n' +
    '        <a-entity rotation="25 260 0">\n' +
    '            <a-image src="../assets/images/projects/trebuchet/trebuchet25.jpg" position="0 -1 -3" width="4" height="3"></a-image>\n' +
    '        </a-entity>\n' +
    '\n' +
    '        <a-entity rotation="25 260 0">\n' +
    '            <a-image src="../assets/images/projects/trebuchet/trebuchet26.jpg" position="-5 -1 -3" width="4" height="3"></a-image>\n' +
    '        </a-entity>\n' +
    '\n' +
    '        <a-entity rotation="25 260 0">\n' +
    '            <a-image src="../assets/images/projects/trebuchet/trebuchet27.jpg" position="-10 -1 -3" width="4" height="3"></a-image>\n' +
    '        </a-entity>\n' +
    '\n' +
    '        <a-entity rotation="25 260 0">\n' +
    '            <a-image src="../assets/images/projects/trebuchet/trebuchet28.jpg" position="-15 -1 -3" width="4" height="3"></a-image>\n' +
    '        </a-entity>\n' +
    '        <!--<a-image src="#t2" position=".9 0 1" width="200" height="100"></a-image>-->\n' +
    '        <!--<a-image src="#t3" position=".8 0 1" width="200" height="100"></a-image>-->\n' +
    '        <!--<a-image src="#t4" position=".7 0 1" width="200" height="100"></a-image>-->\n' +
    '        <!--<a-image src="#t5" position=".6 0 1" width="200" height="100"></a-image>-->\n' +
    '        <!--<a-image src="#t6" position=".5 0 1" width="200" height="100"></a-image>-->\n' +
    '        <!--<a-image src="#t7" position=".4 0 1" width="200" height="100"></a-image>-->\n' +
    '\n' +
    '\n' +
    '        <a-sky color="#0F1523"></a-sky>\n' +
    '        <a-camera id="camera" cursor-visible="false" position="0 -.5 5"></a-camera>\n' +
    '\n' +
    '    </a-scene>\n' +
    '    <!--<div class="cs-home">-->\n' +
    '        <!--<div class="container">-->\n' +
    '            <!--<div class="row">-->\n' +
    '                <!--<div class="col s5">-->\n' +
    '                    <!--<ul class="cs-home-btn-wrapper">-->\n' +
    '                        <!--<li ui-sref="main.projects" class="cs-home-btn cs-home-projects">Projects</li>-->\n' +
    '                        <!--<li ui-sref="main.skills" class="cs-home-btn cs-home-skills">Skills</li>-->\n' +
    '                        <!--<li ui-sref="main.experience" class="cs-home-btn cs-home-experience">Experience</li>-->\n' +
    '                        <!--<li ui-sref="main.life" class="cs-home-btn cs-home-life">Life</li>-->\n' +
    '                        <!--<li ui-sref="main.contact" class="cs-home-btn cs-home-contacts">Contact</li>-->\n' +
    '                    <!--</ul>-->\n' +
    '                <!--</div>-->\n' +
    '            <!--</div>-->\n' +
    '        <!--</div>-->\n' +
    '    <!--</div>-->\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('csTemplates');
} catch (e) {
  module = angular.module('csTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('lifea.html',
    '<div class="cs-life">\n' +
    '\n' +
    '\n' +
    '    <div class="container">\n' +
    '        <div class="row">\n' +
    '            <h1 class="cs-main-header center-align">Life</h1>\n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '            <div class="col 1 right">\n' +
    '\n' +
    '                <!--Projects Dropdown Button-->\n' +
    '                <ul id=\'dropdown-skills-filter\' class=\'dropdown-content cs-dropdown-skills-filter\'>\n' +
    '                    <li><a class="cs-dropdown-item" ui-sref="main.project.trebuchet">A-Z</a></li>\n' +
    '                    <li class="divider"></li>\n' +
    '                    <li ><a class="cs-dropdown-item" ui-sref="main.project.trebuchet">Z-A</a></li>\n' +
    '                    <li class="divider"></li>\n' +
    '                    <li ><a class="cs-dropdown-item" ui-sref="main.project.trebuchet">Most Familiar</a></li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="container">\n' +
    '        <div class="row cs-skills-card-wrapper">\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('csTemplates');
} catch (e) {
  module = angular.module('csTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('main.html',
    '<div class="cs-nav">\n' +
    '    <div class="navbar-fixed">\n' +
    '        <nav>\n' +
    '            <div class="nav-wrapper">\n' +
    '                <a ui-sref="main.home" class="brand-logo cs-siteicon">CicilioStudio</a>\n' +
    '                <a href="#" data-activates="mobile-nav" class="right button-collapse cs-mobile-menu"><i class="material-icons">menu</i></a>\n' +
    '                <a class="left button-collapse cs-mobile-back"><i class="material-icons">arrow_backwords</i></a>\n' +
    '\n' +
    '                <!--Main Nav-->\n' +
    '                <ul class="hide-on-med-and-down cs-main-nav">\n' +
    '                    <li ui-sref="main.home" class="tooltipped"\n' +
    '                        data-position="bottom" data-delay="10" data-tooltip="Home">\n' +
    '                        <a><i class="material-icons left">home</i></a></li>\n' +
    '                    <li>\n' +
    '                        <a ui-sref="main.projects" class=\'dropdown-button cs-dropdown-projects-btn\' data-beloworigin="true" data-activates=\'dropdown-projects\'>\n' +
    '                            Projects<i class="material-icons right">arrow_drop_down</i>\n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '                    <li><a ui-sref="main.skills">Skills</a></li>\n' +
    '                    <li><a ui-sref="main.experience">Experience</a></li>\n' +
    '                    <li><a ui-sref="main.life">Life</a></li>\n' +
    '                    <li><a ui-sref="main.contact">Contact</a></li>\n' +
    '\n' +
    '                    <a class="right cs-fa-linkedin-square tooltipped" href="https://www.linkedin.com/in/dominic-cicilio-96461786"\n' +
    '                       data-position="bottom" data-delay="10" data-tooltip="Linkedin">\n' +
    '                            <i class="fa fa-linkedin-square fa-2x"></i>\n' +
    '                    </a>\n' +
    '                    <a class="right cs-fa-github-square tooltipped" href="https://github.com/lance13c"\n' +
    '                       data-position="bottom" data-delay="10" data-tooltip="Github">\n' +
    '                            <i class="fa fa-github-square fa-2x"></i>\n' +
    '                    </a>\n' +
    '                </ul>\n' +
    '\n' +
    '\n' +
    '                <!--Mobile Side Navigation-->\n' +
    '                <ul class="side-nav cs-side-nav" id="mobile-nav">\n' +
    '                    <li ui-sref="main.home"><a>Home</a></li>\n' +
    '                        <li class="divider"></li>\n' +
    '                    <li><a ui-sref="main.projects">Projects</a></li>\n' +
    '                        <li class="divider"></li>\n' +
    '                    <li><a ui-sref="main.skills">Skills</a></li>\n' +
    '                        <li class="divider"></li>\n' +
    '                    <li><a ui-sref="main.experience">Experience</a></li>\n' +
    '                        <li class="divider"></li>\n' +
    '                    <li><a ui-sref="main.life">Life</a></li>\n' +
    '                        <li class="divider"></li>\n' +
    '                    <li><a ui-sref="main.contact">Contact</a></li>\n' +
    '                        <li class="divider"></li>\n' +
    '                </ul>\n' +
    '\n' +
    '                <!--Projects Dropdown Button-->\n' +
    '                <ul id=\'dropdown-projects\' class=\'dropdown-content cs-dropdown-projects\'>\n' +
    '                    <li><a class="cs-dropdown-item" ui-sref="main.project.trebuchet">Trebuchet</a></li>\n' +
    '                        <li class="divider"></li>\n' +
    '                    <li ><a class="cs-dropdown-item" ui-sref="main.project.trebuchet">Space Fighter</a></li>\n' +
    '                        <li class="divider"></li>\n' +
    '                    <li ><a class="cs-dropdown-item" ui-sref="main.project.trebuchet">Hero 2.0</a></li>\n' +
    '                </ul>\n' +
    '\n' +
    '\n' +
    '            </div>\n' +
    '        </nav>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '<div ui-view></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('csTemplates');
} catch (e) {
  module = angular.module('csTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('projects.html',
    '<div class="cs-projects">\n' +
    '\n' +
    '    <div class="container">\n' +
    '        <div class="row">\n' +
    '            <h1 class="cs-main-header center-align">Projects</h1>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="container">\n' +
    '        <div class="row cs-projects-card-wrapper">\n' +
    '            <div ng-repeat="project in projectsC.data.projects">\n' +
    '                <cs-projects-card cs-data-project="{{project}}"></cs-projects-card>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</div>\n' +
    '\n' +
    '<div cs-projects-cards></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('csTemplates');
} catch (e) {
  module = angular.module('csTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('projects_card.html',
    '<div class="col s6 m4 l4">\n' +
    '    <div ui-serf="{{project.cs_url}}" class="card blue-grey darken-1">\n' +
    '        <div class="card-image">\n' +
    '            <img src="{{project.images[0]}}"/>\n' +
    '            <span class="card-title truncate cs-projects-card-title">{{project.name}}</span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('csTemplates');
} catch (e) {
  module = angular.module('csTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('skills.html',
    '\n' +
    '<div class="cs-skills">\n' +
    '\n' +
    '    <div class="container">\n' +
    '        <div class="row">\n' +
    '            <h1 class="cs-main-header center-align">Skills</h1>\n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '            <div class="col 1 right">\n' +
    '                <!--Filter Button-->\n' +
    '                <div class=\'dropdown-button cs-dropdown-skills-filter-btn btn disabled\' data-beloworigin="true" data-activates=\'dropdown-skills-filter\'>\n' +
    '                    Filter<i class="material-icons right">arrow_drop_down</i>\n' +
    '                </div>\n' +
    '\n' +
    '                <!--Projects Dropdown Button-->\n' +
    '                <ul id=\'dropdown-skills-filter\' class=\'dropdown-content cs-dropdown-skills-filter\'>\n' +
    '                    <li><a class="cs-dropdown-item" ui-sref="main.project.trebuchet">A-Z</a></li>\n' +
    '                    <li class="divider"></li>\n' +
    '                    <li ><a class="cs-dropdown-item" ui-sref="main.project.trebuchet">Z-A</a></li>\n' +
    '                    <li class="divider"></li>\n' +
    '                    <li ><a class="cs-dropdown-item" ui-sref="main.project.trebuchet">Most Familiar</a></li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="container">\n' +
    '        <div class="row cs-skills-card-wrapper">\n' +
    '            <div ng-repeat="skill in skillsC.data.skills">\n' +
    '                <cs-skills-card skill="{{skill}}"></cs-skills-card>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('csTemplates');
} catch (e) {
  module = angular.module('csTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('skills_card.html',
    ' <div class="col s6 m4 l4">\n' +
    '     <div class="card blue-grey darken-1">\n' +
    '         <div class="card-content white-text">\n' +
    '             <span class="card-title truncate">{{skill.name}}</span>\n' +
    '         </div>\n' +
    '         <div class="container cs-full-width">\n' +
    '             <div class="card-action cs-skills-card-chip-holder">\n' +
    '                 <div class="cs-skills-card-text">Related Projects</div>\n' +
    '                    <div class="row cs-skills-card-projects">\n' +
    '                        <div ng-repeat="project in skill.projects">\n' +
    '                            <cs-chip\n' +
    '                                cs-data-image-url="{{project.icon_image}}"\n' +
    '                                cs-data-link-url="{{project.url}}"\n' +
    '                                cs-data-name="{{project.name}}">\n' +
    '                            </cs-chip>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                 </div>\n' +
    '             </div>\n' +
    '         </div>\n' +
    '     </div>\n' +
    ' </div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('csTemplates');
} catch (e) {
  module = angular.module('csTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('vr_home.html',
    '<div>\n' +
    '\n' +
    '</div>');
}]);
})();
