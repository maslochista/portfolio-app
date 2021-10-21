import './App.css';
import React, {useState} from "react";
import elm_screenshot from './assets/elm_screenshot.png';
import uni_find_screenshot from './assets/uni_search_screenshot.png';
import portfolio_screenshot from './assets/portfolio_screenshot.png';
import ps_screenshot from './assets/pois_chiche_screenshot.png';
import CV from './assets/CV_Coding.pdf';


function App() {

    return ( 
      <div>
        <Menu>
        </Menu>
        <About id="about">
        </About>
      </div>
    );
}

function Menu(props) {

  const [navLinks, updateNavLinks] = useState('nav-links');
  const [landing, updateLanding] = useState('landing.open');
  const [work, updateWork] = useState('');
  const [hamburger, updateHamburger] = useState('menu-button fa fa-bars fa-2x');
  const [projects, updateProjects] = useState('projects-section-open');
  const [skills, updateSkills] = useState('skills-open');
  const [about, updateAbout] = useState('about');
  const [projectsSingle, updateProjectSingle] = useState('projectsSingle');
  const [contactInfo, updateContactInfo] = useState('contact-info-hidden');
  const menuList = [['ABOUT', '#about'], ['PROJECTS', '#projects'], ['RESUME', CV]];

  const handleHamburger = () => {
    if (hamburger === "menu-button fa fa-bars fa-2x") {
      updateHamburger('menu-button fa fa-times fa-2x')
      updateNavLinks("nav-links-open");
      updateWork('work');
      updateLanding('landing');
      updateProjects('projects-section');
      updateSkills('skills');
      updateProjectSingle('projectsSingle');
      updateAbout('about');
    }
    else {
      updateNavLinks("nav-links");
      updateHamburger('menu-button fa fa-bars fa-2x')
      updateLanding('landing-open');
      updateWork('');
      updateProjects('projects-section-open');
      updateSkills('skills-open');
      updateProjectSingle('projectsSingle');
      updateAbout('about');
    }
  }

  const handleAbout = () => {
    if (about === 'about') {
      updateNavLinks("nav-links");
      updateAbout('about-open');
      updateSkills('skills-open');
      updateWork('');
    }
    else {
      updateNavLinks("nav-links-open");
      updateAbout('about');
    }
  }

  const handleProjectsSingle = () => {
    if (projectsSingle === 'projectsSingle') {
      updateNavLinks("nav-links");
      updateProjectSingle('projectsSingle-open');
      updateProjects('projects-section-open');
    }
    else {
      updateProjectSingle('projectsSingle');
      updateNavLinks("nav-links-open");
    }
  }

  // const handleResume = () => {
  //     window.open('portfolio-app/src/CV_Coding.pdf', '_blank');
  // }

  const handleContactMe = () => {
    if (contactInfo === 'contact-info-hidden') {
      updateContactInfo("contact-info-wrapper");
    }
    else updateContactInfo("contact-info-hidden")
  }

  return (
    <div className="wrapper">
      <div id="hamburger">
        <a href="#menu" className={hamburger} onClick={handleHamburger}><span></span></a>
      </div>

      <div className={contactInfo}>
      <div className="contact-info">
        <ul>
          <li>email: <br></br>
            <a href="mailto:mwarczok.ewa@gmail.com">mwarczok.ewa@gmail.com</a>
          </li>
          <li>phone: <br></br>
            <a href="tel:+48602182786">0048602182786</a>
          </li>
          <li>linkedIn: <br></br>
            <a href="https://www.linkedin.com">@ewa-maslocha-warczok</a>
          </li>
        </ul>
        <button className="close-contact fa fa-times fa-2x" onClick={handleContactMe}></button>
      </div>
      </div>

      <section className={landing}>

        <div className="welcome">
        <div className="background-text">HELLO</div>
            <div class="hi-wrapper">
              <h1>Hi!<br></br>I'm Ewa and I like to style things.</h1>
            </div>
          <h2>FRONT END WEB-DEVELOPER</h2>
          <div className="skillset">
            <div className="">HTML5</div> / 
            <div className="red-text">CSS</div> /
            <div className="light-blue-text">JS</div> 
          </div>
          <button className="button-contact2" onClick={handleContactMe}>Contact Me!</button>
          {/* <div class="shape"></div> */}
        </div>
        <div className="scroll-sign">-SCROLL-ME-</div>

      </section>

      <section className={work} id="work">

        <div className="work-intro">
        <div className="background-text" id="#about">INFO</div>
          <h1>Background Check & Hustle<p>*(kind of)</p></h1>
          <div className="work-description blue-box-shadow">
            <p>My story with coding started in high school with Pascal, though we didn't leave the relationship on a good note. 
              I finished a BA of Arts in BIMM University, just to later discover my love to technology and web development.
            </p>
          </div>
          <div className="work-description red-box-shadow">
            So far I have worked with mainly: 
              <ul>
                <li>Languages: 
                  <p>HTML5 / CSS / Vanilla JS</p>
                  </li>
                <li>Frameworks: 
                  <p>React, Bootstrap, SASS & JQuery</p>
                  </li>
                <li>API's & forms with PHP</li>
              </ul>
          </div>
        </div>
        <div className="socials-box white-box-shadow">
          Here're some links.
          <ul>
            <li><a href="https://www.linkedin.com/in/ewa-masłocha-warczok-1820431b7/" target="_blank" rel="noreferrer">Linked In</a></li>
            <li><a href="https://codepen.io/ewa-masocha-warczok" target="_blank" rel="noreferrer">Code Pen</a></li>
            <li><a href="https://github.com/maslochista" target="_blank" rel="noreferrer">Git Hub</a></li>
          </ul>
        </div>

      </section>

      <section className={projects}>
        <div className="background-text">WORK</div>
        <div className="projects-grid">

          <div className="project-box">
            <a href="https://elm-opole.com" target="_blank" rel="noreferrer">
              <div className="project-flip-inner">
                <div className="project-front">
                  <img src={elm_screenshot} alt="" />
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
            <a href="../../uni-find/index.html" target="_blank" rel="noreferrer">
              <div className="project-flip-inner">
                <div className="project-front">
                  <img src={uni_find_screenshot} alt="" />
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
            <a href="../../POIS-CHICHE/index.html" target="_blank" rel="noreferrer">
              <div className="project-flip-inner">
                <div className="project-front">
                  <img src={ps_screenshot} alt=""/>
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
            <a href="https://ewa-mwarczok.com" target="_blank" rel="noreferrer">
              <div className="project-flip-inner">
                <div className="project-front">
                  <img src={portfolio_screenshot} alt="" />
                </div>
                <div className="project-back">
                  <h1>PORTFOLIO WEBSITE</h1>
                  <p>Live & Functioning</p>
                  <p>REACT JS / CSS</p>
                </div>
              </div>
            </a>
          </div>

        </div>

      </section>

      <section className={skills}>
        <div className="background-text">SKILLS</div>
          <div className="skillset-wrap">
            <h1>Skillset Overview</h1>
            <div className="flex-skills">
              <div className="skill-show html">HTML</div>
              <div className="skill-show css">CSS</div>
              <div className="skill-show js">JS</div>
              <div className="skill-show react">REACT</div>
              </div>
          </div>
      </section>

      <section className={navLinks}>
        <div className="menu-wrapper">
            <div className="menu-intro">Go on, don't be shy!</div> 
          <ul>
              <a href={menuList[0][1]} onClick={handleAbout}><li>{menuList[0][0]}</li></a>
              <a href={menuList[1][1]} onClick={handleProjectsSingle}><li>{menuList[1][0]}</li></a>
              <a href={menuList[2][1]} target="_blank" rel="noreferrer" ><li>{menuList[2][0]}</li></a>
          </ul>
        </div>
      </section>

    </div>
  )
}

function About() {
  return (
    <div>
    </div>
  )
}

export default App;