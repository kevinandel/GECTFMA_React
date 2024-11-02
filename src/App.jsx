import React from "react";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Features from "./components/Features";
import Guide from "./components/Guide";
import About from "./components/About";
import Support from "./components/Support";
import Demo from "./components/Demo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Features />
      <Demo />
      <Guide />
      <Support />
    </div>
  );
}

export default App;
