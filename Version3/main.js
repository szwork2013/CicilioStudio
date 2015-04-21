/**
 * Created by Lance on 3/21/2015.
 */

var currentTag = '#main';

floatNav = function() {
    console.log("test");
    //var k = window.onscroll();
    $("#navBar").mouseenter(function(){
       $("#navBar").css("position", "fixed");
       //$("a").css("color", "red");
       console.log("test 2");
    });
};


goToTag = function(scrollToID){
  var spacing = $("#content").css("margin-top");
  var spacingNum = parseInt(spacing);
  console.log(spacingNum);
  $('html, body').animate({
      scrollTop: $(scrollToID).offset().top - spacingNum
  }, 1000,0,function(){
      console.log("scrolled");
  });
};

goToStart = function(scrollToID){
    $('html, body').animate({
        scrollTop: $(scrollToID).offset().bottom
    }, 1000,0,function(){
        console.log("scrolled");
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

hideTag = function(id){
    $(id).css(
        "visibility","hidden"
    );
    $(id).css(
        "display","none"
    );
    console.log("showTag");
};

/*
Pre: When is being hovered.
Display the short description below in an
 absolute position.
 */

displaySD = function(id){
    var child = $(id).children(".short_des");
    var posTop = $(id).position().top;
    console.log("Pos Top: " + posTop);
    child.css(
        "top",(posTop + 20)
    );
};

/**
 * Displays short description on
 * to of the image with a semi
 * transparent background.
 * @param id - .panel_container
 */
overlaySD = function(id){
    var ID = "#" + id.toString();
    var child = $(id).children("div"); // Child[0] is the .short_des
    var parentTop = $(id).position();
    $(child[0]).css(
        "top",parentTop.top
    );
    $(child[0]).css(
        "bottom",parentTop.bottom
    );
    $(child[0]).css(
        "right",parentTop.right
    );
    $(child[0]).css(
        "left",parentTop.left
    );
    $(child[0]).css(
        "width",$(id).width()
    );
    $(child[0]).css(
        "height",$(id).height()
    );
    console.log(parentTop);
    console.log(parentTop.top);
    console.log(child[0]);
    console.log("Test Worked");
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