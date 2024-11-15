import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to track scroll position
  const handleScroll = () => {
    if (window.scrollY > 50) {  // Adjust this value to control when the width change happens
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white sticky top-0 shadow-lg rounded-b-3xl py-4 px-8 z-50 transition-all duration-300 ${
        isScrolled ? "max-w-[80%]" : "max-w-screen-xl"
      } mx-auto`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <img
          src="https://redytalent.com/jobs/storage/redy-talent-logo-1.png"
          alt="REdy Talent Logo"
          className="h-12"
        />

        {/* Navbar Links */}
        <div className="flex space-x-8 mx-auto">
          <a
            href="#right-for-education"
            className="text-gray-800 text-lg hover:text-red-700 transition duration-300"
          >
            Right for Education
          </a>
          <a
            href="#redy-talent"
            className="text-gray-800 text-lg hover:text-red-700 transition duration-300"
          >
            REdy Talent
          </a>
          <a
            href="#afrikan-gallery"
            className="text-gray-800 text-lg hover:text-red-700 transition duration-300"
          >
            Afrikan Gallery
          </a>
          <a
            href="#insights"
            className="text-gray-800 text-lg hover:text-red-700 transition duration-300"
          >
            Insights
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
