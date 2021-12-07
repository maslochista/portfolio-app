import "./App.css";
import React, { useState } from "react";
import elm_screenshot from "./assets/elm_screenshot.png";
import uni_find_screenshot from "./assets/uni_search_screenshot.png";
import portfolio_screenshot from "./assets/portfolio_screenshot.png";
import ps_screenshot from "./assets/pois_chiche_screenshot.png";
import CV from "./assets/CV_Coding.pdf";

function App() {
  return (
    <div>
      <Menu></Menu>
    </div>
  );
}

function Menu(props) {
  const [navLinks, setNavLinks] = useState("nav-links");
  const [landing, setLanding] = useState("landing.open");
  const [work, setWork] = useState("");
  const [hamburger, setHamburger] = useState("menu-button fa fa-bars fa-2x");
  const [projects, setProjects] = useState("projects-section-open");
  const [skills, setSkills] = useState("skills-open");
  const [about, setAbout] = useState("about");
  const [projectsSingle, setProjectSingle] = useState("projectsSingle");
  const [contactInfo, setContactInfo] = useState("contact-info-hidden");
  const menuList = [
    ["ABOUT", "#about"],
    ["PROJECTS", "#projects"],
    ["RESUME", CV],
  ];

  const handleHamburger = () => {
    if (hamburger === "menu-button fa fa-bars fa-2x") {
      setHamburger("menu-button fa fa-times fa-2x");
      setNavLinks("nav-links-open");
      setWork("work");
      setLanding("landing");
      setProjects("projects-section");
      setSkills("skills");
      setProjectSingle("projectsSingle");
      setAbout("about");
    } else {
      setNavLinks("nav-links");
      setHamburger("menu-button fa fa-bars fa-2x");
      setLanding("landing-open");
      setWork("");
      setProjects("projects-section-open");
      setSkills("skills-open");
      setProjectSingle("projectsSingle");
      setAbout("about");
    }
  };

  const handleAbout = () => {
    if (about === "about") {
      setNavLinks("nav-links");
      setAbout("about-open");
      setSkills("skills-open");
      setWork("");
    } else {
      setNavLinks("nav-links-open");
      setAbout("about");
    }
  };

  const handleProjectsSingle = () => {
    if (projectsSingle === "projectsSingle") {
      setNavLinks("nav-links");
      setProjectSingle("projectsSingle-open");
      setProjects("projects-section-open");
    } else {
      setProjectSingle("projectsSingle");
      setNavLinks("nav-links-open");
    }
  };

  const handleContactMe = () => {
    if (contactInfo === "contact-info-hidden") {
      setContactInfo("contact-info-wrapper");
    } else setContactInfo("contact-info-hidden");
  };

  return (
    <div className="wrapper">
      <div id="hamburger">
        <a
          href="#menu"
          className={hamburger}
          onClick={handleHamburger}
          title="Open/Close for more information."
          tabindex="0"
        >
          <span></span>
        </a>
      </div>

      <div className={contactInfo}>
        <main className="contact-info">
          <ul>
            <li>
              email: <br></br>
              <a href="mailto:mwarczok.ewa@gmail.com" title="Send me an email.">
                mwarczok.ewa@gmail.com
              </a>
            </li>
            <li>
              phone: <br></br>
              <a href="tel:+48602182786" title="Call me.">
                0048602182786
              </a>
            </li>
            <li>
              linkedIn: <br></br>
              <a href="https://www.linkedin.com" title="Open my linkedIn.">
                @ewa-maslocha-warczok
              </a>
            </li>
          </ul>
          <button
            className="close-contact fa fa-times fa-2x"
            onClick={handleContactMe}
            tabindex="0"
          ></button>
        </main>
      </div>

      <section className={landing}>
        <main className="welcome">
          <h3 className="background-text">HELLO</h3>
          <div class="hi-wrapper">
            <h1>
              Hi!<br></br>I'm Ewa and I like to style things.
            </h1>
          </div>
          <h2>WEB DEVELOPER</h2>
          <div className="skillset">
            <div className="">HTML</div> /<div className="red-text">CSS3</div> /
            <div className="light-blue-text">React</div>{" "}
            <div className="">JS</div>/<div className="red-text">Java</div>
            <div className="">Script</div>
          </div>
          <button className="button-contact2" onClick={handleContactMe} tabindex="0">
            Contact Me!
          </button>
        </main>

        <div className="scroll-sign">-SCROLL-ME-</div>
      </section>

      <section className={work} id="work">
        <div className="work-intro">
          <h3 className="background-text" id="#about">
            INFO
          </h3>
          <h1>
            Background Check & Hustle<p>*(kind of)</p>
          </h1>

          <div class="work-grid">
            <div className="work-description blue-box-shadow">
              <p>
                My story with coding started in high school with Pascal, though
                we didn't leave the relationship on a good note. I finished a BA
                of Arts in BIMM University, just to later discover my love to
                technology and web development.
                <br></br>
                <br></br>Now, I cannot imagine a day without a line of code. See
                some of my work below - more coming soon!
              </p>
            </div>

            <div className="socials-box white-box-shadow">
              <h3>Click for more.</h3>
              <a
                href="https://www.linkedin.com/in/ewa-masłocha-warczok-1820431b7/"
                target="_blank"
                rel="noreferrer"
                title="Open my LinkedIn in a new window"
                tabindex="0"
              >
                <i class="fa fa-linkedin" />
              </a>
              <a
                href="https://codepen.io/ewa-masocha-warczok"
                target="_blank"
                rel="noreferrer"
                title="See my smaller Projects in a new window"
                tabindex="0"
              >
                <i class="fab fa-codepen" />
              </a>
              <a
                href="https://github.com/maslochista"
                target="_blank"
                rel="noreferrer"
                title="Open my GitHub Account in a new window"
                tabindex="0"
              >
                <i class="fa fa-github" />
              </a>
            </div>

            <div className="work-description red-box-shadow">
              Working as a freelance web developer using technlogies as:
              <ul>
                <li>
                  <p>HTML5 / CSS3 / Vanilla JS</p>
                </li>
                <li>
                  <p>React, Redux, Bootstrap, SASS & JQuery</p>
                </li>
                <li>REST API's, forms with PHP & MySQL</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={projects}>
        <h3 className="background-text">WORK</h3>
        <main className="projects-grid">
          <div className="project-box">
            <a 
              href="https://elm-opole.com" 
              target="_blank" 
              rel="noreferrer"
              tabindex="0"
            >
              <div className="project-flip-inner">
                <div className="project-front">
                  <img src={elm_screenshot} alt="E.L.M. Website Screeshot" />
                </div>
                <div className="project-back">
                  <h1>E.L.M. BUSINESS WEBSITE</h1>
                  <p>Live & Functioning</p>
                  <p>HTML / CSS / JS / PHP / MySQL</p>
                </div>
              </div>
            </a>
          </div>
          <div className="project-box">
            <a
              href="../../uni-find/index.html"
              target="_blank"
              rel="noreferrer"
              tabindex="0"
            >
              <div className="project-flip-inner">
                <div className="project-front">
                  <img
                    src={uni_find_screenshot}
                    alt="Uni Filter Website Screeshot"
                  />
                </div>
                <div className="project-back">
                  <h1>FILTER UNI APP</h1>
                  <p>Using Public API Project</p>
                  <p class="comment-p">*works only without https://</p>
                  <p>JS / BOOTSTRAP / CSS / API</p>
                </div>
              </div>
            </a>
          </div>
          <div className="project-box">
            <a
              href="../../POIS-CHICHE/index.html"
              target="_blank"
              rel="noreferrer"
              tabindex="0"
            >
              <div className="project-flip-inner">
                <div className="project-front">
                  <img
                    src={ps_screenshot}
                    alt="Pois-Chiche Store Website Screeshot"
                  />
                </div>
                <div className="project-back">
                  <h1>CLOTHING STORE</h1>
                  <p>(Front-End)</p>
                  <p>Development In Progress / Demo</p>
                  <p>VANILLA JS / JQuery / CSS </p>
                </div>
              </div>
            </a>
          </div>
          <div className="project-box">
            <a href="https://ewa-mwarczok.com" target="_blank" rel="noreferrer" tabindex="0">
              <div className="project-flip-inner">
                <div className="project-front">
                  <img
                    src={portfolio_screenshot}
                    alt="Portfolio website screenshot"
                  />
                </div>
                <div className="project-back">
                  <h1>PORTFOLIO WEBSITE</h1>
                  <p>Live & Functioning</p>
                  <p>REACT JS / CSS</p>
                </div>
              </div>
            </a>
          </div>
        </main>
      </section>

      <section className={skills}>
        <h3 className="background-text">SKILLS</h3>
        <main className="skillset-wrap">
          <h1>Skillset Overview</h1>
          <div className="flex-skills">
            <div className="skill-show html">HTML</div>
            <div className="skill-show css">CSS</div>
            <div className="skill-show js">JS</div>
            <div className="skill-show react">REACT</div>
            <div>+ jQuery, Redux, Bootstrap, SCSS, SASS</div>
          </div>
        </main>
      </section>

      <section className={navLinks}>
        <main className="menu-wrapper">
          <div className="menu-intro">Go on, don't be shy!</div>
          <ul>
            <a href={menuList[0][1]} onClick={handleAbout} tabindex="0">
              <li>{menuList[0][0]}</li>
            </a>
            <a href={menuList[1][1]} onClick={handleProjectsSingle} tabindex="0">
              <li>{menuList[1][0]}</li>
            </a>
            <a href={menuList[2][1]} target="_blank" rel="noreferrer" tabindex="0">
              <li>{menuList[2][0]}</li>
            </a>
          </ul>
        </main>
      </section>
    </div>
  );
}

export default App;
