import { useState } from "react";

const ContactFormSection = () => {
  const [fullName, setFullName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const submitContactForm = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setMessage(""); // Clear previous messages

    try {
      const response = await fetch("http://localhost:3000/api/contactForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, projectName, userEmail, phoneNumber, description }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMessage("Contact Form submission was successful!"); // Success message
      // Reset form fields
      setFullName("");
      setProjectName("");
      setEmail("");
      setPhoneNumber("");
      setDescription("");
    } catch (error) {
      console.error("Error submitting the contact form:", error);
      setMessage("Something went wrong. Please try again."); // Error message
    }
  };

  return (
    <div className="text-gray-900 py-16" id="contactWithMe">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Have a Project in Mind?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 border border-gray-200">
        <form onSubmit={submitContactForm} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
            required
          />
          {/* Company */}
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Project Name"
            className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
            required
          />
          {/* Email */}
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
            required
          />
          {/* Phone */}
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone number"
            className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
            required
          />
          {/* Project Description */}
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Tell me about your project"
            className="md:col-span-2 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
            rows="5"
            required
          ></textarea>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center mt-4">
            <button type="submit" className="bg-blue-600 text-white px-16 py-3 rounded-full hover:bg-blue-700 transition">
              Contact Me
            </button>
          </div>
        </form>

        {/* Feedback Message */}
        {message && <p className={`mt-4 text-center ${message.includes("successful") ? "text-green-600" : "text-red-600"}`}>{message}</p>}
      </div>
    </div>
  );
};

export default ContactFormSection;
