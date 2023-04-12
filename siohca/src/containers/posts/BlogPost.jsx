import React from 'react';

const BlogPost = ({ title, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>Here</h2>
      <p>{content}</p>
    </div>
  );
};

export default BlogPost;
