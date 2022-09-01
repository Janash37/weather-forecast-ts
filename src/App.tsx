import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Title } from "./components/Title";
import { InfoPanel } from "./components/InfoPanel";

export const App = () => {
  const [location, setLocation] = useState<string>("London%2C+gb");
  const [input, setInput] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const comma = /,/;
    const withCommasReplaced = input.replace(comma, "%2C");
    const space = /\s/g;
    setLocation(withCommasReplaced.replace(space, "+"));
    event.preventDefault();
    setInput("");
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Title />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            placeholder="Input city name, e.g. (London, gb)"
            onChange={handleChange}
          />
          <Link id="location-link" to={`/${location}`}>
            <button>Search</button>
          </Link>
        </form>
        <Routes>
          <Route
            path={`/${location}`}
            element={<InfoPanel location={location} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
