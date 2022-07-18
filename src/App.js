import React , { useState, useEffect } from 'react';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Routes, Route , useLocation } from "react-router-dom";
import { CSSTransition,  TransitionGroup } from "react-transition-group";
import "./App.less";


function App() {
  const location = useLocation();
  const [animator, setAnimator] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
              <Route path="/contact" element={<Contact />} />  
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