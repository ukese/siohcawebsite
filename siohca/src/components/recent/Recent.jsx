import React from 'react'
import './recent.css'
import {Link} from "react-router-dom";
import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import {getDaySuffix} from '../../utilities/DateUtils';



function Recent() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/repos/ukese/siohcawebsite/contents/siohca/src/posts?ref=dev') 
      .then(response => response.json())
      .then(data => {
        const fetchPosts = data.map(file => {
          const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          const dateParts = file.name.replace('.md', '').split('-').slice(0, 3);
          const year = dateParts[0];
          const month = parseInt(dateParts[1], 10) - 1; // Subtract 1 to get zero-based index for monthNames array
          const day = dateParts[2];
        
          const formattedDate = `${monthNames[month]} ${parseInt(day, 10)}${getDaySuffix(day)}, ${year}`;

          return fetch(file.download_url)
            .then(response => response.text())
            .then(content => ({
              posttitle: file.name.replace('.md', '').split('-').slice(3).join(' ').charAt(0).toUpperCase()
              + file.name.replace('.md', '').split('-').slice(3).join(' ').slice(1).replace("_", " "),
              date: formattedDate,
              link: file.name.replace('.md', '').split('-').slice(3).join(' ').replace(/-|_| /g, '').toLowerCase(),
              title: content.split('---')[1].split('Featuresdate')[0].replace('title:', '').trim(),
              categories: content.split('categories:')[1].split('tags:')[0].trim(),
              tags: content.split('tags:')[1].trim(),
              short: content.split('---')[2].trim().replace(/[\]\[#]/g, '').replace(/\([^)]*\)/g, '').replace(/\s+/g, ' ').slice(0, 100),
              content: content.split('---')[2].trim()
            }));
        });
        Promise.all(fetchPosts)
        .then(posts => {
          // Sort posts by file.name in reversed order
          posts.sort((a, b) => {
            return b.date.localeCompare(a.date);
          });
          setPosts(posts.slice(0, 3)); // Only first three posts
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}, []);


  return (    
    <div className='recent'>
      <h2>Check out our blog!</h2>
      <div className='blog-posts'>
      {posts.map((post, index) => (
        <div key={post.title}>
          <Fade bottom delay={100 * (index + 1)}> {/* Update delay parameter */}
            <Link to={`/posts/${post.link}`}>
              <div className='blog-posts-box'>
                <h2 className='post-title'>{post.posttitle}</h2>
                <p className='post-date'>{post.date}</p>
                <p className='post-short'>{post.short} ...</p>
              </div>
            </Link>
          </Fade>
        </div>
      ))}
      </div>
      <div className='recent-button'>
        <Link to='/posts'>
          <button>
            More content here
          </button>
        </Link>
        </div>
    </div>
  )
}

export default Recent


