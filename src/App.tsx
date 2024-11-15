import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RightForEducation from "./components/Rightforeducation";
import RedyTalent from "./components/RedyTalent";
import AfrikanGallery from "./components/AfrikanGallery";
import Insights from "./components/Insights";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <RightForEducation />
      <RedyTalent />
      <AfrikanGallery />
      <Insights />
      <Footer />
    </div>
  );
};

export default App;
