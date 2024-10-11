import React from "react";
import my_pic from "../assets/me.png"

function About() {
    return (
        <>
            <div id="about" className="about-section h-[80vh] bg-slate-50">
                <div className="safety-container h-full w-[90%] mx-auto bg-slate-50">
                    <div className="h-[90%] container flex flex-col justify-center items-start bg-black mx-auto rounded-[15px] bg-cover  bg-center sm:bg-contain bg-no-repeat sm:bg-right" style={{ backgroundImage: `url(${my_pic})` }}>
                        <div className="h-full flex flex-col justify-center items-start bg-gradient-to-r from-[rgba(0,0,0,0.9)] lg:from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.3)] rounded-[15px]">
                            <h1 className="mt-6 text-[32px]  text-white w-full text-center decoration-red-500 underline underline-offset-8 text-2xl">About Me</h1>
                            <p className="w-[90%] h-[80%] sm:w-[45%] ml-4 text-  mt-3 sm:ml-8 sm:mt-8 lg:mt-16 text-white overflow-auto">I am a passionate coder with a strong affinity for problem-solving, currently exploring the MERN stack for web development. I have completed multiple projects that showcase my skills and creativity, enabling me to build functional and visually appealing applications. My primary programming language is Java, which I prefer for its versatility and performance. I’m excited to continue learning and growing in the tech field, pushing the boundaries of what I can create.</p>
                        </div>
                    </div>
                </div>
                <div className="h-[1px] border border-x-slate-600 w-[93%] mx-auto sm:mt-0 mt-10"></div>
            </div>
        </>
    )
}
export default About;