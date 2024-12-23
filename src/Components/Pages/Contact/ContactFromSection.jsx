const ContactFormSection = () => {
  return (
    <div className="text-gray-900 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-purple-900 mb-4">Have a Project in Mind?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 border border-gray-200">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <input
            type="text"
            placeholder="Enter your name"
            className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          {/* Company */}
          <input
            type="text"
            placeholder="Company (Optional)"
            className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          {/* Email */}
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone number"
            className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          {/* Project Description */}
          <textarea
            placeholder="Tell me about your project"
            className="md:col-span-2 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
            rows="5"
          ></textarea>
        </form>

        {/* Submit Button */}
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-16 py-3 rounded-full hover:bg-blue-700 transition">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
