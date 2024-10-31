import React from "react";
import demo from "../assets/demo.mp4";

const Demo = () => {
  return (
    <section
      id="demo"
      className="flex flex-col items-center justify-center p-16 text-center bg-yellow-50"
    >
      <h2 className="text-3xl mb-8">Demo Video</h2>
      <div className="flex flex-col lg:flex-row items-center lg:justify-center lg:items-center gap-10">
        <video width="250" controls className="mx-auto lg:mr-8 mb-8 lg:mb-0">
          <source src={demo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="text-left max-w-md">
          <h3 className="text-2xl mb-4">Learn More About Our Features</h3>
          <p className="mb-4">
            This video showcases the key features of the GECTFMA app, including
            user-friendly navigation, efficient PTA management, and seamless
            communication tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Demo;
