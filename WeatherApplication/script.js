
    function fetchWeather(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
           + city+"&units=metric&appid=78171e6da2d7341a20b5f0d7a5b14d5e"
        )
        .then((response) => response.json())
        .then((data) => 
        this.displayWeather(data))
    }

    function displayWeather(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in "+ name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/w/"+icon+".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
        document.querySelector(".windspeed").innerText = "Wind Speed : " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('http://source.unsplash.com/1600x900/?" + name + "')"
    }
    
    function search() {
        this.fetchWeather((document.querySelector(".searchbar").value));
    }

    document.querySelector("button").addEventListener('click',function () {
        search();
    })

    document.querySelector(".searchbar").addEventListener('keyup',function (event) {
        if(event.key == 'Enter'){
            search();
        } 
    })
    
   
      
