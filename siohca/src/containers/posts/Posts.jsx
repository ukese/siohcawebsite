import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogPost from './BlogPost';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/repos/ukese/siohcawebsite/contents/siohca/src/posts?ref=dev') 
      .then(response => response.json())
      .then(data => {
        const fetchPosts = data.map(file => {
          return fetch(file.download_url)
            .then(response => response.text())
            .then(content => ({
              title: file.name.replace('.md', '').split('-').slice(3).join(' ').charAt(0).toUpperCase()
              + file.name.replace('.md', '').split('-').slice(3).join(' ').slice(1),
              date: file.name.replace('.md', '').split('-').slice(0, 3).join('-'),
              short: content.slice(0, 100),
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
      <h1>All Posts</h1>
      {posts.map(post => (
        <div key={post.title}>
          <Link to={`/posts/${post.title}`}>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <p>{post.short}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
