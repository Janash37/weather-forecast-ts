import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Title } from "./components/Title";
import { InfoPanel } from "./components/InfoPanel";

interface AppContextInterface {
  location: string;
}

const AppContext = createContext<AppContextInterface | null>(null);

function App() {
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

  const contextValue: AppContextInterface = {
    location: location,
  };

  return (
    <AppContext.Provider value={contextValue}>
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
            <Route path={`/${location}`} element={<InfoPanel />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
