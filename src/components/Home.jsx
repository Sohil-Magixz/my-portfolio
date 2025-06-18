import React from "react";
import my_pic from "../assets/me.png";
import Header from "./Header.jsx";

function Home(){
    return (
        <>
        <div className="2xl:containter h-screen w-screen bg-slate-50 mx-auto flex flex-col justify-center items-center">
            <div className="safety-container-2 h-[80vh] w-[90%] bg-slate-50 mx-auto flex sm:flex-row justify-center flex-col">
                <div className="h-[85%] w-full sm:w-[50%] flex justify-center items-center bg-red-600 sm:m-3 sm:mt-3 mb-6 rounded-[15px] shadow-lg">
                    <h1 className=" text-[36px] sm:w-[46%]  w-[75%]">
                        Hi There, Welcome to My Portfolio
                    </h1>
                </div>
                <div className="h-[85%] w-full sm:w-[50%] bg-black sm:m-3 sm:mt-3 rounded-[15px] bg-cover bg-no-repeat bg-center shadow-md" style={{backgroundImage: `url(${my_pic})`}} >
                    <div className="h-full w-full flex flex-col md:justify-end justify-center items-center bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.6969)] rounded-[15px]">
                        <h1 className="text-white sm:text-[36px] text-[28px] sm:w-[80%] sm:mt-0 mt-6 w-[80%] 2xl:h-[40%] md:h-[43%]  overflow-auto">
                            My Name is, Sohil Lochan V
                        </h1>
                    </div>
                </div>
            </div>
            <div className="h-[1px] border border-x-slate-600 w-[93%] mx-auto sm:mt-0 mt-10"></div>
        </div>

        </>
    )
}
export default Home;