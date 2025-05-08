import React from 'react'
import { useState } from 'react'
import useUserStore from '../../../../store/User.Store'

const ActivitiesPlanner = () => {
    const { theme } = useUserStore()
    const [active, setActive] = useState("MON")

    return (
        <div className='w-full h-[200px]  '>
            <div className={`m-5 border  h-[150px] rounded-[12px]  ${theme == "dark" ? "bg-[#333333]" : "border border-slate-400"}`}>
                <div className='w-full mt-4 ml-3 flex gap-3'>
                    <div className={`h-[30px] w-[20%] rounded-[8px] font-Montserrat flex justify-center items-center text-[12px] font-semibold ${theme == "dark" ? "bg-[#D3F462] text-[#333333]  " : "bg-[#313DDF] text-white"}`}>
                        Day Plan
                    </div>
                    <div className={` h-[30px] w-[25%] rounded-[8px] font-Montserrat flex justify-center items-center text-[12px] font-semibold  ${theme == "dark" ? " bg-[#292929] text-[#D3F462]  border border-[#D3F462] " : " text-[#313DDF] border border-[#313DDF]"}`} >
                        14 Activities
                    </div>
                </div>
                <div className=' flex  mt-5 mx-3 h-[70px] gap-3'>
                    {/* Monday */}
                    {active === "MON" ?
                        <div className={`cursor-pointer flex rounded-xl border overflow-hidden w-[80px] h-[60px] text-center text-xs font-semibold font-Montserrat ${theme == "dark" ? "border-[#D8F15C] text-white" : "border-[#313DDF] text-black"} `}
                            onClick={() => setActive("MON")}>
                            <div className={` w-[30%] flex items-center justify-center rotate-180 [writing-mode:vertical-rl] text-[12px] ${theme == "dark" ? "bg-[#D8F15C] text-black" : "bg-[#313DDF] text-white"}`}>
                                JAN
                            </div>
                            <div className={` w-[70%] flex flex-col items-start ml-1 justify-center px-1 ${theme == "dark" ? "bg-[#2D2D2D]" : ""}`}>
                                <div className="text-xs">MON</div>
                                <div className="text-xl font-bold -mt-1">27</div>
                            </div>
                        </div> :
                        <div className={`cursor-pointer w-[60px] h-[60px] rounded-xl flex flex-col items-center justify-center text-gray-400 font-Montserrat ${theme == "dark" ? "bg-[#2D2D2D]" : "bg-[#E5E5E5]"}`}
                            onClick={() => setActive("MON")}>
                            <div className="text-xs">MON</div>
                            <div className="text-lg font-semibold">27</div>
                        </div>
                    }

                    {/* Tuesday */}
                    {active === "TUE" ?
                        <div className={`cursor-pointer flex rounded-xl border overflow-hidden w-[80px] h-[60px] text-center text-xs font-semibold font-Montserrat ${theme == "dark" ? "border-[#D8F15C] text-white" : "border-[#313DDF] text-black"} `}
                            onClick={() => setActive("TUE")}>
                            <div className={` w-[30%] flex items-center justify-center rotate-180 [writing-mode:vertical-rl] text-[12px] ${theme == "dark" ? "bg-[#D8F15C] text-black" : "bg-[#313DDF] text-white"}`}>
                                JAN
                            </div>
                            <div className={` w-[70%] flex flex-col items-start ml-1 justify-center px-1 ${theme == "dark" ? "bg-[#2D2D2D]" : ""}`}>
                                <div className="text-xs">TUE</div>
                                <div className="text-xl font-bold -mt-1">28</div>
                            </div>
                        </div> :
                        <div className={`cursor-pointer w-[60px] h-[60px] rounded-xl flex flex-col items-center justify-center text-gray-400 font-Montserrat ${theme == "dark" ? "bg-[#2D2D2D]" : "bg-[#E5E5E5]"}`}
                            onClick={() => setActive("TUE")}>
                            <div className="text-xs">TUE</div>
                            <div className="text-lg font-semibold">28</div>
                        </div>
                    }

                    {/* Wednesday */}
                    {active === "WED" ?
                        <div className={`cursor-pointer flex rounded-xl border overflow-hidden w-[80px] h-[60px] text-center text-xs font-semibold font-Montserrat ${theme == "dark" ? "border-[#D8F15C] text-white" : "border-[#313DDF] text-black"} `}
                            onClick={() => setActive("WED")}>
                            <div className={` w-[30%] flex items-center justify-center rotate-180 [writing-mode:vertical-rl] text-[12px] ${theme == "dark" ? "bg-[#D8F15C] text-black" : "bg-[#313DDF] text-white"}`}>
                                JAN
                            </div>
                            <div className={` w-[70%] flex flex-col items-start ml-1 justify-center px-1 ${theme == "dark" ? "bg-[#2D2D2D]" : ""}`}>
                                <div className="text-xs">WED</div>
                                <div className="text-xl font-bold -mt-1">29</div>
                            </div>
                        </div> :
                        <div className={`cursor-pointer w-[60px] h-[60px] rounded-xl flex flex-col items-center justify-center text-gray-400 font-Montserrat ${theme == "dark" ? "bg-[#2D2D2D]" : "bg-[#E5E5E5]"}`}
                            onClick={() => setActive("WED")}>
                            <div className="text-xs">WED</div>
                            <div className="text-lg font-semibold">29</div>
                        </div>
                    }

                    {/* Thursday */}
                    {active === "THU" ?
                        <div className={`cursor-pointer flex rounded-xl border overflow-hidden w-[80px] h-[60px] text-center text-xs font-semibold font-Montserrat ${theme == "dark" ? "border-[#D8F15C] text-white" : "border-[#313DDF] text-black"} `}
                            onClick={() => setActive("THU")}>
                            <div className={` w-[30%] flex items-center justify-center rotate-180 [writing-mode:vertical-rl] text-[12px] ${theme == "dark" ? "bg-[#D8F15C] text-black" : "bg-[#313DDF] text-white"}`}>
                                JAN
                            </div>
                            <div className={` w-[70%] flex flex-col items-start ml-1 justify-center px-1 ${theme == "dark" ? "bg-[#2D2D2D]" : ""}`}>
                                <div className="text-xs">THU</div>
                                <div className="text-xl font-bold -mt-1">30</div>
                            </div>
                        </div> :
                        <div className={`cursor-pointer w-[60px] h-[60px] rounded-xl flex flex-col items-center justify-center text-gray-400 font-Montserrat ${theme == "dark" ? "bg-[#2D2D2D]" : "bg-[#E5E5E5]"}`}
                            onClick={() => setActive("THU")}>
                            <div className="text-xs">THU</div>
                            <div className="text-lg font-semibold">30</div>
                        </div>
                    }

                    {/* Friday */}
                    {active === "FRI" ?
                        <div className={`cursor-pointer flex rounded-xl border overflow-hidden w-[80px] h-[60px] text-center text-xs font-semibold font-Montserrat ${theme == "dark" ? "border-[#D8F15C] text-white" : "border-[#313DDF] text-black"} `}
                            onClick={() => setActive("FRI")}>
                            <div className={` w-[30%] flex items-center justify-center rotate-180 [writing-mode:vertical-rl] text-[12px] ${theme == "dark" ? "bg-[#D8F15C] text-black" : "bg-[#313DDF] text-white"}`}>
                                JAN
                            </div>
                            <div className={` w-[70%] flex flex-col items-start ml-1 justify-center px-1 ${theme == "dark" ? "bg-[#2D2D2D]" : ""}`}>
                                <div className="text-xs">FRI</div>
                                <div className="text-xl font-bold -mt-1">31</div>
                            </div>
                        </div> :
                        <div className={`cursor-pointer w-[60px] h-[60px] rounded-xl flex flex-col items-center justify-center text-gray-400 font-Montserrat ${theme == "dark" ? "bg-[#2D2D2D]" : "bg-[#E5E5E5]"}`}
                            onClick={() => setActive("FRI")}>
                            <div className="text-xs">FRI</div>
                            <div className="text-lg font-semibold">31</div>
                        </div>
                    }

                    {/* Saturday */}
                    {active === "SAT" ?
                        <div className={`cursor-pointer flex rounded-xl border overflow-hidden w-[80px] h-[60px] text-center text-xs font-semibold font-Montserrat ${theme == "dark" ? "border-[#D8F15C] text-white" : "border-[#313DDF] text-black"} `}
                            onClick={() => setActive("SAT")}>
                            <div className={` w-[30%] flex items-center justify-center rotate-180 [writing-mode:vertical-rl] text-[12px] ${theme == "dark" ? "bg-[#D8F15C] text-black" : "bg-[#313DDF] text-white"}`}>
                                FEB
                            </div>
                            <div className={` w-[70%] flex flex-col items-start ml-1 justify-center px-1 ${theme == "dark" ? "bg-[#2D2D2D]" : ""}`}>
                                <div className="text-xs">SAT</div>
                                <div className="text-xl font-bold -mt-1">1</div>
                            </div>
                        </div> :
                        <div className={`cursor-pointer w-[60px] h-[60px] rounded-xl flex flex-col items-center justify-center text-gray-400 font-Montserrat ${theme == "dark" ? "bg-[#2D2D2D]" : "bg-[#E5E5E5]"}`}
                            onClick={() => setActive("SAT")}>
                            <div className="text-xs">SAT</div>
                            <div className="text-lg font-semibold">1</div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ActivitiesPlanner