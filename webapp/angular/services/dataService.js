/**
 * Created by Lance on 1/8/2016.
 */
mod.factory('csData', function($http) {
    var promise = null;

    return function() {
        if (promise) {
            // If we've already asked for this data once,
            // return the promise that already exists.
            return promise;
        } else {
            promise = $http.get('/assets/data/data.json');
            return promise;
        }
    };
});