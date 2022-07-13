import React, { useState,useRef, useEffect } from 'react';
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Row, Col } from 'antd';
import { ScheduleOutlined } from '@ant-design/icons';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import kvimg from "./images/kv.jpg";
import "./App.less";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  const scrollref = useRef(null);
  const [btnClass, setBtnClass] = useState("");
  useEffect(()=>{    
    setBtnClass("isview");
    const element = scrollref.current;
    gsap.from(element.querySelectorAll(".kv-title-word"),
    {
      y: 300, 
      duration: 1,
      stagger: 0.05
    });
    gsap.from(element.querySelector(".kv-subtitle"),
    {
      y: 300, 
      duration: 1.5,
      delay: 0.5,
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
          scrub: true,
        }
      }
    );
    gsap.fromTo(
      element.querySelector(".about-section"),
      { y: 0 },
      {
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".about-section"),
          start: "center bottom",
          toggleClass: {targets: element.querySelector(".btn-more2"), className: "isview"},
        }
      }
    )
  },[])
  return (
  <div ref={scrollref}>   
    <Header transparent='true' />
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
        <h2 className="kv-subtitle">太陽能即服務</h2>
      </div>
      <a className={`btn-more secondary ${btnClass}`} href='/'>
        <div className='btn-more-wrap'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
            <circle r="38" cx="40" cy="40" strokeWidth="2" fill="none"></circle>
            <circle r="38" cx="40" cy="40" strokeWidth="2" fill="none"></circle>
          </svg>
          <i className='arrow-right'></i>
        </div>        
        <p className='bottom'>Scroll down</p>
      </a>
    </section>   
    <section className='about-section'>
      <div className='container'>
        <Row>
          <Col lg={6} md={6} sm={24} xs={24}>
            <h2 className='section-title'>About Us</h2>
            
            <a className="btn-more btn-more2" href='/'>
              <div className="btn-more-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
                  <circle r="38" cx="40" cy="40" stroke="#0d0d0d" strokeWidth="2" fill="none"></circle>
                  <circle r="38" cx="40" cy="40" stroke="#0d0d0d" strokeWidth="2" fill="none"></circle>
                </svg>
                <i></i>
              </div>        
              <p className='right'>See About Us</p>
            </a>
          </Col>
          <Col lg={{span:12,offset:6}} md={{span:12,offset:6}} sm={24} xs={24}>
            <div className='first-section-p'>
              <p>微電能源以「創新永續未來Renewable Future Development」為方向，整合跨界團隊，以太陽能電廠開發、能源數據的蒐集、分析、整合、應用為核心能力，發展太陽能電廠整合規劃建置與營運，以及串連能源到投資的整合價值鏈服務； 提供企業到社會在綠能策略、綠能投資、ESG策略，到技術合作創新的跨界整合方案。成立來迅速擴張，具備堅實的營運與獲利基礎，並吸引國內外跨產業領導者的規模性投資。</p>
              <p>我們相信，太陽能不僅是綠能與永續的基礎，更是未來企業與社會創新與發展的核心驅動力。</p>
            </div>
            <div className='showNum-wrap'>
              <Row>
                <Col lg={12} md={12} sm={12} xs={12}>                  
                    <div className='showNum'>
                      <div className='showNum-icon'>
                        <ScheduleOutlined/>
                      </div>                    
                      <div className='showNum-title'><span>+2,500</span> MW</div>
                      <div className='showNum-p'>BUILT EPC PROJECTS</div>
                    </div>                  
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>                  
                    <div className='showNum'>
                      <div className='showNum-icon'>
                        <ScheduleOutlined/>
                      </div>                    
                      <div className='showNum-title'><span>+2,500</span> MW</div>
                      <div className='showNum-p'>BUILT EPC PROJECTS</div>
                    </div>                  
                </Col>
              </Row>
              <Row>
                <Col lg={12} md={12} sm={12} xs={12}>                  
                    <div className='showNum'>
                      <div className='showNum-icon'>
                        <ScheduleOutlined/>
                      </div>                    
                      <div className='showNum-title'><span>+2,500</span> MW</div>
                      <div className='showNum-p'>BUILT EPC PROJECTS</div>
                    </div>                  
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>                  
                    <div className='showNum'>
                      <div className='showNum-icon'>
                        <ScheduleOutlined/>
                      </div>                    
                      <div className='showNum-title'><span>+2,500</span> MW</div>
                      <div className='showNum-p'>BUILT EPC PROJECTS</div>
                    </div>                  
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </section>
    <section className='news-section'>
      <div className='section-top-line'></div>
      <div className='container'>        
        <Row>
          <Col lg={6} md={6} sm={24} xs={24}>
            <h2 className='section-title'>News</h2>            
            <a className="btn-more btn-more3" href='/'>
              <div className="btn-more-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
                  <circle r="38" cx="40" cy="40" stroke="#0d0d0d" strokeWidth="2" fill="none"></circle>
                  <circle r="38" cx="40" cy="40" stroke="#0d0d0d" strokeWidth="2" fill="none"></circle>
                </svg>
                <i></i>
              </div>        
              <p className='right'>See About Us</p>
            </a>
          </Col>
        </Row>
      </div>
    </section>
    <Footer/>    
  </div>
  )  
};

export default App;