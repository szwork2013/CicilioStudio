/**
 * Created by Lance on 1/31/2016.
 */
mod.controller("csSkillsCtrl", ['csDataModel', function(csDataModel){
    this.data = csDataModel.getData();
}]);