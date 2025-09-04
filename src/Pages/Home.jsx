import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-80 h-[550px] bg-[#F7F8F9] border border-gray-200 shadow-sm rounded-md flex flex-col justify-end p-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Welcome to PopX</h2>
          <p className="text-sm text-gray-600 mt-1 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          {/* Create Account Button */}
          <button
            onClick={() => navigate("/register")}
            className="w-full bg-[#6C25FF] text-white py-2 rounded mb-3"
          >
            Create Account
          </button>

          {/* Login Button */}
          <button
            onClick={() => navigate("/login")}
            className="w-full bg-[#6C25FF4B] text-[#1D2226] font-semibold py-2 rounded"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
