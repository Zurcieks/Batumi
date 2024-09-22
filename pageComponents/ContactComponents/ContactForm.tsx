"use client";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [messages, setMessages] = useState({ success: "", error: "" });

  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessages({ success: "", error: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors = {
      name: !formData.name && "Imię jest wymagane",
      email: !formData.email
        ? "Email jest wymagany"
        : !isValidEmail(formData.email) && "Niepoprawny adres email",
      subject: !formData.subject && "Temat jest wymagany",
      message: !formData.message && "Wiadomość jest wymagana",
    };

    const hasErrors = Object.values(errors).some(Boolean);

    if (hasErrors) {
      setMessages({ success: "", error: "Wystąpił błąd podczas przesyłania formularza." });
    } else {
      setMessages({ success: "Twoja wiadomość została wysłana pomyślnie!", error: "" });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-blue-50 py-12 px-4">
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-x-8 w-full lg:max-w-6xl">
        {/* Contact Info Section */}
        <div className="space-y-4 text-center lg:text-left lg:w-1/2">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="space-y-2 text-gray-500">
            <p>📍 12 Avenue, New York, NY 10160</p>
            <p>✉️ contact@business.com</p>
            <p>📞 +1 910-626-85255</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6 lg:w-1/2">
          {["name", "email", "subject", "message"].map((field) => (
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
            </div>
          ))}

          <button type="submit" className="w-full py-4 bg-blue-600 text-white rounded hover:bg-blue-700">
            Send Message
          </button>

          {messages.success && <div className="text-green-500 mt-3">{messages.success}</div>}
          {messages.error && <div className="text-red-500 mt-3">{messages.error}</div>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
