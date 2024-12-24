const FullAboutPage = ({ image }) => {
  return (
    <div>

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4" style={{ backgroundColor: "#f3f8fd" }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-black">
            Sourav Rajput <br />
            <span className="text-gray-500 text-sm">Software Developer:- Ruby on Rails | Node.js | React.js </span>
          </h1>
        </div>
      </section>

      {/* Portfolio Details */}
      <section className="py-12">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2">
            <img
              src={image}
              alt="Project"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Right Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-600">Information</h3>
            <ul className="mt-4 space-y-2 text-black">
                <li>
                    <strong>Date of Birth:</strong> 14/July/19998
                </li>
                <li>
                    <strong>Working Experience:</strong> 2.5 Years as Software Developer
                </li>
                <li>
                    <strong>Category:</strong> Branding, Design
                </li>
                <li>
                    <strong>Category:</strong> Branding, Design
                </li>
                <li>
                    <strong>Category:</strong> Branding, Design
                </li>
                <li>
                    <strong>Category:</strong> Branding, Design
                </li>
                <li>
                    <strong>Category:</strong> Branding, Design
                </li>
                <li>
                    <strong>Category:</strong> Branding, Design
                </li>
                <li>
                    <strong>Category:</strong> Branding, Design
                </li>
                <li>
                    <strong>Category:</strong> Branding, Design
                </li>
                <li>
                    <strong>Category:</strong> Branding, Design
                </li>
                <li>
                    <strong>Date:</strong> June 21, 2024
                </li>
                <li>
                    <strong>Project's</strong> bVokal, Acuity Coaching, Dacso Lab, Ginni-Biz
                </li>
                <li>
                    <strong>Location:</strong> Uttam Nagar, New Delhi, India
                </li>
            </ul>
            <a
              href="#"
              className="mt-6 block bg-blue-600 text-white text-center py-3 rounded-full hover:bg-blue-700"
            >
              Download My Resume
            </a>
          </div>
        </div>
        <div>
            <h2 className="text-2xl font-bold text-blue-600 mt-6">
                Profile
            </h2>
            <ul className="list-disc pl-6 mt-4 text-gray-600">
                <li>2.5 Years of relevant experience as Ruby on Rails Software Developer.</li>
                <li>Experience in developing and maintining web application using Ruby on Rails.</li>
                <li>Developed, integrated and consumed RESTFUL Api's for various application functionalities.</li>
                <li>Implemented admin dashboards and user authentication features and devise gem, JWT gem, rpush gem, geocoder gem,etc.</li>
                <li>Implemented admin dashboards and user authentication features and devise gem, JWT gem, rpush gem, geocoder gem,etc.</li>
                <li>Implemented admin dashboards and user authentication features and devise gem, JWT gem, rpush gem, geocoder gem,etc.</li>
                <li>Implemented admin dashboards and user authentication features and devise gem, JWT gem, rpush gem, geocoder gem,etc.</li>
            </ul>
        </div>
      </section>

      {/* Additional Information */}
      <section className="bg-white">
        <div className="container mx-auto px-4">
          {/* Marketing Solutions */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-blue-600">
              Work Experience & Project's
            </h3>
            <ul className="list-disc pl-6 mt-4 text-gray-600">
              <li>Consectetur adipiscing elit in voluptate velit.</li>
              <li>Mattis vulputate cupidatat.</li>
              <li>Vulputate enim nulla aliquet porttitor odio pellentesque.</li>
              <li>Ligula ullamcorper malesuada proin.</li>
            </ul>
            <p className="mt-4 text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </div>

          {/* Branding Solutions */}
          <div>
            <h3 className="text-xl font-bold text-blue-600">
              02. Branding Solutions
            </h3>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              enim lobortis scelerisque fermentum. Neque sodales ut etiam sit
              amet.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FullAboutPage;
