import { FC, useState } from "react";

interface Main {
  temp: number;
  temp_max: number;
  temp_min: number;
  humidity: number;
}

interface Wind {
  speed: number;
}

interface Weather {
  description: string;
  icon: string;
  id: number;
}

interface ThreeHrObject {
  main: Main;
  weather: Weather[];
  wind: Wind;
}

interface City {
  name: string;
  country: string;
  coord?: object;
}

interface WeatherObject {
  city: City;
  list: ThreeHrObject[];
}

interface Props {
  weatherInfo: WeatherObject;
}

export const CurrentWeatherCard: React.FC<Props> = ({ weatherInfo }) => {
  console.log(weatherInfo);

  const [info, setInfo] = useState<string | null>(null);

  const cityName = weatherInfo.city.name;
  const temp = (weatherInfo.list[0].main.temp - 273.15).toFixed(1);
  const max = (weatherInfo.list[0].main.temp_max - 273.15).toFixed(1);
  const min = (weatherInfo.list[0].main.temp_min - 273.15).toFixed(1);
  // const icon = weatherInfo.list[0].weather[0].icon;
  const description = weatherInfo.list[0].weather[0].description;
  const wind = weatherInfo.list[0].wind.speed;
  const humidity = weatherInfo.list[0].main.humidity;

  if (info === null) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <div id="current-weather">
        <h2 id="city-name">{cityName}</h2>
        {/* <img
            id="current-weather-icon"
            src={`https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Weather-few-clouds.svg/768px-Weather-few-clouds.svg.png`}
            alt="little icon showing weather"
        /> */}
        <h2 id="current-temperature">{temp}&#176;C</h2>
        <h3 id="current-icon-description">{description}</h3>
        <div>
          <p>Max temp: {max}&#176;C</p>
          <p>Min temp: {min}&#176;C</p>
        </div>
        <div>
          <p id="current-wind">Wind: {wind}mph</p>
          <p id="current-humidity">Humidity: {humidity}%</p>
        </div>
      </div>
    );
  }
};
