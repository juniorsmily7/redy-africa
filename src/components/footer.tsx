import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-700 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} REdy Africa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
