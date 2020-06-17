function getActivities(res) {
    
    
    
    const activities_link = "https://api.openweathermap.org/data/2.5/weather?q=Madrid,es&APPID=178e2891cb3385aa7cefb78886e736ca"
  
    fetch(activities_link)
      .then((res) => console.log(res.json()))
  }
  

  getActivities()