import React from "react";
import demo from "../assets/demo.mp4";

const Features = () => {
  return (
    <div>
      <section id="features" className="p-16 text-center bg-yellow-50">
        <h2 className="text-3xl mb-4">Features</h2>
        <div className="flex flex-wrap justify-around">
          <div className="feature bg-gray-100 p-4 m-2 rounded shadow-md w-80">
            <h3 className="text-2xl mb-2">Feature 1</h3>
            <p>Description of feature 1.</p>
          </div>
          <div className="feature bg-gray-100 p-4 m-2 rounded shadow-md w-80">
            <h3 className="text-2xl mb-2">Feature 2</h3>
            <p>Description of feature 2.</p>
          </div>
          <div className="feature bg-gray-100 p-4 m-2 rounded shadow-md w-80">
            <h3 className="text-2xl mb-2">Feature 3</h3>
            <p>Description of feature 3.</p>
          </div>
        </div>
      </section>
      <section
        id="demo"
        className="flex flex-col items-center justify-center p-16 text-center"
      >
        <h2 className="text-3xl mb-4">Demo Video</h2>
        <div className="flex flex-row">
          <video width="250" controls className="mx-auto">
            <source src={demo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text-left max-w-md">
            <h3 className="text-2xl mb-4">Learn More About Our Features</h3>
            <p className="mb-4">
              This video showcases the key features of the GECTFMA app,
              including user-friendly navigation, efficient PTA management, and
              seamless communication tools.
            </p>

            <a href="#features" className="text-blue-500 underline">
              Discover all features
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
