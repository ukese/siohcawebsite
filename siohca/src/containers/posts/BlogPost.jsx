import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import './blogpost.css'

const BlogPost = ({ title, content, date }) => {
  return (
    <div className='blogpost'>
        <div className='blogpost-heading'>
            <h1 className='blogpost-heading-title'>{title}</h1>
            <p className='blogpost-heading-date'>{date}</p>
        </div>
      <p className='blogpost-content'>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown >
      </p>
    </div>
  );
};

export default BlogPost;
