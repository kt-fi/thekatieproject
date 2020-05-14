


var width = $(document).width();

$(window).ready(function(){
    width = $(window).width();
    if( width < 600 ){
     $(".bg-video").removeClass("bg-video")
     $(".bg-video").hide()
    $(".header").css("background-color", "transparent")
    $(".header").css("background-image", "linear-gradient(rgba(89, 241, 255, 0.39), rgba(89, 241, 255, 0.39)), url(img/sansilvestrehead.jpg)")
    $(".header").css("background-size", "cover")

    }else if (width >600){
        $(".bg-video").add(".bg-video__content")
   
    }
})

$(window).on("resize", function(){
    width = $(window).width();
    if( width < 600 ){

     $(".bg-video").remove(".bg-video__content")
     $(".bg-video").hide()
    $(".header").css("background-color", "transparent")
    $(".header").css("background-image", "linear-gradient(rgba(89, 241, 255, 0.39), rgba(89, 241, 255, 0.39)), url(img/sansilvestrehead.jpg)")
    $(".header").css("background-size", "cover")

    }else if (width >600){
        $(".bg-video").add(".bg-video__content")
        
        $(".header").css({"background-color": ""})
        $(".header").css({"background-image": ""})
        $(".header").css({"background-size": ""})

    }
})

