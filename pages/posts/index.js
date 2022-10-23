import AllPosts from "../../components/posts/all-posts/all-posts.";

import { getAllPosts } from "../../utils/posts-util";

function AllPostsPage(props) {
  const { posts } = props;

  return <AllPosts posts={posts} />;
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
