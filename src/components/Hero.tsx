import React from "react";

const Hero = () => {
  return (
    <section
      className="h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: 'url(https://img.freepik.com/premium-photo/happy-black-people-illustration_1302776-159.jpg?semt=ais_hybrid)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Fixed background effect during scroll
        height: '100vh',
      }}
    >
      {/* Overlay for darkening the image */}
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Dark overlay to improve text readability */}

      <div className="text-center text-white relative px-4 py-8 z-10">
        <h1 className="text-5xl font-bold mb-4">Welcome to REdy Africa</h1>
        <p className="text-lg mb-6">
          Empowering Africa’s future through education, career development, and art.
        </p>
        <button className="bg-white text-red-700 py-2 px-6 rounded-full text-xl hover:bg-gray-200">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
