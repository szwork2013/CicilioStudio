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
    var childImg = $(id).children("img");
    console.log("HERE");
    console.log(childImg[0]);
    $(childImg[0]).animate({
        transform: 'scale(1.25)'
    }, 1000
    );

    $(id).animate({
        transform: 'scale(1.25)'
    }, 1000
    );

        var child = $(id).children("div"); // Child[0] is the .short_des
        var parentTop = $(id).position();
        var imgPos = $(childImg[0]).position();
        var imgBorderOffset = parseInt($(childImg[0]).css("border-width"),10);
        $(child[0]).css({
            "top": imgPos.top,
            "bottom": imgPos.bottom,
            "right": imgPos.right,
            "left": imgPos.left+imgBorderOffset,
            "width": $(childImg[0]).width(),
            "height": $(childImg[0]).height()+imgBorderOffset
        });

        console.log(childImg[0]);
        console.log("Border-Width: " + imgBorderOffset);
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