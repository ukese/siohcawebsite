import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import './posts.css';
import {getDaySuffix} from '../../utilities/DateUtils'


const Posts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

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
                + file.name.replace('.md', '').split('-').slice(3).join(' ').slice(1),
              date: formattedDate,
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
            setPosts(posts.slice((currentPage - 1) * 5, currentPage * 5));

          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }, [currentPage]);

  return (
    <div className='posts'>
      <h1>All Posts</h1>
      {posts.map(post => (
        <Link to={`/posts/${post.link}`}>
        <div className='post'
        key={post.link}
        >
            <h2>{post.posttitle}</h2>
          
          <p className='post-date'>{post.date}</p>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            children={post.short}
          />
        </div>
        </Link>
      ))}
      <div className='pagination'>
        {currentPage > 1 && (
          <button className='prev-page' onClick={() => setCurrentPage(currentPage - 1)}>
            Previous
          </button>
        )}
        <button className='next-page' onClick={handleNextPage}>
          <h3>Next</h3>
        </button>
      </div>
    </div>
  );
};

export default Posts;
