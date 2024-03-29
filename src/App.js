import React , { useState} from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import NewsPage from "./pages/News_Page";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

import { Routes, Route , useLocation } from "react-router-dom";
import { CSSTransition,  TransitionGroup } from "react-transition-group";
import "./App.less";


function App() {
  const location = useLocation();
  const [animator, setAnimator] = useState("");
  return ( 
    <>
      
      <TransitionGroup className="page-scroll">
        <CSSTransition key={location.key} timeout={1000} classNames="page-transition" 
          onEnter={() => {
            setAnimator("active");
          }} 
          onExited={() => {
            setTimeout(()=>{
              setAnimator("");
            },1500);            
          }}
        >       
          <Routes location={location}>
              <Route path="/news" element={<News />} />
              <Route path="/news/:id" element={<NewsPage />} />
              <Route path="/about" element={<About />} />  
              <Route path="/contact" element={<Contact />} />
              <Route path="/service" element={<Service />} />  
              <Route path="/" element={<Home />} /> 
          </Routes>      
        </CSSTransition>
      </TransitionGroup>  
      <div className={`preloader ${animator}`}>
        <div className='preloader-line'><div></div></div>
        <div className='preloader-line'><div></div></div>
        <div className='preloader-line'><div></div></div>
      </div>
    </>
      
  );
}

export default App;