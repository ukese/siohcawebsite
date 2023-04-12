import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogPost from './BlogPost';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import './posts.css';

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
              posttitle: file.name.replace('.md', '').split('-').slice(3).join(' ').charAt(0).toUpperCase()
              + file.name.replace('.md', '').split('-').slice(3).join(' ').slice(1),
              date: file.name.replace('.md', '').split('-').slice(0, 3).join('-'),
              link: file.name.replace('.md', '').split('-').slice(3).join(' ').replace(/-|_| /g, '').toLowerCase(),
              title: content.split('---')[1].split('Featuresdate')[0].replace('title:', '').trim(),
              categories: content.split('categories:')[1].split('tags:')[0].trim(),
              tags: content.split('tags:')[1].trim(),
              short: content.split('---')[2].trim().replace(/[\]\[#]/g, '').replace(/\([^)]*\)/g, '').replace(/\s+/g, ' ').slice(0, 300),
              content: content.split('---')[2].trim()
            }));
        });
        Promise.all(fetchPosts)
        .then(posts => {
          // Sort posts by file.name in reversed order
          posts.sort((a, b) => {
            return b.date.localeCompare(a.date);
          });
          setPosts(posts);
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}, []);


  return (
    <div className='posts'>
      <h1>All Posts</h1>
      {posts.map(post => (
        <div className='post' key={post.title}>
          <Link to={`/posts/${post.link}`}>
            <h2 className='post-title'>{post.posttitle}</h2>
            <p className='post-date'>{post.date}</p>
            <p className='post-short'>{post.short} ...</p>
          </Link>
        </div>
      ))}
    </div>
  );
  
};

export default Posts;
