// rafce -> React Arrow Function Component with Export
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {Footer, Home, Faq, Team, Pub, Contacts, EuReCa3, Posts} from './containers';
import { ReactComponent as Logo } from  './assets/svg/brand/logo-small.svg';
import {Navbar} from './components';


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
          </Routes>
          </BrowserRouter>
      
    </div>
      )}
    </div>
  );
}

export default App

