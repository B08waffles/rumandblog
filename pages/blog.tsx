import { NextPage } from "next";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function BlogPage({ allPostsData }) {
  return (
    <>
      <div className="container is-fluid">
        <div className="columns has-text-white">
          <br />
          <div className="level"></div>
          <br />
          <div className="level"></div>
          <br /> <br />
          <div className="level" />
          <br />
          <div className="column"></div>
          <div className="column is-half">
            <br />
            <br />
            <div className="level" />
            <br />
            <h1 className="title has-text-primary">Blogs</h1>
            {allPostsData.map(({ id, title, date, description }) => (
              <>
                <div className="tile is parent" key={id}>
                  <div className="tile is-child notification has-background-grey-darker has-text-light">
                    <Link href={`/posts/${id}`}>
                      <a className="subtitle is-size-4 has-text-success has-text-weight-semibold">
                        {title}
                      </a>
                    </Link>
                    <p className="subtitle">
                      {date}
                      <br /> {description}
                    </p>
                  </div>
                </div>
                <div className="level"></div>
                <br />
                <div className="level"></div>
              </>
            ))}
          </div>
          <div className="column"></div>
        </div>
      </div>
    </>
  );
}
