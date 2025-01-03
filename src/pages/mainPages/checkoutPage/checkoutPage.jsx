import { useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "@/hooks/useAxiosSecure";

const CheckoutPage = () => {
  const axiosSecure = useAxiosSecure();

  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.address ||
      !formData.message
    ) {
      toast.error("Please fill out all fields.");
      return;
    }

    try {
      // Send form data to the server
      const response = await axiosSecure.post("/api/orders", formData);
      if (response.data.success) {
        toast.success("Order request sent successfully!");
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          mobile: "",
          address: "", // Reset address field
          message: "",
        });
      } else {
        toast.error("Failed to send order request. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto mb-8">
        <div className="mt-10 max-w-7xl mx-auto bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600">
          <div className="py-6">
            <h1 className="text-center text-3xl font-bold text-white">
              Send Order Request
            </h1>
            <p className="text-center text-xl py-6 text-white">
              We are here to provide you all the details. Please fill up the
              form below and we will get back to you.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <div className="max-w-md mx-auto p-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4 text-gray-200 text-sm font-medium">
              {/* Name Input */}
              <div>
                <label className="block" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Mobile Number Input */}
              <div>
                <label className="block" htmlFor="mobile">
                  Mobile Number
                </label>
                <input
                  className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Address Input */}
              <div>
                <label className="block" htmlFor="address">
                  Address
                </label>
                <input
                  className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                  type="text"
                  name="address"
                  placeholder="Your Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                  rows="3"
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="w-full mt-6">
              <button
                className="min-w-full bg-gradient-to-r from-blue-600 via-sky-400-400 to-blue-900 text-white px-4 py-2 font-bold rounded-md hover:opacity-50"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
