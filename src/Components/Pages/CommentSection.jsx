import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      logo: "/path-to-lineicons-logo.png", // Replace with the actual logo path
      company: "Lineicons",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.",
      author: "Musharof Chy",
      position: "Founder @ Lineicons",
      image: "/path-to-musharof-image.png", // Replace with the actual image path
    },
    {
      logo: "/path-to-tailgrids-logo.png",
      company: "TailGrids",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.",
      author: "Devid Sailio",
      position: "Founder @ TailGrids",
      image: "/path-to-devid-image.png",
    },
    {
      logo: "/path-to-ayro-logo.png",
      company: "Ayro UI",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.",
      author: "Jenifer Lofeez",
      position: "Founder @ Ayro UI",
      image: "/path-to-jenifer-image.png",
    },
    {
      logo: "/path-to-uideck-logo.png",
      company: "UIdeck",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.",
      author: "Justin Herry",
      position: "Founder @ UIdeck",
      image: "/path-to-justin-image.png",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900 py-16 my-20" style={{ backgroundColor: "#f3f8fd" }}>
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Hear From My Clients</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200"
          >
            {/* Company Logo */}
            <img
              src={testimonial.logo}
              alt={`${testimonial.company} Logo`}
              className="h-10 mx-auto mb-4"
            />

            {/* Testimonial Text */}
            <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>

            {/* Author Information */}
            <div className="flex items-center justify-start">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="text-left">
                <h4 className="text-lg font-semibold">{testimonial.author}</h4>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
