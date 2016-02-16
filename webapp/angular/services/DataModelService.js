/**
 * Created by Lance on 1/31/2016.
 */
mod.service('csDataModel', () => {
    function getData() {
        let data = {};
        try{
            let rawData = localStorage.getItem('data');
            data = JSON.parse(rawData);
        }catch (e) {
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
        let dataS = {};
        if (data){
            try {
                dataS = JSON.stringify(data);
                localStorage.setItem('data', dataS);
            } catch(e) {
                console.log(`Error: ${e}`);
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
    }
});