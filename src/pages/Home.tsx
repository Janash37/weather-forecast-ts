import React, { useEffect, useState } from "react";
import { Button, Input } from "antd";

import { InfoPanel } from "../components/InfoPanel";
import { Title } from "../components/Title";
import City from "../types/city";

export const Home: React.FC = () => {
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    const comma = /,/;
    const withCommasReplaced = input.replace(comma, "%2C");
    const space = /\s/g;
    setQuery(withCommasReplaced.replace(space, "+"));
    event.preventDefault();
    setInput("");
  };

  const getApiData = async () => {
    try {
      await fetch(
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
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (query !== null && error === false) {
      getApiData();
    }
  }, [query, error, location]);

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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "40px auto",
              width: "50%",
            }}
          >
            <Input
              type="text"
              value={input}
              placeholder="Input city name, e.g. (London, gb)"
              onChange={handleChange}
              style={{ margin: "0 10px" }}
            />
            <Button
              type="primary"
              htmlType="submit"
              style={{ margin: "0 10px" }}
            >
              Search
            </Button>
          </div>
          <InfoPanel location={location} />
        </form>
      </div>
    );
  }
};
