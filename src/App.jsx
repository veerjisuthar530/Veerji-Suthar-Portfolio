// ...existing code...
import React from "react";
import "./index.css"; // ensure index.css is imported
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import AboutMe from "./Components/AboutMe/About.jsx";
import Services from "./Components/Services/Services.jsx";
import MySkills from "./Components/MySkills/MySkills.jsx";
import Project from "./Components/Projects/Project.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import Footer from "./Components/Footer/Footer.jsx";


function App() {
  return (
    <>
      {/* top-level wrapper uses site-bg so page background uses the new palette */}
      <div className="site-bg min-h-screen text-site">
        <Navbar />
        <Hero />
        <AboutMe />
        <Services />
        <MySkills />
        <Project />
        <ContactUs />
        <Footer />
        
        
      </div>
    </>
  );
}

export default App;
// ...existing code...