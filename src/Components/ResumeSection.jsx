import React from "react";

const ResumeSection = () => {
  return (
    <div className="text-gray-900 py-16 my-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">My Resume</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute inset-0 left-1/2 w-1 bg-gray-300 transform -translate-x-1/2"></div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {/* Item 1 */}
          <div className="relative flex items-start">
            <div className="flex-1 pr-8 text-right">
              <h3 className="text-lg font-semibold">UI/UX Designer</h3>
              <p className="text-gray-600">Google INC | New York</p>
              <span className="text-sm bg-blue-200 text-blue-900 px-3 py-1 rounded-full">2011 - 2013</span>
              
            </div>
            <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full absolute left-1/2 transform -translate-x-1/2 z-10">
              <span>•</span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative flex items-start">
            <div className="flex-1 pl-8">
              <h3 className="text-lg font-semibold">Specialization Course</h3>
              <p className="text-gray-600">Stanford University | New York</p>
              <span className="text-sm bg-blue-200 text-blue-900 px-3 py-1 rounded-full">2017 - 2018</span>
              
            </div>
            <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full absolute left-1/2 transform -translate-x-1/2 z-10">
              <span>•</span>
            </div>
          </div>

          {/* Item 3 */}
          <div className="relative flex items-start">
            <div className="flex-1 pr-8 text-right">
              <h3 className="text-lg font-semibold">Web Designer</h3>
              <p className="text-gray-600">Facebook INC | New York</p>
              <span className="text-sm bg-blue-200 text-blue-900 px-3 py-1 rounded-full">2015 - 2017</span>
              
            </div>
            <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full absolute left-1/2 transform -translate-x-1/2 z-10">
              <span>•</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
