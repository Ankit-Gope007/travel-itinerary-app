import React from 'react'
import { useState } from 'react'

const ActivitiesPlanner = () => {
    const [active, setActive] = useState("MON")
    return (
        <div className='w-full h-[200px]  '>
            <div className='m-5 border  h-[150px] rounded-[12px] bg-[#333333]'>
                <div className='w-full mt-4 ml-3 flex gap-3'>
                    <div className='bg-[#D3F462] h-[30px] w-[20%] rounded-[8px] text-[#333333] font-Montserrat flex justify-center items-center text-[12px] font-semibold'>
                        Day Plan
                    </div>
                    <div className='border border-[#D3F462] h-[30px] w-[25%] rounded-[8px] bg-[#292929] text-[#D3F462] font-Montserrat flex justify-center items-center text-[12px] font-semibold '>
                        14 Activities
                    </div>
                </div>
                <div className=' flex  mt-5 mx-3 h-[70px] gap-3'>
                    {active === "MON" ?
                        <div className="cursor-pointer flex rounded-xl border border-[#D8F15C] overflow-hidden w-[80px] h-[60px] text-white text-center text-xs font-semibold font-Montserrat"
                            onClick={() => setActive("MON")}
                        >

                            <div className="bg-[#D8F15C] text-black w-[30%] flex items-center justify-center rotate-180 [writing-mode:vertical-rl] text-[12px]">
                                JAN
                            </div>


                            <div className="bg-[#2D2D2D] w-[70%] flex flex-col items-start ml-1 justify-center px-1">
                                <div className="text-xs">MON</div>
                                <div className="text-xl font-bold -mt-1">27</div>
                            </div>
                        </div> :
                        <div className="cursor-pointer w-[60px] h-[60px] bg-[#2D2D2D] rounded-xl flex flex-col items-center justify-center text-gray-400 font-Montserrat"
                            onClick={() => setActive("MON")}>
                            <div className="text-xs">JAN</div>
                            <div className="text-lg font-semibold">28</div>
                        </div>
                    }


                    {active === "TUE" ?
                        <div className="cursor-pointer flex rounded-xl border border-[#D8F15C] overflow-hidden w-[80px] h-[60px] text-white text-center text-xs font-semibold font-Montserrat"
                            onClick={() => setActive("TUE")}
                        >

                            <div className="bg-[#D8F15C] text-black w-[30%] flex items-center justify-center rotate-180 [writing-mode:vertical-rl] text-[12px]">
                                JAN
                            </div>


                            <div className="bg-[#2D2D2D] w-[70%] flex flex-col items-start ml-1 justify-center px-1">
                                <div className="text-xs">TUE</div>
                                <div className="text-xl font-bold -mt-1">28</div>
                            </div>
                        </div> :
                        <div className="cursor-pointer w-[60px] h-[60px] bg-[#2D2D2D] rounded-xl flex flex-col items-center justify-center text-gray-400 font-Montserrat"
                            onClick={() => setActive("TUE")}>
                            <div className="text-xs">TUE</div>
                            <div className="text-lg font-semibold">28</div>
                        </div>
                    }


                    {active === "WED" ?
                        <div className="cursor-pointer flex rounded-xl border border-[#D8F15C] overflow-hidden w-[80px] h-[60px] text-white text-center text-xs font-semibold font-Montserrat"
                            onClick={() => setActive("WED")}
                        >

                            <div className="bg-[#D8F15C] text-black w-[30%] flex items-center justify-center rotate-180 [writing-mode:vertical-rl] text-[12px]">
                                JAN
                            </div>


                            <div className="bg-[#2D2D2D] w-[70%] flex flex-col items-start ml-1 justify-center px-1">
                                <div className="text-xs">WED</div>
                                <div className="text-xl font-bold -mt-1">29</div>
                            </div>
                        </div> :
                        <div className="cursor-pointer w-[60px] h-[60px] bg-[#2D2D2D] rounded-xl flex flex-col items-center justify-center text-gray-400 font-Montserrat"
                            onClick={() => setActive("WED")}>
                            <div className="text-xs">WED</div>
                            <div className="text-lg font-semibold">29</div>
                        </div>
                    }


                    {active === "THU" ?
                        <div className="cursor-pointer flex rounded-xl border border-[#D8F15C] overflow-hidden w-[80px] h-[60px] text-white text-center text-xs font-semibold font-Montserrat"
                            onClick={() => setActive("THU")}
                        >

                            <div className="bg-[#D8F15C] text-black w-[30%] flex items-center justify-center rotate-180 [writing-mode:vertical-rl] text-[12px]">
                                JAN
                            </div>


                            <div className="bg-[#2D2D2D] w-[70%] flex flex-col items-start ml-1 justify-center px-1">
                                <div className="text-xs">THU</div>
                                <div className="text-xl font-bold -mt-1">30</div>
                            </div>
                        </div> :
                        <div className="cursor-pointer w-[60px] h-[60px] bg-[#2D2D2D] rounded-xl flex flex-col items-center justify-center text-gray-400 font-Montserrat"
                            onClick={() => setActive("THU")}>
                            <div className="text-xs">THU</div>
                            <div className="text-lg font-semibold">30</div>
                        </div>
                    }


                    {active === "FRI" ?
                        <div className="cursor-pointer flex rounded-xl border border-[#D8F15C] overflow-hidden w-[80px] h-[60px] text-white text-center text-xs font-semibold font-Montserrat"
                            onClick={() => setActive("FRI")}
                        >

                            <div className="bg-[#D8F15C] text-black w-[30%] flex items-center justify-center rotate-180 [writing-mode:vertical-rl] text-[12px]">
                                JAN
                            </div>


                            <div className="bg-[#2D2D2D] w-[70%] flex flex-col items-start ml-1 justify-center px-1">
                                <div className="text-xs">FRI</div>
                                <div className="text-xl font-bold -mt-1">31</div>
                            </div>
                        </div> :
                        <div className="cursor-pointer w-[60px] h-[60px] bg-[#2D2D2D] rounded-xl flex flex-col items-center justify-center text-gray-400 font-Montserrat"
                            onClick={() => setActive("FRI")}>
                            <div className="text-xs">FRI</div>
                            <div className="text-lg font-semibold">31</div>
                        </div>
                    }


                    {active === "SAT" ?
                        <div className="cursor-pointer flex rounded-xl border border-[#D8F15C] overflow-hidden w-[80px] h-[60px] text-white text-center text-xs font-semibold font-Montserrat"
                            onClick={() => setActive("SAT")}
                        >

                            <div className="bg-[#D8F15C] text-black w-[30%] flex items-center justify-center rotate-180 [writing-mode:vertical-rl] text-[12px]">
                                FEB
                            </div>


                            <div className="bg-[#2D2D2D] w-[70%] flex flex-col items-start ml-1 justify-center px-1">
                                <div className="text-xs">SAT</div>
                                <div className="text-xl font-bold -mt-1">1</div>
                            </div>
                        </div> :
                        <div className="cursor-pointer w-[60px] h-[60px] bg-[#2D2D2D] rounded-xl flex flex-col items-center justify-center text-gray-400 font-Montserrat"
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