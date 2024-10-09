import { Link } from "react-router-dom";

import deliveryImage from "../../imgs/delivery.webp"
import customFarmingIcon from "../../imgs/customFarmingIcon.webp"
import sustainableIcon from "../../imgs/sustainableIcon.webp"
import wholesaleSupplyIcon from "../../imgs/wholesaleSupplyIcon.webp"
import customGrowingIcon from "../../imgs/customGrowingIcon.webp"

export default function Services() {
  // Services data reflecting the actual services offered by Golden West Vegetables
  const services = [
    {
      id: 1,
      title: "Delivery",
      description: "Efficient and reliable delivery services for fresh vegetables to your location.",
      icon: deliveryImage,
    },
    {
      id: 2,
      title: "Custom Farming Solutions",
      description: "Tailored farming services to meet your specific needs.",
      icon: customFarmingIcon,
    },
    {
      id: 3,
      title: "Sustainable Farming",
      description: "We prioritize eco-friendly and sustainable farming practices.",
      icon: sustainableIcon,
    },
    {
      id: 4,
      title: "Wholesale Supply",
      description: "Large scale vegetable supply for grocery stores and restaurants.",
      icon: wholesaleSupplyIcon,
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote: "Golden West Vegetables has been our trusted partner for years, providing fresh produce and excellent service.",
      clientName: "Carlos Hernandez",
      company: "Farm Fresh Supplies",
    },
    {
      id: 2,
      quote: "Their custom growing service has helped us meet specific demands during peak seasons. A great team to work with!",
      clientName: "Maria Lopez",
      company: "Green Acres Agriculture",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
          <p className="text-xl text-gray-600 mt-4">
            Explore a variety of services tailored to meet your agricultural needs.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Grid of Services */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                <div
                    key={service.id}
                    className={`bg-white p-6 rounded-lg shadow-lg text-center ${
                    services.length === 4 && index === 3 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""
                    }`}
                >
                    <img
                    src={service.icon}
                    alt={service.title}
                    className="h-16 w-16 mx-auto"
                    />
                    <h3 className="text-xl font-semibold mt-4 text-gray-800">{service.title}</h3>
                    <p className="mt-2 text-gray-600">{service.description}</p>
                </div>
                ))}
            </div>
        </div>

      {/* Feature Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          <img
            src={customGrowingIcon}
            alt="Custom Growing Feature"
            className="w-full lg:w-1/2 rounded-lg shadow-lg"
          />
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold">Why Choose Our Custom Growing Solutions?</h2>
            <p className="mt-4 text-gray-600">
              Our custom growing solutions allow you to get tailored vegetables for your unique requirements.
              Whether you're a small business or a large enterprise, we can grow to meet your needs.
            </p>
            <Link
              to="/contact"
              className="inline-block mt-6 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
            >
              Contact Us for More Info
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-12">
        <h3 className="text-2xl font-semibold text-center">What Our Clients Say</h3>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">"{testimonial.quote}"</p>
              <p className="mt-4 font-bold text-indigo-600">{testimonial.clientName}</p>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-indigo-600 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Get Started?</h2>
          <p className="mt-4 text-indigo-200">
            Contact us to discuss your project and find out how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-6 bg-white text-indigo-600 py-2 px-4 rounded-lg hover:bg-gray-100"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
}
