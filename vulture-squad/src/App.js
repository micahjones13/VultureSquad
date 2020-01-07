import React from "react";
import "./App.css";
import Home from "./components/Home.js";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Vulture Squad</h1>
      <hr></hr>

      <Home />
    </div>
  );
}

export default App;
