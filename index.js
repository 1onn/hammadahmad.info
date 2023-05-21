<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Hammad's Portfolio</title>
    <meta name="description" content="Portfolio Template for Developer" />

    <link rel="stylesheet" href="css/style.css" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700;900&display=swap"
      rel="stylesheet"
    />
    <link
      rel="icon"
      type="image/x-icon"
      href="./assets/favicon/code-favicon.png"
    />
  </head>
  <body>
    <header class="header">
      <div class="header__content">
        <div class="header__logo-container">
          <div class="header__logo-img-cont">
            <img
              src="./assets/png/IMG_8918.PNG"
              alt="Hammad Ahmad logo"
              class="header__logo-img"
            />
          </div>
          <span class="header__logo-sub">Hammad Ahmad</span>
        </div>
        <div class="header__main">
          <ul class="header__links">
            <li class="header__link-wrapper">
              <a href="./index.html" class="header__link"> Home </a>
            </li>
            <li class="header__link-wrapper">
              <a href="./index.html#about" class="header__link">About </a>
            </li>
            <li class="header__link-wrapper">
              <a href="./index.html#projects" class="header__link">
                Projects
              </a>
            </li>
            <li class="header__link-wrapper">
              <a href="./index.html#resume" class="header__link"> Resume </a>
            </li>
          </ul>
          <div class="header__main-ham-menu-cont">
            <img
              src="./assets/svg/ham-menu.svg"
              alt="hamburger menu"
              class="header__main-ham-menu"
            />
            <img
              src="./assets/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              class="header__main-ham-menu-close d-none"
            />
          </div>
        </div>
      </div>
      <div class="header__sm-menu">
        <div class="header__sm-menu-content">
          <ul class="header__sm-menu-links">
            <li class="header__sm-menu-link">
              <a href="./index.html"> Home </a>
            </li>

            <li class="header__sm-menu-link">
              <a href="./index.html#about"> About </a>
            </li>

            <li class="header__sm-menu-link">
              <a href="./index.html#projects"> Projects </a>
            </li>
            <li class="header__sm-menu-link">
              <a href="./index.html#resume" class="header__link"> Resume </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <section class="home-hero">
      <div>
        <div class="home-hero__content">
          <h1 class="heading-primary">Hey, I'm Hammad Ahmad</h1>
          <div class="home-hero__info">
            <p class="text-primary">
              I'm a <span> Web Developer </span> who brings digital visions to
              life through code and creativity.
              <br />
              And This is my Portfolio Website
            </p>
          </div>
          <div class="home-hero__cta">
            <a href="./#projects" class="btn btn--bg">Projects</a>
          </div>
        </div>
        <div class="home-hero__socials">
          <div class="home-hero__social">
            <a
              href="https://www.linkedin.com/in/hammad-ahmad-408103241/"
              class="home-hero__social-icon-link"
            >
              <img
                src="./assets/png/linkedin-ico.png"
                alt="icon"
                class="home-hero__social-icon"
              />
            </a>
          </div>
          <div class="header__sm-menu">
            <div class="header__sm-menu-content">
              <ul class="header__sm-menu-links">
                <li class="header__sm-menu-link">
                  <a href="./index.html"> Home </a>
                </li>

                <li class="header__sm-menu-link">
                  <a href="./index.html#about"> About </a>
                </li>

                <li class="header__sm-menu-link">
                  <a href="./index.html#projects"> Projects </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="home-hero__social">
            <a
              href="https://github.com/1oNN"
              class="home-hero__social-icon-link"
            >
              <img
                src="./assets/png/github-ico.png"
                alt="icon"
                class="home-hero__social-icon"
              />
            </a>
          </div>
        </div>
      </div>

      <div class="home-hero__mouse-scroll-cont">
        <div class="mouse"></div>
      </div>
    </section>
    <section id="about" class="about sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main">About Me</span>
          <span class="heading-sec__sub">
            I am a quick learner, dedicated and enthusiastic about mywork, and
            possess strong organizational skills. I have theability to handle
            multiple projects simultaneously with great accuracy.
          </span>
        </h2>
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main">My Skills</span>
        </h2>
        <div class="skills">
          <div class="skills__skills">
            <img
              class="header__logo-img-cont1"
              src="assets/logos/html5-logo.jpg"
              alt="HTML Logo"
              style="margin: auto"
            />
            HTML
          </div>

          <div class="skills__skills">
            <img
              class="header__logo-img-cont1"
              src="assets/logos/css3-logo.jpg"
              alt="CSS Logo"
              style="margin: auto"
            />
            CSS
          </div>

          <div class="skills__skills">
            <img
              class="header__logo-img-cont1"
              src="assets/logos/javascript-logo.png"
              alt="JavaScript Logo"
              style="margin: auto"
            />
            JavaScript
          </div>

          <div class="skills__skills">
            <img
              id="react"
              class="header__logo-img-cont1"
              src="assets/logos/react-logo.png"
              alt="React Logo"
              style="margin: auto"
            />
            React
          </div>

          <div class="skills__skills">
            <img
              class="header__logo-img-cont1"
              src="assets/logos/sass-logo.png"
              alt="SASS Logo"
              style="margin: auto"
            />
            SASS
          </div>

          <div class="skills__skills">
            <img
              class="header__logo-img-cont1"
              src="assets/logos/bootstrap-logo.png"
              alt="Bootstrap Logo"
              style="margin: auto"
            />
            Bootstrap
          </div>

          <div class="skills__skills">
            <img
              class="header__logo-img-cont1"
              src="assets/logos/bulma-logo.png"
              alt="Bulma Logo"
              style="margin: auto"
            />
            Bulma
          </div>

          <div class="skills__skills">
            <img
              class="header__logo-img-cont1"
              src="assets/logos/nodejs-logo.png"
              alt="Node.js Logo"
              style="margin: auto"
            />
            Node.js
          </div>

          <div class="skills__skills">
            <img
              id="express"
              class="header__logo-img-cont1"
              src="assets/logos/express-logo.png"
              alt="Express Logo"
              style="margin: auto"
            />
            Express
          </div>

          <div class="skills__skills">
            <img
              id="mongo"
              class="header__logo-img-cont1"
              src="assets/logos/mongoDB-logo.png"
              alt="MongoDB Logo"
              style="margin: auto"
            />
            MongoDB
          </div>

          <div class="skills__skills">
            <img
              class="header__logo-img-cont1"
              src="assets/logos/python-logo.png"
              alt="Python Logo"
              style="margin: auto"
            />
            Python
          </div>

          <div class="skills__skills">
            <img
              id="cpp"
              class="header__logo-img-cont1"
              src="assets/logos/cpp-logo.png"
              alt="C++ Logo"
              style="margin: auto"
            />
            C++
          </div>

          <div class="skills__skills">
            <img
              id="cpp"
              class="header__logo-img-cont1"
              src="assets/logos/git.png"
              alt="C++ Logo"
              style="margin: auto"
            />
            Git
          </div>
        </div>
      </div>
    </section>
    <section id="projects" class="projects sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-bg">
          <span class="heading-sec__main">Projects</span>
          <span class="heading-sec__sub">
            Here are some of my recent Projects
          </span>
        </h2>

        <div class="projects__content">
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src="./assets/jpeg/Screenshot (66).png"
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">Quiz App</h3>
              <p class="projects__row-content-desc">
                Developed a dynamic quiz application usingHTML, CSS, and
                JavaScript, allowing users toanswer multiple-choice questions
                and receiveinstant feedback on their score. Demonstrated
                proficiency in front-end-development by implementing features
                such asquestion loading, answer selection, scorecalculation, and
                quiz reset functionality.
              </p>
              <a
                href="./project-1.html"
                class="btn btn--med btn--theme dynamicBgClr"
                target="_blank"
                >Check it out!</a
              >
            </div>
          </div>
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src="./assets/jpeg/Screenshot (62).png"
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">Dog Tinder</h3>
              <p class="projects__row-content-desc">
                Created a web application using HTML, CSS,and Bootstrap.
                Implemented a responsive design and userauthentication.
              </p>
              <a
                href="./project-2.html"
                class="btn btn--med btn--theme dynamicBgClr"
                target="_blank"
                >Check it out!</a
              >
            </div>
          </div>
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src="./assets/jpeg/Screenshot (65).png"
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">Cake Factory Website</h3>
              <p class="projects__row-content-desc">
                Developed a website using HTML, CSS,Bootstrap, and JavaScript.
                <br />
                Designed an intuitive user interface toshowcase cake products.
              </p>
              <a
                href="./project-3.html"
                class="btn btn--med btn--theme dynamicBgClr"
                target="_blank"
                >Check it out!</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="resume" class="about sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main">Resume</span>
          <span class="heading-sec__sub">
            <a
              href="./assets/Resume.pdf"
              class="btn btn--med btn--theme dynamicBgClr"
              target="_blank"
              >Download!</a
            >
          </span>
        </h2>
      </div>
    </section>

    <footer class="main-footer">
      <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div class="main-footer__social-cont">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/hammad-ahmad-408103241/"
              >
                <img
                  class="main-footer__icon"
                  src="./assets/png/linkedin-ico.png"
                  alt="icon"
                />
              </a>
              <a target="_blank" href="https://github.com/1oNN">
                <img
                  class="main-footer__icon"
                  src="./assets/png/github-ico.png"
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h4 class="heading heading-sm text-lt">Hammad Ahmad</h4>
            <p class="main-footer__short-desc">Check out My socials</p>
          </div>
        </div>

        <div class="main-footer__lower">&copy; Copyright 2023</div>
      </div>
    </footer>

    <script src="./index.js"></script>
  </body>
</html>
