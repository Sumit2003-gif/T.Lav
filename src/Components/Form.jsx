import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { HiCheck, HiChevronUpDown } from "react-icons/hi2";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCode: "+91",
    phone: "",
    message: "",
  });

  const phoneOptions = [
    { code: "+1", label: "🇺🇸 +1" },
    { code: "+44", label: "🇬🇧 +44" },
    { code: "+91", label: "🇮🇳 +91" },
    { code: "+61", label: "🇦🇺 +61" },
    { code: "+81", label: "🇯🇵 +81" },
  ];

  const [selectedCode, setSelectedCode] = useState(phoneOptions[2]); // default +91

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify({ ...formData, phoneCode: selectedCode.code }));
    alert("Form data saved to local storage!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneCode: "+91",
      phone: "",
      message: "",
    });
    setSelectedCode(phoneOptions[2]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 w-full p-6 rounded-lg space-y-6"
    >
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Get In Touch</h1>

      {/* First & Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 mb-1">
            First name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border border-gray-400 rounded-full px-4 py-2 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">
            Last name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border border-gray-400 rounded-full px-4 py-2 focus:outline-none"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-700 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-400 rounded-full px-4 py-2 focus:outline-none"
          required
        />
      </div>

      {/* Phone */}
              <label className="block text-gray-700 mb-1">Phone</label>

      <div className="flex gap-2">
        
  {/* Custom Dropdown */}
  <Listbox value={selectedCode} onChange={setSelectedCode}>
    <div className="relative w-24 flex-shrink-0">
      <Listbox.Button className="relative w-full cursor-pointer border border-gray-400 rounded-l-md p-3 text-left bg-white flex items-center justify-between">
        {selectedCode.label}
        <HiChevronUpDown className="w-5 h-5 text-gray-500" />
      </Listbox.Button>
      <Listbox.Options className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 max-h-60 overflow-auto">
        {phoneOptions.map((option) => (
          <Listbox.Option
            key={option.code}
            value={option}
            className={({ active, selected }) =>
              `cursor-pointer select-none px-4 py-2 ${
                active ? "bg-gray-200" : ""
              } ${selected ? "font-bold text-blue-600" : "text-gray-800"}`
            }
          >
            {({ selected }) => (
              <div className="flex items-center justify-between">
                <span>{option.label}</span>
                {selected && <HiCheck className="w-5 h-5 text-blue-600" />}
              </div>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </div>
  </Listbox>

  {/* Phone Input */}
  <input
    type="tel"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    className="flex-1 border border-gray-400 border-l-0 outline-0 rounded-r-md p-3 bg-transparent"
    // placeholder="Phone Number"
    required
  />
</div>
      {/* Message */}
      <div>
        <label className="block text-gray-700 mb-1">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none"
        ></textarea>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-black cursor-pointer text-white py-2 rounded-full hover:bg-gray-800 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
