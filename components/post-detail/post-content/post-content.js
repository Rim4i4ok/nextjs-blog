import ReactMarkdown from "react-markdown";

import PostHeader from "../post-header/post-header";

import { DUMMY_POST } from "../../../utils/dummy-data";

import classes from "./post-content.module.css";

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
