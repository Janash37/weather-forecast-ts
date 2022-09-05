import { FC, useEffect, useState } from "react";
import { CurrentWeatherCard } from "./CurrentWeatherCard";

interface Props {
  location: {
    city: CityInfo;
    list: WeatherInfo[];
  };
}

interface CityInfo {
  name: string;
  country: string;
}

interface WeatherInfo {
  main: Main;
  weather: Weather[];
  wind: Wind;
}

interface Main {
  temp: number;
  temp_max: number;
  temp_min: number;
  humidity: number;
}

interface Weather {
  description: string;
  icon: string;
  id: number;
}

interface Wind {
  speed: number;
}

export const InfoPanel: FC<Props> = ({ location }) => {
  const cityName = location.city.name;

  if (location.list.length === 0) {
    return (
      <div>
        <p>
          Search for a place name to find out what the 3-hour weather forecast
          is
        </p>
      </div>
    );
  } else {
    const temp = (location.list[0].main.temp - 273.15).toFixed(1);
    const max = (location.list[0].main.temp_max - 273.15).toFixed(1);
    const min = (location.list[0].main.temp_min - 273.15).toFixed(1);
    const icon = location.list[0].weather[0].icon + ".png";
    const description = location.list[0].weather[0].description;
    const wind = location.list[0].wind.speed;
    const humidity = location.list[0].main.humidity;

    return (
      <div id="info-panel">
        <div id="current-weather">
          <h2 id="city-name">Right now in {cityName}:</h2>
          <div id="description-div">
            <p id="current-temperature">{temp}&#176;C</p>
            <p id="current-icon-description">{description}</p>
            <img
              id="current-weather-icon"
              src={`http://openweathermap.org/img/wn/${icon}`}
              alt="weather icon"
            />
          </div>
          <div>
            <p id="current-wind">Wind: {wind}mph</p>
            <p id="current-humidity">Humidity: {humidity}%</p>
          </div>
          <div>
            <h3>Over the next 3 hours:</h3>
            <p>Max temp: {max}&#176;C</p>
            <p>Min temp: {min}&#176;C</p>
          </div>
        </div>
      </div>
    );
  }
};
