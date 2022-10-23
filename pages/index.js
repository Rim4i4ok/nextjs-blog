import { Fragment } from "react";

import FeaturedPosts from "../components/home-page/featured-posts/featured-posts";
import Hero from "../components/home-page/hero/hero";

import { DUMMY_POSTS } from "../utils/dummy-data";

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
