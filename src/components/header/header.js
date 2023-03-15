import React from "react";
import "../../styles/styles.css";

function Header(props) {
  const { scrollToTop, scrollToSkills, scrollToProjects, scrollToContact } =
    props;

  return (
    <header>
      <nav>
        <ul className="links">
          <li>
            <a onClick={scrollToTop}>Home</a>
          </li>
          <li>
            <a onClick={scrollToSkills}>Skills</a>
          </li>
          <li>
            <a onClick={scrollToProjects}>Projects</a>
          </li>
          <li>
            <a onClick={scrollToContact}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
