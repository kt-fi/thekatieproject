let width = window.innerWidth;

if(width < 500){
        document.querySelector('.aboutMe__container').setAttribute("data-aos", "fade-in-pink")
        document.querySelector('.aboutMe__container').setAttribute("data-aos-duration", "1000")
        document.querySelector(".section__cv").setAttribute("data-aos-duration", "1000")
        document.querySelector(".section__cv").setAttribute("data-aos", "fade-in-blue")
}

document.addEventListener('DOMContentLoaded', function(){
        document.querySelector(".slideNav__drawer").setAttribute("style", "transform: translateX(106%)")
        
        document.querySelector(".slideNav").setAttribute("style",     " visibility: hidden")
        

})

document.querySelector(".slideNav__close").addEventListener("click", function(){
        document.querySelector(".slideNav__drawer").setAttribute("style", "transform: translateX(106%)")
        document.querySelector(".slideNav").setAttribute("style",     " visibility: hidden")
        document.querySelector(".slideNav").setAttribute("style",     " z-index: -100")
       
})

document.querySelector(".slideNav__drawer--tag").addEventListener("click", function () {
        document.querySelector(".slideNav__drawer").setAttribute("style", "transform: translateX(0)")
        document.querySelector(".slideNav").setAttribute("style",     " visibility: visible")
        document.querySelector(".slideNav").setAttribute("style", "visibility: translateX(0)")
       ;
})

document.querySelector(".slideNav").addEventListener("click", function(){
        document.querySelector(".slideNav__drawer").setAttribute("style", "transform: translateX(106%)")
        document.querySelector(".slideNav").setAttribute("style",     " visibility: hidden")
        document.querySelector(".slideNav").setAttribute("style",     " z-index: -100")
       
})