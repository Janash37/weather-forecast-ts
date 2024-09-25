import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

import "./assets/App.css";
import { Home } from "./pages/Home";

const App: React.FC = () => {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
