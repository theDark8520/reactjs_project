import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function OutlinedInput({ label, name, type = "text", value, onChange, required }) {
  return (
    <div className="relative w-full">
      {/* Label on border */}
      <label
        className="absolute -top-2 left-3 px-1 bg-[#F7F8F9] text-xs text-[#6C25FF]"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {/* Input */}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder="Marry Doe"
        className="w-full border border-gray-400 rounded px-3 py-1.5 text-sm text-[#1D2226] 
                   focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
        required={required}
      />
    </div>
  );
}

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setUser({ name: formData.name, email: formData.email });
    navigate("/profile");
  };

  const isFormValid =
    formData.name &&
    formData.phone &&
    formData.email &&
    formData.password &&
    formData.company;

  return (
    <div className="flex items-center justify-center min-h-[110vh] bg-white font-[Rubik]">
      <div className="w-[375px] border border-gray-300 bg-[#F7F8F9] p-6 rounded-lg shadow-sm">
        {/* Title */}
        <h2 className="text-xl font-bold mb-6 text-[#1D2226]">
          Create your <br /> PopX account
        </h2>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-6">
            <OutlinedInput
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <OutlinedInput
              label="Phone number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <OutlinedInput
              label="Email address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <OutlinedInput
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <OutlinedInput
              label="Company name"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />

            {/* Agency */}
            <div>
              <p className="text-[13px] text-[#6C25FF] mb-2">
                Are you an Agency? <span className="text-red-500">*</span>
              </p>
              <div className="flex space-x-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="agency"
                    value="yes"
                    checked={formData.agency === "yes"}
                    onChange={handleChange}
                    className="accent-[#6C25FF]"
                  />
                  <span className="text-sm text-[#1D2226]">Yes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="agency"
                    value="no"
                    checked={formData.agency === "no"}
                    onChange={handleChange}
                    className="accent-[#6C25FF]"
                  />
                  <span className="text-sm text-[#1D2226]">No</span>
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full h-10 mt-12 rounded text-white font-medium text-sm transition ${
              isFormValid
                ? "bg-[#6C25FF] hover:bg-[#5a1ed9]"
                : "bg-[#6C25FF4B] cursor-not-allowed"
            }`}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
