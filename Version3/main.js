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

imageLoad = function(){
    $('img').load(function(){
        $(this).fadeIn(500);
    });
    console.log("worked");
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

/*
Sets the .short_des overlay properties correctly
 */
overlaySD = function(){
    $(".panel_container").each(function(){
        var child = $(this).children("div");
        var childImg = $(this).children("img");
        var imgPos = $(childImg[0]).position();
        var imgBorderOffset = parseInt($(childImg[0]).css("border-width"),10);
        //console.log($(this));
        //console.log(child[0]);
        console.log(childImg[0]);
        console.log(imgPos);
        console.log($(childImg[0]).width());
        $(child[0]).css({
            "top": imgPos.top,
            "bottom": imgPos.bottom,
            "right": imgPos.right,
            "left": imgPos.left+imgBorderOffset,
            "width": ($(childImg[0]).width()),
            "height": ($(childImg[0]).height()+imgBorderOffset)
        });
    });
};

overlaySDShort = function(){
    $(".short_des").each(function(){
        var childImg = $(this).children("img");
        var imgPos = $(childImg[0]).position();
        var imgBorderOffset = parseInt($(childImg[0]).css("border-width"),10);
        //console.log($(this));
        //console.log(child[0]);
        console.log(childImg[0]);
        console.log(imgPos);
        console.log($(childImg[0]).width());
        $(childImg[0]).css({
            "top": imgPos.top,
            "bottom": imgPos.bottom,
            "right": imgPos.right,
            "left": imgPos.left+imgBorderOffset,
            "width": ($(childImg[0]).width()),
            "height": ($(childImg[0]).height()+imgBorderOffset)
        });
    });
};

/**
 * Displays short description on
 * to of the image with a semi
 * transparent background.
 * @param id - .panel_container
 */
animatePanel = function(id){
    var childImg = $(id).children("img");
    var shortDes = $(id).children("div");
    console.log("HERE");
    console.log(childImg[0]);
    $(childImg[0]).animate({
            height: ($(childImg).height()*1.25),
            width: ($(childImg).width()*1.25)
    }, 500, "swing", function(){
            $(shortDes[0]).css({
                "display": "inline-block",
                "visibility": "visible"
            });
        }
    );
        console.log(shortDes[0]);
        console.log(childImg[0]);
        console.log("Test Worked");
};

/**
 * This reverses the effects of animatePanel
 */
animatePanelR = function(id){
    var ID = "#" + id.toString();
    var childImg = $(id).children("img");
    var shortDes = $(id).children("div");
    $(shortDes[0]).css({
        "display": "none",
        "visibility": "hidden"
    });
    console.log("HERE");
    console.log(childImg[0]);
    $(childImg[0]).animate({
            height: ($(childImg).height()*0.75),
            width: ($(childImg).width() *0.75)
        }, 500, "swing"
    );
    console.log(shortDes[0]);
    console.log(childImg[0]);
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