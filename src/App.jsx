import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Guide from "./components/Guide";
import About from "./components/About";
import Support from "./components/Support";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Features />
      <Guide />
      <About />
      <Support />
    </div>
  );
}

export default App;
