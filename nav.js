/**
 * Created by Lance on 12/25/2014.
 */
function direct(event){
    var id = event.target.attributes.id.value;
    console.log(id);
};

function test(){
    console.log("test");
};

function test2(element){
    console.log(element.id);
};

function testRoute(element){
    /* make route key */
    var route = "#/" + element.id.toString().trim();
    console.log(route);
}