/**
 * Created by Lance on 1/31/2016.
 */
mod.controller("csProjectsCtrl" ,['csDataModel', function(csDataModel){
    this.data = csDataModel.getData();
}]);