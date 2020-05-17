
// VIDEO / PIC TOGGLE

function removeVideo() {
    $(".bg-video__content").hide()
    $(".header").css("background-color", "transparent" ).css("background-image", "linear-gradient(rgba(89, 241, 255, 0.39), rgba(89, 241, 255, 0.39)), url(img/sansilvestrehead.jpg)").css("background-size", "cover")
}

function addVideo() {
    $(".bg-video__content").show()
    $(".header").css({"background-color": ""},).css({"background-image": ""}).css({"background-size": ""})
}

var width = $(window).width();

$(window).ready(function(){
    width = $(window).width();
        if( width < 850 ){
            removeVideo();
    }else if (width >850){
        addVideo();
    }
})

$(window).on("resize", function(){
    width = $(window).width();
        if( width < 850 ){
            removeVideo()
         }else if (width >850){
            addVideo();
    }
})


// NAV MOBILE BUTTON

var navOpen = false;

function openNav() {
navOpen = true;
    $(".mobile__nav__burger").css("animation", "navGone 0.2s forwards" )
     $(".mobile__nav__burger__before").css("animation", "navX2 0.5s forwards" )
    $(".mobile__nav__burger__after").css("animation", "navX 0.5s forwards" )
    $(".nav__box--mob").css("animation", "linksVisibilityOn 2s .5s forwards")
    $(".mobile__nav__button__before").css("animation", "navGrow 1.0s forwards")

}

function closeNav() {
    navOpen = false;
        $(".mobile__nav__burger").css("animation", "navGoneRev 2s forwards" )
         $(".mobile__nav__burger__before").css("animation", "navX2Rev 0.5s forwards" )
        $(".mobile__nav__burger__after").css("animation", "navXRev 0.5s forwards" )
        $(".nav__box--mob").css("animation", "linksVisibilityOff .5s forwards")
        $(".mobile__nav__button__before").css("animation", "navShrink 1.0s forwards")
    }


$(".mobile__nav").click(function() {
    if(navOpen == false){
    openNav();
}else if(navOpen == true) {
    closeNav();
}
})




