import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeWrapAll from "rehype-wrap-all";
import "./blogpost.css";

const BlogPost = ({ title, content, date }) => {
  const wrapperConfig = [
    {
      tagName: "div",
      wrapper: "div.img-wrapper",
      selector: "img",
    },
  ];

  return (
    <div className="blogpost">
      <h1 className="blogpost-title">{title}</h1>
      <p className="blogpost-date">{date}</p>
      <div className="blogpost-content">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw, [rehypeWrapAll, wrapperConfig]]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;
