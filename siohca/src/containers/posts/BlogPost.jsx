import React from 'react';
import ReactMarkdown from 'react-markdown';

const BlogPost = ({ title, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default BlogPost;
