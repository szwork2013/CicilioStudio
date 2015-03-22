/**
 * Created by Lance on 3/21/2015.
 */

floatNav = function() {
    console.log("test");
    //var k = window.onscroll();
    $("#navBar").mouseenter(function(){
       $("#navBar").css("position", "fixed");
       //$("a").css("color", "red");
       console.log("test 2");
    });
};

loadHtml = function(dir){
    $("#display").load(dir,function(){
        console.log("Load Happened");
    });
};

showTag = function(id){
    $(id).css(
        "visibility","visible"
    );
    $(id).css(
        "display","block"
    );
    console.log("showTag");
};

/*
$(function(){
    //$("#navBar").css("font-size",
      //  function () {
        //    return window.outerWidth / 50;
        //}
    //);
    $(window).bind('resize',function(){
       var preferredHeight = 600;
       var fontsize = 18;

       var displayHeight = $(window).height();
       var percentage = displayHeight / preferredHeight;
       var newFontSize = Math.floor(fontsize * percentage);
       $("#navBar").css("font-size", newFontSize);
    });
    console.log("change");
});
*/