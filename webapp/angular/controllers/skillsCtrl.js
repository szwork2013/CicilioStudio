/**
 * Created by Lance on 1/31/2016.
 */
mod.controller("csSkillsCtrl", ['$scope', 'csDataModel', function($scope, csDataModel){
    this.data = csDataModel.getData();
}]);