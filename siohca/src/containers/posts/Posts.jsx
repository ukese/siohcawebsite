import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

var fs = require('fs');
var files = fs.readFileSync('../../posts/');
console.log(files);
const Posts = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/SterArcher/OHCA-registry-Slovenia/gh-pages/_posts/2022-04-20-see%20you%20in%20Glasgow.md')
      .then(response => response.text())
      .then(markdown => setMarkdown(markdown))
      .catch(error => {
        console.error('Error fetching markdown:', error);
      });
  }, []);

  return (
    <div>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
    </div>
  );
};

export default Posts;
