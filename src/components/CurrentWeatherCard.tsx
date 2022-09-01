import { FC } from "react";

interface City {
  name: string;
  country: string;
  coord?: object;
}

interface WeatherObject {
  city: City;
  list?: object;
}

interface Props {
  weatherInfo: WeatherObject;
}

export const CurrentWeatherCard: FC<Props> = ({ weatherInfo }) => {
  const cityName = weatherInfo.city.name;
  //   const temp = (weatherInfo.list[0].main.temp - 273.15).toFixed(1);
  //   const icon = weatherInfo.list[0].weather[0].icon;
  //   const description = weatherInfo.list[0].weather[0].description;
  //   const wind = weatherInfo.list[0].wind.speed;
  //   const humidity = weatherInfo.list[0].main.humidity;
  //   const visibility = weatherInfo.list[0].visibility / 1000;

  return (
    <div id="current-weather">
      <h2 id="city-name">{cityName}</h2>
      {/* <div id="current-weather-child1">
        <p id="current-wind">Wind: {wind}mph</p>
         <p id="current-humidity">Humidity: {humidity}%</p>
         <p id="current-visibility">Visibility: {visibility}km</p>
       </div>
       <div id="current-weather-child2">
         <div id="current-temp-and-icon">
           <img
            id="current-weather-icon"
            src={`https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Weather-few-clouds.svg/768px-Weather-few-clouds.svg.png`}
            alt="little icon showing weather"
          />
          <h3 id="current-temperature">{temp}&#176;C</h3>
        </div>
        <p id="current-icon-description">{description}</p>
      </div> */}
    </div>
  );
};
