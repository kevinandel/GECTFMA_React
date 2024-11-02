import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Support.css";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    emailjs
      .sendForm(
        "service_126rzsl",
        "template_urtf2bd",
        form.current,
        "0BgZ2UJYRpHj_vsoR"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setErrors({});
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );
  };

  return (
    <section id="support" className="p-16 text-center bg-yellow-50">
      <h2 className="text-3xl mb-4">
        <b>Support</b>
      </h2>
      <p>
        For any inquiries or support, please contact us using the form below:
      </p>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-8"
      >
        <div className="mb-4">
          <label className="block text-left mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          {errors.name && (
            <p className="text-red-500 text-left">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-left mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-left">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-left mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          {errors.message && (
            <p className="text-red-500 text-left">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="px-6 py-3 text-white rounded submit-button"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Support;
