import React from "react";
import "./Features.css"

const Features = () => {
  return (
    <div>
      <section id="features" className="p-16 text-center">
        <h2 className="text-3xl mb-4">
          <b>Features</b>
        </h2>
        <div className="flex flex-wrap justify-around">
          <div className="featureone p-4 m-2 rounded-xl shadow-md w-80">
            <h3 className="text-2xl mb-2">Register Complaints</h3>
            <p>
              Department heads can swiftly report facility issues for prompt
              resolution.
            </p>
          </div>
          <div className="featuretwo p-4 m-2 rounded-xl  shadow-md w-80">
            <h3 className="text-2xl mb-2">Real-time Notification</h3>
            <p>
              Instant notifications alert the responsible in-charge for swift
              action on registered complaints.
            </p>
          </div>
          <div className="featureone p-4 m-2 rounded-xl  shadow-md w-80">
            <h3 className="text-2xl mb-2">Approval Process</h3>
            <p>
              Incharges can approve or reject complaints after verification,
              ensuring only valid ones are processed.
            </p>
          </div>
          <div className="featuretwo p-4 m-2 rounded-xl  shadow-md w-80">
            <h3 className="text-2xl mb-2">Task Assignment</h3>
            <p>
              Sergeants can assign tasks to staff and oversee repairs, ensuring
              accountability and efficiency.
            </p>
          </div>
          <div className="featureone p-4 m-2 rounded-xl  shadow-md w-80">
            <h3 className="text-2xl mb-2">Completion Notification</h3>
            <p>
              Sergeants can mark tasks as completed, and department heads will
              be notified of the rectifications.
            </p>
          </div>
          <div className="featuretwo p-4 m-2 rounded-xl  shadow-md w-80">
            <h3 className="text-2xl mb-2">Review and Rating</h3>
            <p>
              Department heads can give feedback and ratings on repair quality,
              ensuring continuous improvement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
