


var width = $(window).width();

$(window).ready(function(){

    
    width = $(window).width();
    if( width < 850 ){
        $(".bg-video__content").hide()
    
    $(".header").css("background-color", "transparent")
    $(".header").css("background-image", "linear-gradient(rgba(89, 241, 255, 0.39), rgba(89, 241, 255, 0.39)), url(img/sansilvestrehead.jpg)")
    $(".header").css("background-size", "cover")

    }else if (width >850){
        $(".bg-video__content").show()
   
    }
})

$(window).on("resize", function(){
    width = $(window).width();
    if( width < 850 ){


        $(".bg-video__content").hide()

    $(".header").css("background-color", "transparent")
    $(".header").css("background-image", "linear-gradient(rgba(89, 241, 255, 0.39), rgba(89, 241, 255, 0.39)), url(img/sansilvestrehead.jpg)")
    $(".header").css("background-size", "cover")

    }else if (width >850){
    $(".bg-video__content").show()
        
        $(".header").css({"background-color": ""})
        $(".header").css({"background-image": ""})
        $(".header").css({"background-size": ""})

    }
})

