/**
 * Created by Lance on 1/8/2016.
 */
mod.factory('csData', ($http) => {
    var promise = null;

    return {
        get: () => {
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
    }
});