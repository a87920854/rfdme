import React , { useState } from 'react';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Routes, Route , useLocation } from "react-router-dom";
import { CSSTransition,  TransitionGroup } from "react-transition-group";
import "./App.less";


function App() {
  const location = useLocation();
  const [animator, setAnimator] = useState("");
  return ( 
    <>
      <div className={`preloader ${animator}`}>
        <div className='preloader-line'><div></div></div>
        <div className='preloader-line'><div></div></div>
        <div className='preloader-line'><div></div></div>
      </div>
      <TransitionGroup className="page-scroll">
        <CSSTransition appear={true} key={location.key} timeout={2500} classNames="page-transition" 
          onEnter={() => {
            setAnimator("active");
          }} 
          onExited={() => {
            setAnimator("");
          }}
        >       
          <Routes location={location}>
              <Route path="/contact" element={<Contact />} />  
              <Route path="/" element={<Home />} /> 
          </Routes>      
        </CSSTransition>
      </TransitionGroup>  
    </>
      
  );
}

export default App;