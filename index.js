//SWITCH GLOBAL LANGUAGE -------------------------



// GET LOCATION to set language ----------------------------

(async()=>{ 
      
    try{
       const response = await fetch("https://radiant-woodland-87160.herokuapp.com/geoLocation")
        const data = await response.json()
        console.log(data)
        
    if(data === 'Spain' || data === 'Venezuela' || data === 'Mexico' || data === 'Argentina'){
        $('[lang="en"]').hide();
        $('[lang="es"]').show();
    }
    }catch(err){}
    

})()


// MANUAL LANGUAGE SELECTOR ----------------------------------

$('[lang="es"]').hide()

$('.en').click( () => {
    $('[lang="en"]').show();
    $('[lang="es"]').hide();
    
})

$('.es').click( () => {
    $('[lang="es"]').show();
    $('[lang="en"]').hide();
    
})

// DISABLE/ENABLE SEND BUTTON --------------------

const button = document.querySelector('.send');
    
button.disabled = true;

const onChangeHandler = (event) => {

const name = document.getElementById("name")
const email = document.getElementById("email")
const subject = document.getElementById("subject")

if(name.value == "" || email.value == "" || !subject.minlength){
    button.disabled = true;
}

if(name.value && email.value && subject.value){
    
    button.disabled = false;
}

}    



//SEND MESSAGE TO BACKEND --------------------

    document.getElementById("contact__form").addEventListener("submit", (e)=>{
        e.preventDefault()
        sendForm();
        })


 async function sendForm(){


            
        try{
          await fetch("https://sheltered-caverns-08486.herokuapp.com/sendMail",{
            // const res = await fetch("https://radiant-woodland-87160.herokuapp.com/sendForm", {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
            // name : document.getElementById("name").value,
            title : document.getElementById("email").value,
            msg : document.getElementById("subject").value
            })}).then(confirmSent())
            
            
        }
        
        catch(err){
            console.log(err)
            $(".backdrop").css("z-index", "99")
            $(".modal").css("z-index", "100")
            $('.modal__message').text("MESSAGE NOT SENT")
            }      
        }
//CLOSE MODAL ------------------------
            $('.backdrop').click(()=> {
            $('.backdrop').css("z-index", "-100")
            $('.modal').css("z-index", "-100")
        })

        $('.modal__button--btn').click(()=> {
            $('.backdrop').css("z-index", "-100")
            $('.modal').css("z-index", "-100")
        })

    

// NAV MOBILE BUTTON -----------------------------------

var navOpen = false;

function confirmSent() {
    $("#contact__form").trigger('reset');

    $(".backdrop").css("z-index", "99");
    $(".modal").css("z-index", "100");
    $('.modal__message').text("MESSAGE SENT SUCCESFULY");
}

function openNav() {
    navOpen = true;

    $(".mobile__nav__button").css("background-color", "white")
    $(".mobile__nav__burger").css("animation", "navGone 0.2s forwards")
   
    $(".mobile__nav__burger__before").css("animation", "navX2 0.5s forwards")
    $(".mobile__nav__burger__after").css("animation", "navX 0.5s forwards")
    $(".nav__box--mob").css("animation", "linksVisibilityOn 2s .5s forwards")
    $(".mobile__nav__button__before").css("animation", "navGrow 1.0s forwards")

}

function closeNav() {
    navOpen = false;

    $(".mobile__nav__button").css("background-color", "#486685")
    $(".mobile__nav__burger").css("animation", "navGoneRev 2s forwards")
    $(".mobile__nav__burger").css("background-color", "black")
    $(".mobile__nav__burger__before").css("animation", "navX2Rev 0.5s forwards")
    $(".mobile__nav__burger__after").css("animation", "navXRev 0.5s forwards")
    $(".nav__box--mob").css("animation", "linksVisibilityOff .5s forwards")
    $(".mobile__nav__button__before").css("animation", "navShrink 1.0s forwards")
}


$(".mobile__nav").click(function () {
    if (navOpen == false) {
        openNav();
    } else if (navOpen == true) {
        closeNav();
    }
})

//CLOSE ON SELECTION OF SECTION --------

$('.link__anim--mob').click(()=>{
    closeNav()})

// COPYRIGHT YEAR  ---------------

let date = new Date().getFullYear();
$(".year").html(date)

