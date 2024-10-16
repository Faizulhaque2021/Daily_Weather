const API_KEY = `779ac534c02f4d9987a110726241610`;

 // weather search 
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.weatherapi.com/v1?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text;
}


const displayTemperature = temperature => {
    console.log(temperature);
    setInnerText('city', temperature.name);
    setInnerText('temp', temperature.main.temp);
    setInnerText('weather', temperature.weather[0].main);

    // weather icon settings 
    const url = ` http://cdn.weatherapi.com/weather/64x64/day/${temperature.weather[0].icon}@116.png`;
    const imgIcon = document.getElementById('image-icon');
    imgIcon.setAttribute('src', url);
}
