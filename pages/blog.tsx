import { NextPage } from "next";
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
      {allPostsData.map(({ id, title, date }) => (
        <>
          <div className="tile is-parent" key={id}>
            <div className="tile is-child notitification is-warning" key={id}>
              <div className="content" key={id}>
                <p className="title" key={id}>
                  {title}
                </p>
                <p className="subtitle" key={id}>
                  {id}
                </p>
                <p className="subtitle" key={id}>
                  {date}
                </p>
                <div className="content" key={id}></div>
              </div>
            </div>
          </div>

          <div className="level" key={id}></div>
        </>
      ))}
    </>
  );
};

export default BlogPage;
