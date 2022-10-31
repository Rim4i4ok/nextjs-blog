import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import PostHeader from "../post-header/post-header";

import classes from "./post-content.module.css";

function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customComponents = {
    // img(image) {
    //   return <Image src={image.src} alt={image.alt} width={500} height={300} />;
    // },
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={image.properties.src}
              alt={image.alt}
              width={500}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { children } = code;

      return (
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
