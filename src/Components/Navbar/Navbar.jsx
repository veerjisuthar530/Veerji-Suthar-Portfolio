import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu
  };

  return (
    <nav className="relative sticky top-0 z-50 bg-[#192A46]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo (left) */}
          <div className="flex-shrink-0 flex items-center px-8">
            <img src="src/assets/logo.png" alt="logo" width={60} height={50} />
          </div>

          {/* Mobile: Profile + Menu Button (right) */}
          <div className="flex items-center space-x-3 sm:hidden ml-auto">
            {/* Profile Avatar */}
            <div className="w-10 h-10 rounded-full ">
              <img
                src="src/assets/WhatsApp Image 2025-11-22 at 22.13.28_085d5587.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full bg-neutral-800"
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  className="w-6 h-6"
                >
                  <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  className="w-6 h-6"
                >
                  <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden sm:flex sm:ml-6 sm:items-center sm:justify-center flex-1">
            <div className="flex space-x-8">
              <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Home</a>
              <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">About Me</a>
              <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Projects</a>
              <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Services</a>
              <a href="#Myskills" onClick={(e) => handleLinkClick(e, 'Myskills')} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">My Skills</a>
              <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Contact Me</a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">Home</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">About Me</a>
            <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')} className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Projects</a>
            <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Services</a>
            <a href="#Myskills" onClick={(e) => handleLinkClick(e, 'Myskills')} className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">My Skills</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Contact Me</a>
          </div>
        </div>
      )}
    </nav>
  );
}
