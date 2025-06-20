import React from "react";
import my_pic from "../assets/me.png"

function About() {
    return (
        <>
            <div id="about" className="about-section h-[80vh] bg-slate-50">
                <div className="safety-container h-full w-[90%] mx-auto bg-slate-50">
                    <div className="h-[90%] container flex flex-col justify-center items-start bg-black mx-auto rounded-[15px] bg-cover  bg-center sm:bg-contain bg-no-repeat sm:bg-right" style={{ backgroundImage: `url(${my_pic})` }}>
                        <div className="h-full flex flex-col justify-center items-start bg-gradient-to-r from-[rgba(0,0,0,0.9)] lg:from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.3)] rounded-[15px]">
                            <h1 className="mt-8 text-[32px]  text-white w-full text-center decoration-red-500 underline underline-offset-8 text-2xl">About Me</h1>
                            <p className="w-[90%] h-[80%] sm:w-[45%] ml-4 text-start  mt-3 sm:ml-8 sm:mt-8 lg:mt-28 text-white overflow-auto">I’m a passionate full-stack developer with a strong foundation in Java and a growing expertise in the MERN stack (MongoDB, Express.js, React, Node.js). I thrive on solving real-world problems through code and love turning ideas into scalable, user-friendly applications.

                                Over the past year, I’ve built several projects ranging from static frontend websites to full-stack applications with user authentication, API integration, and responsive design. My most recent project, Job Seek, is a complete job search platform that reflects my ability to architect and execute end-to-end solutions.

                                While Java remains my go-to language for its versatility and depth, I actively work with JavaScript, React, and modern web technologies to stay current in the fast-evolving dev world. I'm always excited to learn new tools, collaborate with other developers, and build software that makes an impact.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[1px] border border-x-slate-600 w-[93%] mx-auto sm:mt-0 mt-10"></div>
        </>
    )
}
export default About;