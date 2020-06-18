
// VIDEO / PIC TOGGLE

function removeVideo() {
    $(".bg-video__content").hide()
    $(".header").css("background-color", "transparent" ).css("background-image", "linear-gradient(rgba(89, 241, 255, 0.39), rgba(89, 241, 255, 0.39)), url(img/sansilvestrehead.jpg)").css("background-size", "cover")
    $(".mobile").show()  // BUTTON VISIBILITY ON
}

function addVideo() {
    $(".bg-video__content").show()
    $(".header").css({"background-color": ""},).css({"background-image": ""}).css({"background-size": ""})
     $(".mobile").hide() // BUTTON VISIBILITY OFF
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
            closeNav();
    }
})


// NAV MOBILE BUTTON

var navOpen = false;

function openNav() {
navOpen = true;

$(".mobile__nav__button").css("background-color", "white" )
    $(".mobile__nav__burger").css("animation", "navGone 0.2s forwards" )
     $(".mobile__nav__burger__before").css("animation", "navX2 0.5s forwards" )
    $(".mobile__nav__burger__after").css("animation", "navX 0.5s forwards" )
    $(".nav__box--mob").css("animation", "linksVisibilityOn 2s .5s forwards")
    $(".mobile__nav__button__before").css("animation", "navGrow 1.0s forwards")

}

function closeNav() {
    navOpen = false;

    $(".mobile__nav__button").css("background-color", "rgb(59, 59, 59)" )
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




// COPYRIGHT YEAR

let date = new Date().getFullYear();
$(".year").html(date)











// GEOLOCATION & WEATHER

// GET LOCATION
   
async function userLocation(){
    try {
           const result = await fetch(`https://cors-anywhere.herokuapp.com/https://api.ipgeolocation.io/ipgeo?apiKey=097fe594b71b43329909ca30a9248d60`);
    const data = await result.json();
    console.log(data)
    return data;
} catch(err){
    console.log(err)
}
}

var thelocation;
userLocation().then(result => { const thelocation = result.country_capital;
    const long = result.longitude;
    const latt = result.latitude;



async function getLonLatt(){
    try{
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com//api/location/search/?lattlong=${latt},${long}`);
        const data = await result.json();
        console.log(data)
        return data;
    } catch (err){
        console.log(err)
    }
}
getLonLatt().then(result => { 
   const woeid = result[0].woeid;
   const endLoc = woeid;
   const locName = result[0].title;

// GET WEATHER


    async function getWeatherAW(woeid){
        try {
              const result =  await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`)
            const data = await result.json();
            console.log(data)
            return data;
        } catch(error) {
            console.log(error)
        }
        
        }
        let dataCity;
        getWeatherAW(endLoc).then(result => {dataCity = result;
        const weatherNow = Math.floor(dataCity.consolidated_weather[0].max_temp);
         
        if(weatherNow < 25){
            document.querySelector(".weather__today").innerHTML = "Todays current temperature is " + weatherNow + "&#8304;" + " nice weather for running in " + locName;
        }else{
            document.querySelector(".weather__today").innerHTML = "Todays current temperature is " + weatherNow +  "&#8304;"+" its too hot to run right now, drink water";
            document.querySelector(".weather").style.backgroundColor ="orange"
            }
        })
        

})

})
