import React from "react";

const Features = () => {
  return (
    <div>
      <section id="features" className="p-16 text-center">
        <h2 className="text-3xl mb-4">Features</h2>
        <div className="flex flex-wrap justify-around">
          <div className="feature bg-gray-100 p-4 m-2 rounded shadow-md w-80">
            <h3 className="text-2xl mb-2">Register Complaints</h3>
            <p>
              Heads of departments can easily register complaints about facility
              damages, ensuring quick reporting and resolution.
            </p>
          </div>
          <div className="feature bg-gray-100 p-4 m-2 rounded shadow-md w-80">
            <h3 className="text-2xl mb-2">Real-time Notification</h3>
            <p>
              Instant notifications sent to the respective incharge
              (plumbing/electrical) for immediate action on registered
              complaints.
            </p>
          </div>
          <div className="feature bg-gray-100 p-4 m-2 rounded shadow-md w-80">
            <h3 className="text-2xl mb-2">Approval Process</h3>
            <p>
              Incharges can approve or decline complaints after verification,
              ensuring only valid complaints are processed.
            </p>
          </div>
          <div className="feature bg-gray-100 p-4 m-2 rounded shadow-md w-80">
            <h3 className="text-2xl mb-2">Task Assignment</h3>
            <p>
              Sergeants can assign tasks to staff members and oversee the
              completion of repairs, ensuring accountability and efficiency.
            </p>
          </div>
          <div className="feature bg-gray-100 p-4 m-2 rounded shadow-md w-80">
            <h3 className="text-2xl mb-2">Completion Notification</h3>
            <p>
              Upon completion, sergeants can mark tasks as completed, and heads
              of departments will receive notifications about rectifications.
            </p>
          </div>
          <div className="feature bg-gray-100 p-4 m-2 rounded shadow-md w-80">
            <h3 className="text-2xl mb-2">Review and Rating</h3>
            <p>
              Heads of departments can provide feedback and ratings based on the
              quality of the repairs, ensuring continuous improvement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
