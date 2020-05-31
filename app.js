window.addEventListener('load', () => {
  var long;
  var lat;

  var tempDescription = document.querySelector('.temperature-description');
  var tempDegree = document.querySelector('.temperature-degree');
  var locationTimezone = document.querySelector('.location-timezone');

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {

      long = position.coords.longitude;
      lat = position.coords.latitude;

      var api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=7257ee045cd98983e9a61db0f4013f72&units=metric`;


      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {

          // console.log(data);
          var {temp} = data.main;
          var {description, icon} = data.weather[0];
          var {country} = data.sys;
          var name = data.name

          // set dom elements from api
          tempDegree.textContent = Math.round(temp);
          tempDescription.textContent = description.toUpperCase();
          locationTimezone.textContent = `${name} / ${country}`

        });
    });
  } 

  /*

  function setIcons(icon, iconID){

    var skycons = new skycons({color: "white"});
    var currentIcon = icon.


  }

  */



});

// api.openweathermap.org/data/2.5/weather?lat=53.4255728&lon=-6.3855496&appid=7257ee045cd98983e9a61db0f4013f72&units=metric

