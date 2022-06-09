import { Head } from "next/document";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <>
      <div className="level" />
      <div className="container is-fluid">
        <section className="section is-small has-background-warning">
          <h1 className="title has-text-primary">{postData.title}</h1>
          <h2 className="subtitle has-text-success">{postData.id}</h2>
          <h2 className="subtitle has-text-info">{postData.date}</h2>
        </section>
        <section className="section is-medium has-text-white">
          <div className="columns">
            <div className="column"></div>
            <div className="column is-three-fifths">
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </div>
            <div className="column"></div>
          </div>
        </section>
      </div>
    </>
  );
}
