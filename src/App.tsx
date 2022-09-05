import React, { useState, useEffect } from "react";
import "./App.css";
import { Title } from "./components/Title";
import { InfoPanel } from "./components/InfoPanel";

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

interface WeatherInfo {
  main: Main;
  weather: Weather[];
  wind: Wind;
}

interface CityInfo {
  name: string;
  country: string;
}

interface City {
  city: CityInfo;
  list: WeatherInfo[];
}

export const App = () => {
  const [query, setQuery] = useState<string | null>(null);
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const [location, setLocation] = useState<City>({
    city: {
      name: "London",
      country: "gb",
    },
    list: [],
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const comma = /,/;
    const withCommasReplaced = input.replace(comma, "%2C");
    const space = /\s/g;
    setQuery(withCommasReplaced.replace(space, "+"));
    event.preventDefault();
    setInput("");
  };

  const getApiData = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=9e2f0e0a2078071c8b2824e8c62eb6ea`
    )
      .then((response) => {
        const responseObj = response.json();
        return responseObj;
      })
      .then((responseObj) => {
        setLocation(responseObj);
      })
      .catch((err) => {
        setError(true);
      });
  };

  useEffect(() => {
    if (query !== null && error === false) {
      getApiData();
    }
  }, [query]);

  if (error) {
    return (
      <div className="App">
        <Title />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            placeholder="Input city name, e.g. (London, gb)"
            onChange={handleChange}
          />
          <button type="submit">Search</button>
          <p>Oops! There's been an error. Please try re-typing your city.</p>
          <p>
            If that still doesn't work, please try another city or town nearby!
          </p>
        </form>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Title />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            placeholder="Input city name, e.g. (London, gb)"
            onChange={handleChange}
          />
          <button type="submit">Search</button>

          <InfoPanel location={location} />
        </form>
      </div>
    );
  }
};
