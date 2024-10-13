import React from "react";

function Contact() {
    return (
        <>
        <div className="conatainer h-[80vh] w-full bg-slate-50 mt-16">
            <div className="contact-info h-full w-[90%] mx-auto bg-black text-white px-6 rounded-[15px]">
                <h2 className="text-2xl font-bold text-center underline underline-offset-4 decoration-red-500 py-12">Contact Me</h2>
                <p>Email: <a href="mailto:sohil@example.com">sohil@example.com</a></p>
                <p>GitHub: <a href="https://github.com/Sohil-Magixz" target="_blank" rel="noopener noreferrer" className="hover:underline">Sohil-Magixz</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/sohil" target="_blank" rel="noopener noreferrer" className="hover:underline">Sohil's LinkedIn</a></p>
            </div>
        </div>
        </>
    )
}

export default Contact;