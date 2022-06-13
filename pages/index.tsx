import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import selfie from "../public/images/selfie.png";
import Typewriter from "typewriter-effect";
import { getSortedPostsData } from "../lib/posts";
import Skills from "../components/Skills";
import Tags from "../components/Tags";
import WorkTogetherForm from "../components/WorkTogetherForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faB,
  faEnvelope,
  faFilePdf,
  faMailBulk,
  faMailForward,
  faMailReply,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faGitlab,
  faInstagram,
  faLinkedinIn,
  faMastodon,
  faSoundcloud,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | B08waffles</title>
      </Head>
      <section className="hero is-success is-fullheight-with-navbar has-background-grey-darker bg-img">
        {" "}
        <div className="hero-body ">
          <div className="">
            <p className="title has-text-light is-size-1-desktop is-size-2-tablet is-size-3-mobile">
              Hi, {"I'm"} Brandon.
            </p>
            <Typewriter
              options={{
                strings: ["Web Developer", "Musician", "Blogger"],
                autoStart: true,
                loop: true,
                wrapperClassName:
                  "has-text-light is-size-2-desktop is-size-3-tablet is-size-4-mobile",
                cursorClassName:
                  "has-text-light is-size-2-desktop is-size-3-tablet is-size-4-mobile",
              }}
            />
          </div>
        </div>{" "}
        <div className="hero-foot is-size-1-desktop is-size-2-touch has-text-white">
          {"   "}{" "}
          <a href="https://github.com/B08waffles">
            {"   "}
            <FontAwesomeIcon icon={faGithub} />{" "}
          </a>
          <a href="https://www.linkedin.com/in/bkane95">
            {" "}
            <FontAwesomeIcon icon={faLinkedinIn} />{" "}
          </a>{" "}
          <a href="/Resume.pdf">
            {" "}
            <FontAwesomeIcon icon={faFilePdf} />{" "}
          </a>{" "}
          <a href="mailto:b08waffles@protonmail.com">
            {" "}
            <FontAwesomeIcon icon={faEnvelope} />{" "}
          </a>
          <a href="https://gitlab.com/b08waffles">
            <FontAwesomeIcon icon={faGitlab} />
          </a>
          <a href="https://twitter.com/b08waffles">
            {" "}
            <FontAwesomeIcon icon={faTwitter} />{" "}
          </a>
        </div>
      </section>
      <section
        className="section has-background-warning"
        
        style={{ boxShadow: "10px 10px 5px #23252f" }}
      >
        <h1 className="title has-text-primary is-size-2-desktop is-size-3-tablet is-size-4-mobile has-text-centered">
          The Essentials
        </h1>
        <br />
        <div className="columns">
          <div className="column"></div>
          <div className="column is-half has-text-justified has-text-light is-size-5-desktop is-size-6-touch">
            <p>
              {" "}
              Hey, {"I'm"} Brandon! I first started tinkering with computers in the
              glory days of Windows 95 and {"I've"} been addicted ever since!
              Outside of my studies, {"I'm"} an avid reader, cyclist, musician and
              Linux enthusiast.
            </p>
            <br />
            <p>
              I recently completed my Diploma in Website Developent at
              <a href="https://tafeqld.edu.au"> TAFE QLD</a>{"'s"} South Bank Campus
              where I created the Capitalisation System
              <a href="https://starterupp.com"> STARTER UPP</a> as my final
              project. Now I work part-time as a full-stack web developer for
              <a href="https://powerlake.com"> https://powerlake.com</a> and as
              a freelance developer. My current work involves developing
              automated systems for energy usage optimisation, full stack web
              development with Flask, PostgreSQL and React, and as lead
              guitarist of my band
              <a href="https://lucidprofessor.com"> Lucid Professor</a>.
            </p>
          </div>
          <div className="column"></div>
        </div>
      </section>
      <section
        className="section has-background-grey-darker"
        style={{ boxShadow: "10px 10px 5px #23252f" }}
      >
        <h1 className="title has-text-success is-size-2-desktop is-size-3-tablet has-text-centered">
          Projects
        </h1>
        <br />
        <div className="columns">
          <div className="column is-half">
            <div
              className="card has-background-warning has-text-light"
              style={{ boxShadow: "10px 10px 5px #23252f" }}
            >
              {/* <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image">
                  <Image
                    src={powerlake}
                    height={400}
                    width={600}
                    alt="powerlake screenshot"
                  />
                </figure>
              </div>
            </div>
          </div>*/}
              <div className="card-content">
                <div className="media-content">
                  <p className="title is-size-3-desktop is-size-4-tablet is-size-5-touch has-text-white">
                    Powerlake
                  </p>
                  <p className="subtitle is-size-5-desktop is-size-6-touch">
                    <a href="https://powerlake.com">https://powerlake.com</a>{" "}
                  </p>
                  <div className="content is-size-5-desktop is-size-6-touch">
                    Powerlake is an energy saving tool that allows users to
                    automate their electrical applianc{"es'"} operation times,
                    according to current and predicted electricity prices, and
                    renewables preference, potentially saving on electrical
                    bills and usage. The idea is to switch devices on when
                    needed and match it to when electricity is at its cheapest.
                  </div>
                  <div className="field is-grouped is-grouped-multiline">
                    <Tags tag="Flask" />
                    <Tags tag="React" />
                    <Tags tag="Python" />
                    <Tags tag="JavaScript" />
                    <Tags tag="Webpack" />
                    <Tags tag="Gunicorn" />
                    <Tags tag="CSS3" />
                    <Tags tag="Bootstrap" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-half">
            <div
              className="card has-background-warning has-text-light"
              style={{ boxShadow: "10px 10px 5px #23252f" }}
            >
              <div className="card-content">
                <div className="media-content">
                  <p className="title is-size-3-desktop is-size-4-tablet is-size-5-mobile has-text-white">
                    B08waffles
                  </p>
                  <p className="subtitle is-size-5-desktop is-size-6-touch">
                    <a href="https://b08waffles.com">https://b08waffles.com</a>{" "}
                  </p>
                  <div className="content is-size-5-desktop is-size-6-touch">
                    This site is an ongoing project of mine. Using Next.js as
                    the architectural framework and Bulma.css as the layout
                    framework {"I'm"} able to rapidly develop a simple Blog and
                    Portfolio site. Additional content and features such as
                    comments and accounts are coming You can find the source
                    code for this site at{" "}
                    <a href="https://github.com/b08waffles/rumandblog">
                      https://github.com/b08waffles/rumandblog
                    </a>
                    .
                  </div>
                  <div className="field is-grouped is-grouped-multiline">
                    <Tags tag="Next.js" />
                    <Tags tag="TypeScript" />
                    <Tags tag="React" />
                    <Tags tag="SCSS" />
                    <Tags tag="Bulma.css" />
                    <Tags tag="Nodemailer" />
                    <Tags tag="HTML5" />
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
        </div>
        <div className="columns">
          <div className="column">
            <div
              className="card has-background-warning has-text-light"
              style={{ boxShadow: "10px 10px 5px #23252f" }}
            >
              <div className="card-content">
                <div className="media-content">
                  <p className="title is-size-3-desktop is-size-4-tablet is-size-5-mobile has-text-white">
                    STARTER UPP
                  </p>
                  <p className="subtitle is-size-5-desktop is-size-6-touch">
                    <a href="https://starterupp.com">https://starterupp.com</a>{" "}
                  </p>
                  <div className="content is-size-5-desktop is-size-6-touch">
                    STARTER UPP is a capitalisation system. It allows users to
                    create companies, invite employees to join and create
                    transactions with either {'"Money invested"'} or {'"Hours worked"'}
                    in order to track employer/employee statistics. Data is
                    presented in variable charts, cards and tables. This was my
                    final project in completion of my Diploma of Website
                    Development.
                  </div>
                  <div className="field is-grouped is-grouped-multiline">
                    <Tags tag="Django" />
                    <Tags tag="Python" />
                    <Tags tag="Django Rest Framework" />
                    <Tags tag="React" />
                    <Tags tag="SCSS" />
                    <Tags tag="TypeScript" />
                    <Tags tag="Parcel" />
                    <Tags tag="Bootstrap" />
                    <Tags tag="Workbox" />
                    <Tags tag="Gunicorn" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div
              className="card has-background-warning has-text-light"
              style={{ boxShadow: "10px 10px 5px #23252f" }}
            >
              <div className="card-content">
                <div className="media-content">
                  <p className="title is-size-3-desktop is-size-4-touch has-text-white">
                    Lucid Professor
                  </p>
                  <p className="subtitle is-size-5-desktop is-size-6-touch">
                    <a href="https://lucidprofessor.com">
                      https://lucidprofessor.com
                    </a>{" "}
                  </p>
                  <div className="content is-size-5-desktop is-size-6-touch">
                    Lucid Professor is a Brisbane based Rock {"&"} Blues four piece
                    band. In addition to being a founding member of the band and
                    lead guitarist, I opted to make the {"band's"} website myself as
                    well. We are currently refining our content into a studio
                    album. You can find our music at{" "}
                    <a href="https://lucidprofessor.com">
                      https://lucidprofessor.com
                    </a>{" "}
                    and
                    <a href="https://soundcloud.com/lucidprofessor">
                      {" "}
                      https://soundcloud.com/lucidprofessor
                    </a>
                    .
                  </div>
                  <div className="field is-grouped is-grouped-multiline">
                    <Tags tag="WordPress" />
                    <Tags tag="CSS3" />
                    <Tags tag="HTML5" />
                    <Tags tag="siteground.com" />
                    <Tags tag="Cpanel" />
                    <Tags tag="PhpMyAdmin" /> <Tags tag="Apache" />
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
        </div>
      </section>
      <section
        className="section is-small has-background-warning"
        style={{ boxShadow: "10px 10px 5px #23252f" }}
      >
        <h1 className="title has-text-danger is-size-2-desktop is-size-3-tablet is-size-4-touch has-text-centered">
          Technologies I Use{" "}
        </h1>
        <br />
        <div className="colums is-8">
          <Skills
            ref1="http://www.djangoproject.com/"
            data1="Django"
            ref2="https://www.python.org/"
            data2="Python"
            ref3="https://flask.palletsprojects.com/"
            data3="Flask"
            ref4="https://www.w3.org/Style/CSS/"
            data4="CSS3"
          />
          <Skills
            ref1="https://www.typescriptlang.org/"
            data1="TypeScript"
            ref2="https://html.com/html5/"
            data2="HTML5"
            ref3="https://www.javascript.com/"
            data3="JavaScript"
            ref4="https://ejs.co/"
            data4="EJS"
          />
          <Skills
            ref1="https://sass-lang.com/"
            data1="SCSS & SASS"
            ref2="https://expressjs.com/"
            data2="Express.js"
            ref3="https://reactjs.org/"
            data3="React.js"
            ref4="https://nextjs.org/"
            data4="Next.js"
          />
          <Skills
            ref1="https://getbootstrap.com/"
            ref2="https://bulma.io/"
            data1="Bootstrap"
            data2="Bulma.css"
            ref3="https://picocss.com/"
            data3="Pico.css"
            data4="Parcel.js"
            ref4="https://parceljs.org/"
          />
          <Skills
            data1="Webpack"
            data2="Workbox"
            ref1="https://webpack.js.org/"
            ref2="https://developer.chrome.com/docs/workbox/"
            ref3="https://www.latex-project.org/"
            ref4="https://git-scm.com/"
            data3="LaTeX"
            data4="Git"
          />
          <Skills
            data1="Vim/NeoVim & VimScript"
            ref1="https://www.vim.org/"
            data2="Django Rest Framework"
            data3="Bash & Zsh"
            data4="Arch & Debian Linux"
            ref2="https://www.django-rest-framework.org/"
            ref3="https://www.gnu.org/software/bash/"
            ref4="https://www.linux.org/pages/download/"
          />
        </div>
      </section>
      <section
        className="section is-small has-background-grey-darker"
        id="hireme"
      >
        <h1 className="title has-text-light is-size-2-desktop is-size-3-tablet is-size-4-touch has-text-centered">
          Lets Work Together!{" "}
        </h1>

        <div className="level has-background-grey-darker" />
        <div className="container is-fluid">
          <div className="columns">
            <div className="column is-two-thirds has-text-justified">
              <>
                <WorkTogetherForm />
              </>
            </div>
            <div className="column is-one-thirds has-text-centered">
              <div className="tile is parent">
                <article className="tile is-child notification has-background-grey-darker">
                  <Image
                    src={selfie}
                    height="160"
                    width="160"
                    alt="selfie photo"
                  />
                  <h2 className="subtitle has-text-light is-size-5-desktop is-size-6-touch">
                    Howdy!
                  </h2>
                  <p className="content has-text-light is-size-5-desktop is-size-6-touch">
                    I am always open to new ideas, feedback and propositions so
                    if you have something that {"you'd"} like to share then please
                    use the contact form provided. If you would prefer to use
                    your own email client, you can contact me at
                    b08waffles@protonmail.com.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
