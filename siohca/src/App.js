// rafce -> React Arrow Function Component with Export
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {Footer, Home, Faq, Team, Pub, Contacts, EuReCa3, Posts} from './containers';
import { ReactComponent as Logo } from  './assets/svg/brand/logo-small.svg';
import {Navbar} from './components';
import BlogPost from './containers/posts/BlogPost';
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
    <div className='App'>
       {loading ? (
        <div className="loader-container" >
      	  <div className="spinner"> <Logo/> </div>
        </div>
      ) : (
        <div className="main-content">
            
          <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/team' element={<Team/>} />
              <Route path='/posts' element={<Posts/>} />
              <Route path='/publications&press' element={<Pub/>} />
              <Route path='/eureca3' element={<EuReCa3/>} />
              <Route path='/contacts' element={<Contacts/>} />
              {posts.map(post => (
              <Route path={`/posts/${post.title}`} element={<BlogPost title={post.title} content={post.content}/>} />
              ))}

          </Routes>
          </BrowserRouter>
      
    </div>
      )}
    </div>
  );
}


export default App

