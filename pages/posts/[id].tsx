/* import { Head } from "next/document";
import { useEffect } from "react";
import reactmarkdown from "react-markdown";
import Prism from "prismjs";

require("prismjs/components/prism-javascript");
require("prismjs/components/prism-css");
require("prismjs/components/prism-jsx"); */
import { getAllPostIds, getPostData } from "../../lib/posts";
import reactmarkdown from "react-markdown";
import ReactMarkdown from "react-markdown";

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
  //  useEffect(() => {
  //  Prism.highlightAll();
  //}, []);

  return (
    <>
      <div className="container is-fluid">
        <section className="section is-small has-text-white">
          <br />
          <div className="level" />
          <br />
          <div className="columns">
            <div className="column"></div>
            <div className="column is-two-thirds">
              <h1 className="title has-text-primary">{postData.title}</h1>
              <h2 className="subtitle has-text-light">{postData.date}</h2>
              <div
                className="markdown"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
              />{" "}
            </div>
            <div className="column"></div>
          </div>
        </section>
      </div>
    </>
  );
}

/*
import { FC, Fragment } from "react";
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from "next";
import { PostType } from "../../interfaces";
import { getPostData, getPostsFiles } from "../../lib/post-utils";
import PostContent from "../../components/PostContent";

interface Props {
  post: PostType;
}

const BlogPost: FC<Props> = ({ post }: Props) => {
  return (
    <Fragment>
      <PostContent post={post} />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { slug } = context.params;
  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    // regenerate after every 600s(10mins)
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default BlogPost; */
