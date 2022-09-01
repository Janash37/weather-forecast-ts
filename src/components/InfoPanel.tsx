import { FC, useEffect, useState } from "react";
import { CurrentWeatherCard } from "./CurrentWeatherCard";

interface Props {
  location: string;
}

interface CityInfo {
  name: string;
  country: string;
}

interface City {
  city: CityInfo;
}

export const InfoPanel: FC<Props> = ({ location }) => {
  const [weatherInfo, setWeatherInfo] = useState<City>({
    city: {
      name: "London",
      country: "gb",
    },
  });

  const getApiData = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=9e2f0e0a2078071c8b2824e8c62eb6ea`
    ).then((response) => {
      return response.json();
    });
    setWeatherInfo(response);
  };

  useEffect(() => {
    getApiData().then(() => {});
  }, [location]);

  if (!weatherInfo) {
    return (
      <div>
        <p>Loading weather data...</p>
      </div>
    );
  } else {
    return (
      <div id="info-panel">
        <div id="current-weather-panel">
          <CurrentWeatherCard weatherInfo={weatherInfo} />
          {/* <TwelveHrWeatherCard weatherInfo={weatherInfo} /> */}
        </div>
        <div id="eight-day-forecast">
          {/* <EightDayWeatherCard weatherInfo={weatherInfo} /> */}
        </div>
      </div>
    );
  }
};
