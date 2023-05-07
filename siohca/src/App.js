// rafce -> React Arrow Function Component with Export
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Home, Team, Pub, Contacts, EuReCa3, Posts} from './containers';
import { ReactComponent as Logo } from  './assets/svg/brand/logo-small.svg';
import {Navbar} from './components';
import BlogPost from './containers/posts/BlogPost';
import {getDaySuffix} from './utilities/DateUtils';
const a = "22-4-5-adscnms.md".replace('.md', '').split('-').slice(3).join(' ')
console.log("a",a)
// Reload window to top on refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


function App() {

  // Loading screen
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);

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
          .then(posts => setPosts(posts))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }, []);


  return (
    <div className='App'>
       {loading ? (
        <div className="loader-container" >
      	  <div className="spinner"> <Logo/> </div>
        </div>
      ) : (
        <div className="main-content">
            
          <BrowserRouter basename="/siohcawebsite">
          <Navbar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/team' element={<Team/>} />
              <Route path='/posts' element={<Posts/>} />
              <Route path='/publications&press' element={<Pub/>} />
              <Route path='/eureca3' element={<EuReCa3/>} />
              <Route path='/contacts' element={<Contacts/>} />
              {posts.map(post => (
              <Route path={`/posts/${post.link}`} element={<BlogPost title={post.title} content={post.content} date={post.date}/>} />
              ))}

          </Routes>
          </BrowserRouter>
      
    </div>
      )}
    </div>
  );
}


export default App

