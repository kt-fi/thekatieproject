let width = window.innerWidth;

if(width < 500){
        document.querySelector('.aboutMe__container').setAttribute("data-aos", "fade-in-pink")
        document.querySelector('.aboutMe__container').setAttribute("data-aos-duration", "500")
        document.querySelector(".section__cv").setAttribute("data-aos-duration", "500")
        document.querySelector(".section__cv").setAttribute("data-aos", "fade-in-blue")
}



document.querySelector(".slideNav__close").addEventListener("click", function(){
        document.querySelector(".slideNav__drawer").setAttribute("style", "transform: translateX(100%)")
        document.querySelector(".slideNav").setAttribute("style",     "background-color: rgba(0, 0, 0, 0)")
        // document.querySelector(".slideNav").setAttribute("style", "z-index: -1;")
})

document.querySelector(".slideNav__drawer--tag").addEventListener("click", function () {
        document.querySelector(".slideNav__drawer").setAttribute("style", "transform: translateX(0)")
        document.querySelector(".slideNav").setAttribute("style",     " background-color: rgba(0, 0, 0, 0.411)")
       ;
})