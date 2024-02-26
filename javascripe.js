
const apiaKey = "f1ecf8dd7485a5a1d5cda12dbc949b59";
const apiUral = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input ");
const searchBtn = document.querySelector(".search button ");
const wearherIcon = document.querySelector(".wearher-icon");

async function checkWeather(city){
    const response = await fetch(`${apiUral}` + city + `&appid=${apiaKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "None";
    }else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds") {
            wearherIcon.src = "Wrather_Img/3767036.png"; 
        }
        else if(data.weather[0].main == "Clear"){
            wearherIcon.src = "Wrather_Img/sun.png"; 
        }
        else if(data.weather[0].main == "Rain"){
            wearherIcon.src = "Wrather_Img/weather4"; 
        }
        else if(data.weather[0].main == "Drizzle"){
            wearherIcon.src = "Wrather_Img/weather3.png"; 
        }
        else if(data.weather[0].main == "Mist"){
            wearherIcon.src = "Wrather_Img/weather4.webp"; 
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
   
}
searchBtn.addEventListener("click", ()=>{

  checkWeather(searchBox.value);  

})

