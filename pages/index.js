import Head from "next/head";
import { Fragment } from "react";

import FeaturedPosts from "../components/home-page/featured-posts/featured-posts";
import Hero from "../components/home-page/hero/hero";

import { getFeaturedPosts } from "../utils/posts-util";

function HomePage(props) {
  const { posts } = props;

  return (
    <Fragment>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Some photos" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 3600,
  };
}

export default HomePage;
