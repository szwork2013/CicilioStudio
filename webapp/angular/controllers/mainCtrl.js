/**
 * Created by Lance on 1/31/2016.
 */
mod.controller("csMainCtrl", ['$scope', '$state', 'csDataModel', 'dataResolver', function($scope, $state, csDataModel, dataResolver){
    //Saves Data to $Scope
    debugger;

    this.data = {};
    //Initializes the data being saved
    let init = (() => {
        if (dataResolver.data){
            this.data = dataResolver.data;
            csDataModel.setData(dataResolver.data);
        }else{
            console.log('Error No Data from Resolver');
        }
    })();


}]);