import React from "react";
import "./Guide.css";

const Guide = () => {
  return (
    <div>
      <section id="guide" className="p-16 text-center">
        <h2 className="text-3xl mb-4">
          <b>How It Works</b>
        </h2>
        <div className="flex flex-wrap justify-around guide-container">
          <div className="guideone p-4 m-2 rounded-xl shadow-md w-80">
            <div className="step-container">
              <span className="step-circle-one">1</span>
              <p>
                Heads of departments register complaints about facility damages
                through the GECTFMA app.
              </p>
            </div>
          </div>
          <div className="guidetwo p-4 m-2 rounded-xl shadow-md w-80">
            <div className="step-container">
              <span className="step-circle-two">2</span>
              <p>
                Instant notifications are sent to the respective in-charge for
                immediate action on the registered complaints.
              </p>
            </div>
          </div>
          <div className="guideone p-4 m-2 rounded-xl shadow-md w-80">
            <div className="step-container">
              <span className="step-circle-one">3</span>
              <p>
                In-charges verify the complaints and approve or decline them to
                ensure only valid complaints are processed.
              </p>
            </div>
          </div>
          <div className="guidetwo p-4 m-2 rounded-xl shadow-md w-80">
            <div className="step-container">
              <span className="step-circle-two">4</span>
              <p>
                Approved complaints are assigned to sergeants who then delegate
                tasks to staff members for repair and maintenance.
              </p>
            </div>
          </div>
          <div className="guideone p-4 m-2 rounded-xl shadow-md w-80">
            <div className="step-container">
              <span className="step-circle-one">5</span>
              <p>
                Sergeants oversee the completion of repairs, ensuring
                accountability and efficiency throughout the process.
              </p>
            </div>
          </div>
          <div className="guidetwo p-4 m-2 rounded-xl shadow-md w-80">
            <div className="step-container">
              <span className="step-circle-two">6</span>
              <p>
                Upon completion, sergeants mark tasks as completed, and heads of
                departments receive notifications about rectifications.
              </p>
            </div>
          </div>
          <div className="guideone p-4 m-2 rounded-xl shadow-md w-80">
            <div className="step-container">
              <span className="step-circle-one">7</span>
              <p>
                Heads of departments provide feedback and ratings based on the
                quality of repairs, ensuring continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guide;
