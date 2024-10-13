import React from "react";
import me from "../assets/me.png";
import github from "../assets/github.png"

function Contact() {
    return (
        <>
            <div id="contact" className="conatainer h-auto sm:h-[80vh] w-full bg-slate-50 mt-16 mb-3">
                <div className="contact-info h-auto w-[90%] mx-auto  px-6 rounded-[15px] pb-10 text-white bg-cover sm:bg-contain bg-no-repeat bg-center sm:bg-right bg-black" style={{backgroundImage:`url(${me})`}}>
                    <h2 className="text-[32px] font-bold text-white text-center underline underline-offset-4 decoration-red-500 pb-8 pt-4">Contact Me</h2>
                    <div className="h-full w-full bg-gradient-to-l from-transparent to-[rgba(0,0,0,0.3)] rounded-[15px]">
                    <div className="flex sm:flex-row flex-col justify-evenly items-center bg-[rgba(0,0,0,0.7)] sm:bg-[rgba(0,0,0,0.3)] rounded-[15px] py-6">
                        <div className="my-6 flex flex-col justify-center hover:scale-[102%] transition-all duration-200">
                            <img width="200" height="200" src="https://img.icons8.com/clouds/200/gmail-new.png" alt="gmail-new" className="h-[100px] w-[100px] sm:h-[200px] sm:w-[200px]"/>
                            <p className="text-[32px] underline underline-offset-4 decoration-red-500 text-center sm:ml-6">Email:</p>
                            <a href="mailto:sohiltoryt@gmail.com" className="text-center sm:ml-6 hover:underline decoration-red-500">Mail Me</a>
                        </div>

                        <div className="my-3 flex flex-col justifycenter hover:scale-[102%] transition-all duration-200" >
                            <img width="200" height="200" src={github} alt="github" className="rounded-[100%] h-[100px] w-[100px] sm:h-[200px] sm:w-[200px]"/>
                            <p className="text-[32px] underline underline-offset-4 decoration-red-500 text-center">Github:</p>
                            <a href="https://github.com/Sohil-Magixz" target="_blank" className="text-center hover:underline decoration-red-500">Sohil-Magixz</a>
                        </div>

                        <div className="my-3 flex flex-col justifycenter hover:scale-[102%] transition-all duration-200">
                            <img width="200" height="200" src="https://img.icons8.com/color/240/linkedin.png" alt="linkedin" className="h-[100px] w-[100px] sm:h-[200px] sm:w-[200px]" />
                            <p className="text-[32px] underline underline-offset-4 decoration-red-500 text-center">Linkedin:</p>
                            <a href="https://www.linkedin.com/in/sohil-lochan/" target="_blank" className="text-center hover:underline decoration-red-500">Sohil Lochan V</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;