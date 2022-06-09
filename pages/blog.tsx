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

const BlogPage: NextPage = ({ allPostsData }) => {
  return (
    <>
      <div className="">
        <div className="columns has-text-white">
          <br />
          <div className="column"></div>
          <div className="column is-half">
            {allPostsData.map(({ id, title, date }) => (
              <>
                <div className="tile is parent" key={id}>
                  <div
                    className="tile is-child notification has-background-warning has-text-light"
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
          </div>
          <div className="column"></div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
