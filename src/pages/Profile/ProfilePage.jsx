import React from 'react'
import useUserStore from '../../store/User.Store'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const ProfilePage = () => {
    const { theme,setTheme,username,setUsername } = useUserStore()
    const [name, setName] = useState(username);
    const isDark = theme === "dark";

    const handleSubmit = () => { 
        if(name.trim() === "") {
            toast.error("Please enter a name");
            return;
        }
        setUsername(name);
        toast.success("Name updated successfully");
     }

    return (
        <div
        className={`min-h-screen w-full overflow-x-hidden transition-all duration-300 flex items-center justify-center px-4 ${
          isDark
            ? "bg-gradient-to-b from-[#1a1a1a] to-[#000000] text-white"
            : "bg-white text-black"
        }`}
      >
        <Toaster/>
        <div className="w-full max-w-md text-center">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-8">Edit Your Profile</h1>
  
          {/* Name Input */}
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full px-4 py-3 rounded-lg outline-none mb-6 font-medium text-sm transition ${
              isDark
                ? "bg-[#2D2D2D] text-white placeholder-gray-400"
                : "bg-[#F1F2F4] text-black placeholder-gray-500"
            }`}
          />
  
          {/* Toggle Switch */}
          <div className="flex items-center justify-center mb-8">
            <span className="mr-3 text-sm">Dark Mode</span>
            <div
              onClick={() => {setTheme(isDark ? "light" : "dark");toast.success(`Theme changed to ${isDark ? "light" : "dark"}`)}}
              className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition ${
                isDark ? "bg-[#D3F462]" : "bg-gray-400"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                  isDark ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>
  
          {/* Continue Button */}
          <button
            onClick={handleSubmit}
            className={`w-full h-[50px] cursor-pointer rounded-lg font-semibold text-base transition ${
              isDark
                ? "bg-[#3643FB] text-white active:bg-[#343cae]"
                : "bg-[#D3D9FB] text-[#313DDF] active:bg-[#b6c2f3]"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    )
}

export default ProfilePage