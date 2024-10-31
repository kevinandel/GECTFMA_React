import React from "react";

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
          Effortlessly manage and connect with your PTA through our app.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="assets/gectfma.apk" download="app-release.apk">
            <button className="px-6 py-3 bg-blue-500 text-white rounded">
              Download Now
            </button>
          </a>
          <button
            onClick={handleWatchDemoClick}
            className="px-6 py-3 bg-yellow-500 text-white rounded"
          >
            Watch Demo
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
