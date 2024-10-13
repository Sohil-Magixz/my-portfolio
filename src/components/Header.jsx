import React from "react";
import Navbar from "./Navbar";
import insta from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import Hamburger from './Hamburger.jsx'
function Header(){
    return (
        <header className="flex justify-around sm:justify-center items-center rounded-b-[20px] bg-gray-200 w-full overflow-auto drop-shadow-sm mx-auto">
        <div className="flex flex-row justify-evenly items-center w-[80%] lg:w-[95%]">
        <div className="text-center inline-flex justify-start items-start bg-slate500 sm:w-[50%] w-[80%]">
            <h1 className="textscenter text-[35px] overflow-hidden">My Portfolio</h1>
        </div>
        <Navbar />
        <div className="hidden justify-center items-center h-full w-auto sm:flex bg-slate00">
            <a href="https://www.instagram.com/sohil_trgsx/" target="_blank"><img src={insta} className="h-[30px] mx-8"></img></a>
            <a href="https://www.linkedin.com/in/sohil-lochan/" target="_blank"><img src={linkedin} className="h-[30px] mx-8"></img></a>
            <a href="https://github.com/Sohil-Magixz" target="_blank"><img width="250" height="250" src="https://img.icons8.com/ios-filled/250/1A1A1A/github.png" alt="github" className="w-[30px]  mx-8"/></a>
        </div>
        <Hamburger/>
        </div>
        </header>
    );
}

export default Header;