import React from "react";
import "./App.css";
import Banner from "./assets/componets/banner/Banner";
import Contact from "./assets/componets/contact/Contact";
import Features from "./assets/componets/features/Features";
import Navbar from "./assets/componets/navbar/Navbar";
import Project from "./assets/componets/projects/Project";
import Resume from "./assets/componets/resume/Resume";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar />
        <Banner />
        <Features />
        <Project />
        <Resume />
        <Contact />
        {/* <Footer /> */}
      </div>
    </div>
  );
}
export default App;
