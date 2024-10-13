import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto text-center">
        <div className="mb-2">
          <p>© {new Date().getFullYear()} Sohil Lochan. All rights reserved.</p>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/Sohil-Magixz" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/sohil-lochan" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
            LinkedIn
          </a>
          <a href="mailto:sohiltoryt@gmail.com" className="hover:text-red-500">
            Email
          </a>
          <a href="https://instagram.com/sohil_trgsx" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
