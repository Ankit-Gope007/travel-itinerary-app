import { AiOutlineHeart } from "react-icons/ai";
import useUserStore from "../../store/User.Store";

const LikePage = () => {
const { theme } = useUserStore()
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center text-center px-6 transition-all duration-300 ${
        isDark
          ? "bg-gradient-to-b from-[#1a1a1a] to-black text-white"
          : "bg-white text-black"
      }`}
    >
      <AiOutlineHeart className="text-6xl mb-6 text-pink-400" />

      <h1 className="text-2xl font-bold mb-2">Thank You for This Opportunity 💖</h1>

      <p className="max-w-md text-sm font-medium text-gray-400 mb-6">
        I really enjoyed building this project and exploring design and logic through your internship assignment. Looking forward to your feedback!
      </p>

      <p className="text-xs text-gray-500">
        (P.S. — You can imagine this as a "Liked Trips" page where saved destinations would appear!)
      </p>
    </div>
  );
};

export default LikePage;