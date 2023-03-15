import "./App.css";
import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import Skills from "./routes/skills/skills";
import Projects from "./routes/projects/projects";
import Contact from "./routes/contact/contact";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <Header
        scrollToTop={() => scrollToRef(homeRef)}
        scrollToSkills={() => scrollToRef(skillsRef)}
        scrollToProjects={() => scrollToRef(projectsRef)}
        scrollToContact={() => scrollToRef(contactRef)}
      />
      <Home />
      <section ref={homeRef}>
        <Home></Home>
      </section>
      <section ref={skillsRef}>
        <Skills></Skills>
      </section>
      <section ref={projectsRef}>
        <Projects></Projects>
      </section>
      <section ref={contactRef}>
        <Contact></Contact>
      </section>

      <Footer />
    </Router>
  );
}

export default App;
