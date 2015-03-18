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



function testRoute2(name){
    console.log("#/" + name.toString());
};

function testRoute2(name,source){
    if (source === undefined && name === undefined){
        console.log('Nothing');
    }else if(source === undefined){
        console.log("#/" + name.toString());
    }else{
        console.log("#/" + name.toString() + '/' + source.toString());
    };
};