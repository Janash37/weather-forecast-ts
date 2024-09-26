import React from "react";
import InfoPanelProps from "../types/infoPanelProps";

export const InfoPanel: React.FC<InfoPanelProps> = ({ location }) => {
  const cityName = location.city.name;

  if (location.list.length === 0) {
    return (
      <div>
        <p>
          Search for a place name to find out what the weather forecast looks
          like over the next 12 hours
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

    const threeHrs = (location.list[1].main.temp - 273.15).toFixed(1);
    const threeHrdescription = location.list[1].weather[0].description;
    const threeHricon = location.list[1].weather[0].icon + ".png";
    const threeHrDt = location.list[1].dt_txt?.slice(
      location.list[1].dt_txt.length - 8
    );

    const sixHrs = (location.list[2].main.temp - 273.15).toFixed(1);
    const sixHrdescription = location.list[2].weather[0].description;
    const sixHricon = location.list[2].weather[0].icon + ".png";
    const sixHrDt = location.list[2].dt_txt?.slice(
      location.list[2].dt_txt.length - 8
    );

    const nineHrs = (location.list[3].main.temp - 273.15).toFixed(1);
    const nineHrdescription = location.list[3].weather[0].description;
    const nineHricon = location.list[3].weather[0].icon + ".png";
    const nineHrDt = location.list[3].dt_txt?.slice(
      location.list[3].dt_txt.length - 8
    );

    const twelveHrs = (location.list[4].main.temp - 273.15).toFixed(1);
    const twelveHrdescription = location.list[4].weather[0].description;
    const twelveHricon = location.list[4].weather[0].icon + ".png";
    const twelveHrDt = location.list[4].dt_txt?.slice(
      location.list[4].dt_txt.length - 8
    );

    return (
      <div id="info-panel">
        <div id="current-weather">
          <h2 id="city-name">Right now in {cityName}:</h2>
          <p id="current-temperature" style={{ padding: 0, margin: "10px 0" }}>
            {location.list[0].dt_txt?.slice(location.list[0].dt_txt.length - 8)}
          </p>
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
        <div id="long-term-forecast">
          <h3>The next 12 hours in {cityName}:</h3>
          <div id="long-term-container">
            <div className="threeHr-container">
              <h4>{threeHrDt}</h4>
              <img
                id="current-weather-icon"
                src={`http://openweathermap.org/img/wn/${threeHricon}`}
                alt="weather icon"
              />
              <div className="description-div">
                <p>
                  {threeHrs}&#176;C, {threeHrdescription}
                </p>
              </div>
            </div>
            <div className="threeHr-container">
              <h4>{sixHrDt}</h4>
              <img
                id="current-weather-icon"
                src={`http://openweathermap.org/img/wn/${sixHricon}`}
                alt="weather icon"
              />

              <div className="description-div">
                <p>
                  {sixHrs}&#176;C, {sixHrdescription}
                </p>
              </div>
            </div>
            <div className="threeHr-container">
              <h4>{nineHrDt}</h4>
              <img
                id="current-weather-icon"
                src={`http://openweathermap.org/img/wn/${nineHricon}`}
                alt="weather icon"
              />
              <div className="description-div">
                <p>
                  {nineHrs}&#176;C, {nineHrdescription}
                </p>
              </div>
            </div>
            <div className="threeHr-container">
              <h4>{twelveHrDt}</h4>
              <img
                id="current-weather-icon"
                src={`http://openweathermap.org/img/wn/${twelveHricon}`}
                alt="weather icon"
              />
              <div className="description-div">
                <p>
                  {twelveHrs}&#176;C, {twelveHrdescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
