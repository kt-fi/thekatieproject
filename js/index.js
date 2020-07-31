let width = window.innerWidth;

if(width < 500){
        document.querySelector('.aboutMe__container').setAttribute("data-aos", "fade-in-pink")
        document.querySelector('.aboutMe__container').setAttribute("data-aos-duration", "500")
        document.querySelector(".section__cv").setAttribute("data-aos-duration", "500")
        document.querySelector(".section__cv").setAttribute("data-aos", "fade-in-blue")
}