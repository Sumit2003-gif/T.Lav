import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";

const TopInfoBar = () => {
  return (
    <section className="bg-[#f5f6ff] text-gray-600 text-sm py-2 hidden md:block">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Left Text */}
        <p className="text-gray-500">Welcome to our Relxtower.</p>

        {/* Right Info Items */}
        <div className="flex gap-6 items-center text-gray-600">
          {/* Phone */}
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-sm" />
            <span>+8 12 3456897</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <HiOutlineMail className="text-lg" />
            <span>info@example.com</span>
          </div>

          {/* Time */}
          <div className="flex items-center gap-2">
            <AiOutlineClockCircle className="text-lg" />
            <span>Mon–Fri: 8am - 7pm</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopInfoBar;
