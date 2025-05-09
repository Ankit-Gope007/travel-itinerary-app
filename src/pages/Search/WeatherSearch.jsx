import { useState } from "react";
import useUserStore  from "../../store/User.Store.js";

const WeatherSearch = () => {
    const {theme} = useUserStore();
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");

    const isDark = theme === "dark";

    const fetchWeather = async () => {
        if (!city) return;
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        try {
            
            
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            );
            const data = await response.json();

            if (data.cod !== 200) {
                setError(data.message);
                setWeather(null);
            } else {
                setWeather(data);
                setError("");
            }
        } catch (err) {
            setError("Failed to fetch weather.");
            setWeather(null);
        }
    };

    return (
        <div
            className={`min-h-screen px-6 flex flex-col items-center justify-center transition-all duration-300 ${isDark
                    ? "bg-gradient-to-b from-[#1a1a1a] to-[#000000] text-white"
                    : "bg-white text-black"
                }`}
        >
            <h1 className="text-2xl font-bold mb-6">Check Weather</h1>

            {/* Input Field */}
            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={`w-full max-w-md px-4 py-3 rounded-lg mb-4 text-sm outline-none font-medium ${isDark
                        ? "bg-[#2D2D2D] text-white placeholder-gray-400"
                        : "bg-[#F1F2F4] text-black placeholder-gray-500"
                    }`}
            />

            {/* Search Button */}
            <button
                onClick={fetchWeather}
                className={`cursor-pointer w-full max-w-md h-[45px] rounded-lg font-semibold text-base mb-8 ${isDark
                        ? "bg-[#3643FB] text-white active:bg-[#343cae]"
                        : "bg-[#D3D9FB] text-[#313DDF] active:bg-[#b6c2f3]"
                    }`}
            >
                Get Weather
            </button>

            {/* Weather Result */}
            {weather && (
                <div className="text-center space-y-2">
                    <h2 className="text-xl font-bold">{weather.name}</h2>
                    <p className="text-sm">{weather.weather[0].description}</p>
                    <p className="text-3xl">{weather.main.temp}°C</p>
                </div>
            )}

            {/* Error Message */}
            {error && (
                <p className="text-red-400 mt-4 text-sm font-medium">{error}</p>
            )}
        </div>
    );
};

export default WeatherSearch;