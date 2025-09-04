import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";


function OutlinedInput({ label, type = "text", value, onChange, placeholder, required }) {
  return (
    <div className="relative w-full">
      {/* Label on border line */}
      <label className="absolute -top-2 left-3 px-1 bg-[#F7F8F9] text-xs text-purple-600">
        {label} 
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full border border-gray-400 rounded px-3 py-2 text-sm text-gray-800 
                   focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
    </div>
  );
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setUser({
        name: email.split("@")[0],
        email: email,
      });
      navigate("/profile");
    }
  };

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="flex items-center justify-center min-h-screen bg-white font-[Rubik]">
      <div className="w-80 h-[550px] bg-[#f9f5ff] border border-gray-200 shadow-md rounded-lg p-6">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900">
          Sign in to your <br /> PopX account
        </h2>
        <p className="text-sm text-gray-500 mt-1 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium deleniti.
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <OutlinedInput
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            required
          />

          <OutlinedInput
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={!isFormValid}
            className="w-full bg-[#CBCBCB] text-white py-2 rounded font-medium text-sm transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
