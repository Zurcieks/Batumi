"use client";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [messages, setMessages] = useState({ success: "", error: "" });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessages({ success: "", error: "" });
    setErrors({ ...errors, [e.target.name]: "" }); // Reset error on change
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      firstName: !formData.firstName ? "First name is required" : "",
      lastName: !formData.lastName ? "Last name is required" : "",
      email: !formData.email
        ? "Email is required"
        : !isValidEmail(formData.email)
        ? "Invalid email address"
        : "",
      subject: !formData.subject ? "Subject is required" : "",
      message: !formData.message ? "Message is required" : "",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(Boolean);

    if (hasErrors) {
      setMessages({
        success: "",
        error: "An error occurred while submitting the form.",
      });
    } else {
      setMessages({
        success: "Your message has been sent successfully!",
        error: "",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-blue-50 py-12 px-4">
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-x-8 w-full lg:max-w-6xl">
        <div className="space-y-4 text-center lg:text-left lg:w-1/2">
          <h2 className="text-3xl font-bold">Contact Us!</h2>
          <p className="text-gray-600">
            Are you considering buying a property? Contact us for more information and to schedule a meeting.
          </p>
          <div className="space-y-2 text-gray-500">
            <p>📍 12 Avenue, New York, NY 10160</p>
            <p>✉️ contact@business.com</p>
            <p>📞 +1 910-626-85255</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6 lg:w-1/2">
          {["Name", "Surname", "email", "subject", "message"].map((field) => (
            <div key={field}>
              <input
                id={field}
                name={field}
                type={field === "message" ? "textarea" : "text"}
                value={formData[field as keyof typeof formData]}
                onChange={handleInputChange}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="w-full p-4 border rounded border-gray-300"
              />
              {errors[field as keyof typeof errors] && (
                <div
                  className="flex items-center justify-between p-4 mb-4 text-red-800 bg-red-100 rounded-lg"
                  role="alert"
                >
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 002 0V7zm-1 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="font-medium">
                      {errors[field as keyof typeof errors]}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="ml-2 text-red-800 hover:text-red-900"
                    aria-label="Close"
                    onClick={() => setErrors({ ...errors, [field]: "" })}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="flex justify-center mx-auto md:mx-0 w-[100px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Send
          </button>

          {messages.success && (
            <div
              className="flex items-center justify-between p-4 mb-4 text-green-800 bg-green-100 rounded-lg"
              role="alert"
            >
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 002 0V7zm-1 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="font-medium">Message has been sent!</span>
              </div>
              <button
                type="button"
                className="ml-2 text-green-800 hover:text-green-900"
                aria-label="Close"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
