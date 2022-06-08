import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import selfie from "../public/images/selfie.png";
import Typewriter from "typewriter-effect";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import powerlake from "../public/images/powerlake.png";
import lucidprofessor from "../public/images/ludicprofessor.png";
import starterupp from "../public/images/starterupp.png";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Home: NextPage = ({ allPostsData }) => {
  return (
    <>
      <Head>
        <title>Home | B08waffles</title>
      </Head>
      <section className="hero is-success is-halfheight">
        <div className="hero-body bg-img">
          <div className="">
            <p className="title has-text-light is-size-2">Hi, I'm Brandon.</p>
            <Typewriter
              options={{
                strings: ["Web Developer", "Musician", "Blogger"],
                autoStart: true,
                loop: true,
                wrapperClassName: "has-text-light is-size-3",
                cursorClassName: "has-text-light is-size-3",
              }}
            />
          </div>
        </div>
      </section>
      <section className="section has-background-warning">
        <h1 className="title has-text-primary is-size-3 has-text-centered">
          The Essentials{" "}
        </h1>
        <br />
        <div className="columns">
          <div className="column"></div>
          <div className="column is-half has-text-justified has-text-light">
            <p>
              {" "}
              Hey, I'm Brandon! I first started tinkering with computers from
              the glory days of Windows 95 and I've been addicted ever since!
              Outside of my studies, I'm an avid reader, cyclist, musician and
              Linux enthusiast.
            </p>
            <br />
            <p>
              I recently completed my Diploma in Website Developent at
              <a href="https://tafeqld.edu.au"> TAFE QLD</a>'s South Bank Campus
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
      <section className="section is-small">
        <h1 className="title has-text-success is-size-3 has-text-centered">
          Projects
        </h1>
        <br />
        <div className="card has-background-warning has-text-light">
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
              <p className="title is-4 has-text-white">Powerlake</p>
              <p className="subtitle is-6">
                <a href="https://powerlake.com">https://powerlake.com</a>{" "}
              </p>
              <div className="content">
                Powerlake is an energy saving tool that allows users to automate
                their electrical appliances' operation times, according to
                current and predicted electricity prices, and renewables
                preference, potentially saving on electrical bills and usage.
                The idea is to switch devices on when needed and match it to
                when electricity is at its cheapest.
              </div>
              <div className="field is-grouped is-grouped-multiline">
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">Flask</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">React</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">Python</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">JavaScript</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">Webpack</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">Gunicorn</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">WordPress</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">CSS3</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">Bootstrap</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="card has-background-warning has-text-light">
          <div className="card-content">
            <div className="media-content">
              <p className="title is-4 has-text-white">STARTER UPP</p>
              <p className="subtitle is-6">
                <a href="https://starterupp.com">https://starterupp.com</a>{" "}
              </p>
              <div className="content">
                STARTER UPP is a capitalisation system. It allows users to
                create companies, invite employees to join and create
                transactions with either "Money invested" or "Hours worked" in
                order to track employer/employee statistics. Data is presented
                in variable charts, cards and tables. This was my final project
                in completion of my Diploma of Website Development.
              </div>
              <div className="field is-grouped is-grouped-multiline">
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">Django</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">Python</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">Django Rest Framework</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">React</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">SCSS</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">TypeScript</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">Parcel</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">Bootstrap</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">Workbox</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">Gunicorn</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="card has-background-warning has-text-light">
          <div className="card-content">
            <div className="media-content">
              <p className="title is-4 has-text-white">Lucid Professor</p>
              <p className="subtitle is-6">
                <a href="https://lucidprofessor.com">
                  https://lucidprofessor.com
                </a>{" "}
              </p>
              <div className="content">
                Lucid Professor is a brisbane based Psychedelic Rock & Blues
                band. In addition to being a founding member of the band, I made
                the band's website as well. We are always keen for more gigs.
                You can find our music at{" "}
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
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">WordPress</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">CSS3</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">C</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">C#</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">D</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">D#</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">E</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">F</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">F#</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">G</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">G#</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">A</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">A#</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">B</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container is-fluid">
        <div className="columns">
          <div className="column has-background-dark has-text-white has-text-centered">
            <div className="tile is-parent">
              <div className="tile is-child notidication has-background-dark has-text-light has-text-centered">
                Django
              </div>
            </div>
          </div>{" "}
          <div className="column has-background-dark has-text-white has-text-centered is-one-thirds">
            <div className="tile is-parent">
              <div className="tile is-child notidication has-background-dark has-text-light has-text-centered">
                Django
              </div>
            </div>
          </div>{" "}
          <div className="column has-background-dark has-text-white has-text-centered">
            <div className="tile is-parent">
              <div className="tile is-child notidication has-background-dark has-text-light has-text-centered">
                Django
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="level has-background-grey-darker" />
      <div className="container is-fluid">
        <div className="columns">
          <div className="column is-two-thirds has-text-justified">
            <>
              {allPostsData.map(({ id, date, title }) => (
                <>
                  <div className="tile is parent" key={id}>
                    <div
                      className="tile is-child notification has-background-dark has-text-light"
                      key={id}
                    >
                      <Link href={`/posts/${id}`}>
                        <a
                          className="subtitle is-size-4 has-text-light has-text-weight-semibold"
                          key={id}
                        >
                          {title}
                        </a>
                      </Link>
                      <p className="subtitle" key={id}>
                        {id}
                      </p>
                      <p className="content has-text-primary" key={id}>
                        {date}
                      </p>
                    </div>
                  </div>
                  <div className="level" key={id}></div>
                </>
              ))}
            </>
          </div>
          <div className="column is-one-thirds has-text-centered">
            <div className="tile is parent">
              <article className="tile is-child notification has-background-dark">
                <Image
                  src={selfie}
                  height="160"
                  width="160"
                  alt="selfie photo"
                />
                <h2 className="subtitle has-text-light">Hello traveller</h2>
                <p className="content has-text-light">
                  You have entered my domain. Contained herein are tales of
                  technology, projects both past and present, personal
                  experiences, my Portfolio, music and more.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
