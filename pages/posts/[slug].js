import PostContent from "../../components/post-detail/post-content/post-content";
import {
  getPostData,
  getPostFileNameWithoutExtension,
  getPostsFiles,
} from "../../utils/posts-util";

function SinglePostPage(props) {
  const { post } = props;

  return <PostContent post={post} />;
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) =>
    getPostFileNameWithoutExtension(fileName)
  );

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default SinglePostPage;
