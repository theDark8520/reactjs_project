import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import image from "../assets/Ellipse 114.png";
import camicon from "../assets/Group 1585.png";

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white font-[Rubik]">
      <div className="w-80 min-h-[520px] bg-white border border-gray-300 rounded-md shadow-sm overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="px-4 py-3 border-b border-gray-200 bg-white">
          <h2 className="text-lg font-semibold text-gray-500">Account Settings</h2>
        </div>

        {/* Profile Section */}
        <div className="flex-1 bg-[#F7F8F9] flex flex-col">
          <div className="px-4 py-4 flex items-start space-x-4 relative">
            {/* Avatar with Camera Icon */}
            <div className="relative">
              <img
                src={image}
                alt="profile"
                className="w-14 h-14 rounded-full object-cover"
              />
              <span className="absolute bottom-0 right-0 bg-[#6C25FF] p-1 rounded-full border-2 border-white">
                <img src={camicon} alt="edit" className="w-3 h-3" />
              </span>
            </div>

            {/* User Info */}
            <div>
              <p className="font-semibold text-gray-900 text-sm">
                {user?.name || "Marry Doe"}
              </p>
              <p className="text-xs text-gray-500">
                {user?.email || "Marry@Gmail.Com"}
              </p>
            </div>
          </div>

          {/* Bio */}
          <div className="px-4 pb-4">
            <p className="text-xs text-gray-600 font-semibold leading-relaxed">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
          </div>

          {/* Bottom Divider */}
          <div className="mt-auto h-8 border-t border-dashed border-gray-200"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
