import React from "react";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Features from "./components//features/Features";
import Guide from "./components/guide/Guide";
import About from "./components/about/About";
import Support from "./components/support/Support";
import Demo from "./components/demo/Demo";

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
