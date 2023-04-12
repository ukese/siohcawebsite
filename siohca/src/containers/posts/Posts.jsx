import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://github.com/ukese/siohcawebsite/tree/dev/siohca/src/posts') 
      .then(response => response.json())
      .then(data => {
        const fetchPosts = data.map(file => {
          return fetch(file.download_url)
            .then(response => response.text())
            .then(content => ({
              title: file.name.replace('.md', ''),
              content: content
            }));
        });
        Promise.all(fetchPosts)
          .then(posts => setPosts(posts))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <div key={post.title}>
          <Link to={`/posts/${post.title}`}>
            <h2>{post.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
