let width = window.innerWidth;

$(window).scroll(function(){

        if(scrollY > 50){
if(width > 500){
        $(".header__logo--small").css("top", "-0.5rem" )      
}else if(width < 500){
        $(".header__logo--small").css("top", "-1.5rem" )    
        $(".header__logo--small").css("padding-left", "0rem" )
        
}
          


        $(".header__logo--small").css("scale", "0.7" )
        

        $(".slideNav__drawer--tag").css("top", "1.5rem" )

         $(".white").css("height", "8.5rem" )

         $(".header__links").css("top", "1.5rem" )   
if(width > 500){
        $(".header__logo--small").css("padding-left", "4rem" )

}else if (width < 500){
          $(".header__logo--small").css("padding-left", "1rem" )
}
       
         
    
        }if(scrollY < 50){
                $(".header__logo--small").css("scale", "1" )
                $(".header__logo--small").css("top", "2rem" )
                $(".slideNav__drawer--tag").css("top", "5rem" )

                $(".white").css("height", "13rem" )

                $(".header__links").css("top", "4rem" )   
        }
            
        
    
     
    })
    
    
    


function cssFunction() {
        document.querySelector("body").classList.remove("preload");
        console.log('hello')
      };


     
     


if (width < 500) {
        document.querySelector(".header__logo--small").setAttribute("style", "padding-left:1rem" )
        document.querySelector('.aboutMe__container').setAttribute("data-aos", "fade-in-pink")
        document.querySelector('.aboutMe__container').setAttribute("data-aos-duration", "1000")
        document.querySelector(".section__cv").setAttribute("data-aos-duration", "1000")
        document.querySelector(".section__cv").setAttribute("data-aos", "fade-in-blue")
}

function close() {
        document.querySelector(".slideNav__drawer").setAttribute("style", "transform: translateX(106%)")
        document.querySelector(".slideNav").setAttribute("style", " visibility: hidden")
      
}

function open() {
        document.querySelector(".slideNav__drawer").setAttribute("style", "transform: translateX(0)")
        document.querySelector(".slideNav").setAttribute("style", " visibility: visible")
        document.querySelector(".slideNav").setAttribute("style", "visibility: translateX(0)")
}


document.addEventListener('DOMContentLoaded', function () {
        close();
})

document.querySelector(".slideNav__close").addEventListener("click", function () {
        close();
})

document.querySelector(".slideNav__drawer--tag").addEventListener("click", function () {
        open();
})

document.querySelector(".slideNav").addEventListener("click", function () {
        close();
})



