import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import selfie from "../public/images/selfie.png";
import Typewriter from "typewriter-effect";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

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
          The essentials{" "}
        </h1>
        <br />
        <div className="columns">
          <div className="column"></div>
          <div className="column is-half has-text-justified has-text-light">
            <p>
              {" "}
              Hey, I'm Brandon! I first started tinkering with computers from
              the glory days of Windows 95 and I've been addicted ever since!.
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
              <a href="https://powerlake.com"> https://powerlake.com</a> and
              freelance development on the side. My current work involves
              developing automated systems for energy usage optimisation, full
              stack web development with Flask, PostgreSQL and React, and as
              lead guitarist of my band
              <a href="https://lucidprofessor.com"> Lucid Professor</a>.
            </p>
          </div>
          <div className="column"></div>
        </div>
      </section>
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
