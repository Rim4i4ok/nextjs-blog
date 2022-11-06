import Head from "next/head";
import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts/all-posts.";

import { getAllPosts } from "../../utils/posts-util";

function AllPostsPage(props) {
  const { posts } = props;

  return (
    <Fragment>
      <Head>
        <title>All posts</title>
        <meta name="description" content="A list of all posts" />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 3600,
  };
}

export default AllPostsPage;
