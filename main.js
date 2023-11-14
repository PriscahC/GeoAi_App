//get all elements from DOM
const app = document.querySelector('.weather-app'); 
const temp = document.querySelector('.temp'); 
const dateOutput = document.querySelector('.date'); 
const timeOutput = document.querySelector('.time'); 
const conditionOutput = document.querySelector('.condition'); 
const nameOutput = document.querySelector('.name'); 
const icon = document.querySelector('.icon'); 
const cloudOutput = document.querySelector('.cloud'); 
const humidityOutput = document.querySelector('.humidity'); 
const windOutput = document.querySelector('.wind'); 
const form = document.getElementById('locationInput');
const search = document.querySelector('.search'); 
const btn = document.querySelector('.submit'); 
const cities = document.querySelectorAll('.city'); 

// Default city when page loads
let cityInput = "Turkana";

// Add onclick event to each city in the panel
cities.forEach((city) => {
    city.addEventListener('click', (e) => {
        // Change from default to clicked
        cityInput = e.target.innerHTML;
        // function that fetches and displays weather API data
        fetchWeatherData();
        // animation to fade out the app
        // app.style.opacity = "0";
    });
});

// add submit event to the form
form.addEventListener('submit', (e) => {
    // alert for empty entry
    if(search.value.length == 0) {
        alert('Please type in a city name');
    } else {
        // default to new input
        cityInput = search.value;
        // fetch and display data from API
        fetchWeatherData();
        // clear input field
        search.value = "";
        // fade out app
        // app.style.opacity = "0";
    }

    // prevent default form behavior
    e.preventDefault();
});

// function for days of the week
function dayOfTheWeek(day, month, year) {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    return weekday[new Date(`${day}/${month}/${year}`).getDay()];
};

// Fetch and display data from weather API
function fetchWeatherData() {
    // fetch data and dynamically add city name with templete literals
    // Get an API key from https://www.weatherapi.com/
    fetch(`http://api.weatherapi.com/v1/current.json?${key} &q=${cityInput}&aqi=no`)

    // convert json data to JS object
    .then(response => response.json())
    .then(data => {
        // console log to test data
        console.log(data);

        // add temperature and weather
        temp.innerHTML = data.current.temp_c + "&deg;";
        conditionOutput.innerHTML = data.current.condition.text;

        // get date and time, and extract variables
        const date = data.location.localtime;
        const y = parseInt(date.substr(0, 4));
        const m = parseInt(date.substr(5, 2));
        const d = parseInt(date.substr(8, 2));
        const time = date.substr(11);

        // new date format
        dateOutput.innerHTML = `${dayOfTheWeek(d, m, y)} ${d}, ${m} ${y}`;

    timeOutput.innerHTML = time;
    // add city name to page
    nameOutput.innerHTML = data.location.name;
    // corresponding icon
    const iconId = data.current.condition.icon.substr(
        "//cdn.weatherapi.com/weather/64x64/".length
    );
    // reformat to folder and add to page
    icon.src = "./icons/" + iconId;

    // add weather details to page
    cloudOutput.innerHTML = data.current.cloud + "%";
    humidityOutput.innerHTML = data.current.humidity + "%";
    windOutput.innerHTML = data.current.wind_kph + "km/h";

    // set default time
    let timeOfDay = "day";
    // unique id for weather conditions
    const code = data.current.condition.code;

    // change to night
    if(!data.current.is_day){
        timeOfDay = "night";
    }

})

    // if city doesn't exist
    .catch(()=>{
        alert('City not found, try again');
        // app.style.opacity = "1";
    });
}

// call the function
fetchWeatherData();

// fade in the page
// app.style.opacity = "1";






