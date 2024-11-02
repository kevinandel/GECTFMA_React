import React from "react";
import "./Home.css"

const Home = () => {
  const handleWatchDemoClick = () => {
    const demoSection = document.getElementById("demo");
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" });
      const video = demoSection.querySelector("video");
      if (video) {
        video.play();
      }
    }
  };

  return (
    <div>
      <section id="home" className="p-16 text-center">
        <h1 className="text-4xl mb-4">Welcome to GECTFMA App</h1>
        <p className="mb-8">
          Effortlessly manage your complaints through our app.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/gectfma.apk" download="gectfma.apk">
            <button className="px-6 py-3 text-white rounded download-button">
              Download Now
            </button>
          </a>
          <button
            onClick={handleWatchDemoClick}
            className="px-6 py-3 rounded demo-button"
          >
            Watch Demo
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
