import React, { useRef, useEffect } from 'react';
import "./App.less";
import Header from "./component/Header/";
import Footer from "./component/Footer/";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import kvimg from "./images/kv.jpg";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  const scrollref = useRef(null);
  useEffect(()=>{
    const element = scrollref.current;
    gsap.from(element.querySelectorAll(".kv-title-word"),
    {
      y: 300, 
      duration: 1,
      stagger: 0.05
    });
    gsap.fromTo(
      element.querySelector(".kv-img"),
      {        
        y: 0
      },
      {        
        y: 80,
        scrollTrigger: {
          trigger: element.querySelector(".kv-img"),
          start: "top top",
          end: "bottom center",
          scrub: true
        }
      }
    )
  })
  return (
  <div ref={scrollref}>   
    <Header type='true' />
    <section className="kv">
      <img src={kvimg} className="kv-img" alt="kv"/>
      <div className='kv-title-wrap'>      
        <h1 className="kv-title">
          <span className='kv-title-word'>S</span>
          <span className='kv-title-word'>O</span>
          <span className='kv-title-word'>L</span>
          <span className='kv-title-word'>A</span>
          <span className='kv-title-word' style={{paddingRight:'2rem'}}>R</span>          
          <span className='kv-title-word' style={{paddingRight:'2rem'}}>AS</span>          
          <span className='kv-title-word' style={{paddingRight:'2rem'}}>A</span>          
          <span className='kv-title-word'>S</span>
          <span className='kv-title-word'>E</span>
          <span className='kv-title-word'>R</span>
          <span className='kv-title-word'>V</span>
          <span className='kv-title-word'>I</span>
          <span className='kv-title-word'>C</span>
          <span className='kv-title-word'>E</span>
        </h1>
      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" className="w_100 h_100" viewBox="0 0 80 80">
        <circle r="38" cx="40" cy="40" stroke="#fff" strokeWidth="2" fill="none"></circle>
        <circle r="38" cx="40" cy="40" stroke="#fff" strokeWidth="2" fill="none"></circle>
      </svg>     */}
    </section>   
    <section className=''>

    </section>
    <Footer/>    
  </div>
  )  
};

export default App;