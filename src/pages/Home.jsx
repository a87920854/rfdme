import React, { useState, useRef, useEffect } from 'react';
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import { Row, Col, BackTop } from 'antd';
import { ScheduleOutlined } from '@ant-design/icons';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import kvimg from "../images/kv.jpg";
import aboutbg from "../images/about_bg.jpg";
import servicebg from "../images/service_bg.jpg";
import icon_solar from "../images/icon-solar.svg";
import icon_leaves from "../images/icon-leaves.svg";
import icon_tree from "../images/icon-tree.svg";
import icon_plug from "../images/icon-plug.svg";
import advantage_1 from "../images/advantage_1.jpg";
import advantage_2 from "../images/advantage_2.jpg";
import advantage_3 from "../images/advantage_3.jpg";

export default function Home () {
  gsap.registerPlugin(ScrollTrigger);
  const scrollref = useRef(null);
  const [btnClass, setBtnClass] = useState(""); 
  const toLink = (url) =>{
    let anchorElement = document.getElementById(url);
    anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'});
  }
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
      element.querySelector(".about-bg"),
      {        
        y: 0
      },
      {        
        y: 80,
        scrollTrigger: {
          trigger: element.querySelector(".about-section"),
          start: "top top",
          end: "bottom center",
          scrub: true,
        }
      }
    );
    gsap.fromTo(
      element.querySelector(".about-section-title"),
      { 
        y: 300,
      },
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element.querySelector(".about-section-title"),
          start: "top bottom",
          toggleClass: {targets: element.querySelector(".btn-more2"), className: "isview"},
        }
      }
    );       
    gsap.fromTo(
      element.querySelector(".news-section-title"),
      { y: 300 },
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element.querySelector(".news-section-title"),
          start: "top bottom",
          toggleClass: {targets: element.querySelector(".btn-more3"), className: "isview"},
        }
      }
    );
    gsap.fromTo(
      element.querySelector(".service-section-title"),
      { y: 300 },
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element.querySelector(".service-section-title"),
          start: "bottom bottom",
          toggleClass: {targets: element.querySelector(".btn-more4"), className: "isview"},
        }
      }
    );
    gsap.fromTo(
      element.querySelector(".service-bg"),
      {        
        y: 0
      },
      {        
        y: 120,
        scrollTrigger: {
          trigger: element.querySelector(".service-section"),
          start: "top top",
          scrub: true,
        }
      }
    );
    gsap.fromTo(
      element.querySelector(".advantage-section-title"),
      { y: 300 },
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element.querySelector(".advantage-section-title"),
          start: "top bottom",
         
        }
      }
    );
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
          <span className='kv-title-word'>R</span>          
          <span className='kv-title-word'>AS</span>          
          <span className='kv-title-word'>A</span>
          <br/>       
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
      <a className={`btn-more secondary ${btnClass}`} href='/#' onClick={(e)=> {e.preventDefault();toLink("about");}}>
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
    <section className='about-section' id="about">
      <div className='container'>
        <Row>
          <Col lg={6} md={6} sm={24} xs={24}>
            <div className='section-title-wrap'>
              <h2 className='section-title about-section-title'>About Us</h2>
            </div>
            <Link className="btn-more btn-more2" to='/about'>
              <div className="btn-more-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
                  <circle r="38" cx="40" cy="40" stroke="#0d0d0d" strokeWidth="2" fill="none"></circle>
                  <circle r="38" cx="40" cy="40" stroke="#0d0d0d" strokeWidth="2" fill="none"></circle>
                </svg>
                <i></i>
              </div>        
              <p className='right'>See About Us</p>
            </Link>
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
      <img className="about-bg" src={aboutbg} alt="aboutbg"/>
    </section>
    <section className='news-section'>
      <div className='section-top-line'></div>
      <div className='container'>        
        <Row>
          <Col lg={6} md={6} sm={24} xs={24}>
            <div className='section-title-wrap'>
              <h2 className='section-title news-section-title'>News</h2>     
            </div>  
            <Link className="btn-more btn-more3" to='/news'>
              <div className="btn-more-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
                  <circle r="38" cx="40" cy="40" strokeWidth="2" fill="none"></circle>
                  <circle r="38" cx="40" cy="40" strokeWidth="2" fill="none"></circle>
                </svg>
                <i></i>
              </div>        
              <p className='right'>See News</p>
            </Link>
          </Col>
          <Col lg={{span:12,offset:6}} md={{span:12,offset:6}} sm={24} xs={24}>
            <Link className='news-item' to="/">
              <div className='news-item-date'>
                <div className='news-item-date-day'>24</div>
                <div className='news-item-date-month'>2022.07</div>
              </div>
              <div className='news-item-content with-photo'>
                  <h3>讓綠能更有價值！微電能源</h3>
                  <p>全球追求淨零碳排如火如荼，台灣也宣布2050淨零轉型政策，積極發展再生能源，成為未來的發電主力，其中風電和光電更是重中之重。2015年創立的微電能源，跨界集結能量，持續致力加值綠能，讓太陽能不只是發電...</p>
              </div>
              <div className='news-item-photo'>
                <img src="https://img.ltn.com.tw/Upload/business/page/800/2020/05/19/3170633_1.jpg" alt="" />
              </div>
            </Link>
            <Link className='news-item' to="/">
              <div className='news-item-date'>
                <div className='news-item-date-day'>24</div>
                <div className='news-item-date-month'>2022.07</div>
              </div>
              <div className='news-item-content with-photo'>
                  <h3>讓綠能更有價值！微電能源用太陽能推動共好價值鏈微電能源用太陽能推動共好價值鏈</h3>
                  <p>全球追求淨零碳排如火如荼，台灣轉型政策</p>
              </div>
              <div className='news-item-photo'>
                <img src="https://img.ltn.com.tw/Upload/business/page/800/2020/05/19/3170633_1.jpg" alt="" />
              </div>
            </Link>
            <Link className='news-item' to="/">
              <div className='news-item-date'>
                <div className='news-item-date-day'>24</div>
                <div className='news-item-date-month'>2022.07</div>
              </div>
              <div className='news-item-content with-photo'>
                  <h3>讓綠能更有價值！微電能源用太陽能推動共好價值鏈微電能源用太陽能推動共好價值鏈</h3>
                  <p>全球追求淨零碳排如火如荼，台灣也宣布2050淨零轉型政策，積極發展再生能源，成為未來的發電主力，其中風電和光電更是重中之重。2015年創立的微電能源，跨界集結能量，持續致力加值綠能，讓太陽能不只是發電...</p>
              </div>
              <div className='news-item-photo'>
                <img src="https://img.ltn.com.tw/Upload/business/page/800/2020/05/19/3170633_1.jpg" alt="" />
              </div>
            </Link>
          </Col>
        </Row>
      </div>
    </section>
    <section className="service-section">
      <div className='container'>
        <Row align="bottom">
          <Col lg={6} md={6} sm={24} xs={24}>
            <div className='section-title-wrap'>
              <h2 className='section-title service-section-title'>Our<br/>Service</h2> 
            </div>
                       
            <Link className="btn-more white btn-more4" to='/service'>
              <div className="btn-more-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
                  <circle r="38" cx="40" cy="40" strokeWidth="2" fill="none"></circle>
                  <circle r="38" cx="40" cy="40" strokeWidth="2" fill="none"></circle>
                </svg>
                <i></i>
              </div>        
              <p className='right'>See Our Service</p>
            </Link>
          </Col>
          <Col lg={{span:12,offset:6}} md={{span:12,offset:6}} sm={24} xs={24}>
            <Row gutter={[24, 24]}>
              <Col lg={12} md={12} sm={12} xs={24}>
                <div className='service-item'>
                  <div className="service-icon">
                    <div className='icon-wrap'><img src={icon_solar} alt={icon_solar} /></div>
                  </div>
                  <h5>綜合太陽能服務</h5>
                  <p>微電能源以「創新永續未來Renewable Future Development」為方向，整合跨界團隊，以太陽能電廠開發、能源數據的蒐集、分析、整合、應用為核心能力，發展太陽能電廠整合規劃建置與營運。</p>
                </div>
              </Col>
              <Col lg={12} md={12} sm={12} xs={24}>
                <div className='service-item'>
                  <div className="service-icon">
                    <div className='icon-wrap'><img src={icon_leaves} alt={icon_leaves} /></div>
                  </div>
                  <h5>綠電售電</h5>
                  <p>微電能源以「創新永續未來Renewable Future Development」為方向，整合跨界團隊，以太陽能電廠開發、能源數據的蒐集、分析、整合、應用為核心能力，發展太陽能電廠整合規劃建置與營運。</p>
                </div>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col lg={12} md={12} sm={12} xs={24}>
                <div className='service-item'>
                  <div className="service-icon">
                    <div className='icon-wrap'><img src={icon_plug} alt={icon_plug} /></div>
                  </div>
                  <h5>ESG服務</h5>
                  <p>微電能源以「創新永續未來Renewable Future Development」為方向，整合跨界團隊，以太陽能電廠開發、能源數據的蒐集、分析、整合、應用為核心能力，發展太陽能電廠整合規劃建置與營運。</p>
                </div>
              </Col>
              <Col lg={12} md={12} sm={12} xs={24}>
                <div className='service-item'>
                  <div className="service-icon">
                    <div className='icon-wrap'><img src={icon_tree} alt={icon_tree} /></div>
                  </div>
                  <h5>能源數據</h5>
                  <p>微電能源以「創新永續未來Renewable Future Development」為方向，整合跨界團隊，以太陽能電廠開發、能源數據的蒐集、分析、整合、應用為核心能力，發展太陽能電廠整合規劃建置與營運。</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <img className="service-bg" src={servicebg} alt="servicebg"/>
    </section>
    <section className='advantage-section'>
      <div className='container'>        
        <Row>
          <Col lg={24} md={24} sm={24} xs={24}>
            <div className='section-title-wrap'>
              <h2 className='section-title advantage-section-title'>Advantage</h2>     
            </div>            
          </Col>
        </Row>
        <Row>
          <Col lg={24} md={24} sm={24} xs={24}>
              <Row gutter={32}>
                <Col lg={8} md={8} sm={24} xs={24}>
                  <div className='box'>
                      <div className='box-content'>
                        <h3>跨領域專業團隊</h3>
                        <p>微電能源以「創新永續未來Renewable Future Development」為方向，整合跨界團隊，以太陽能電廠開發。</p>
                      </div>
                      <div className='box-photo'>
                        <img src={advantage_1} alt="跨領域專業團隊" className='advantage-1'/>
                      </div>
                  </div>
                </Col>
                <Col lg={8} md={8} sm={24} xs={24}>
                  <div className='box'>
                      <div className='box-photo'>
                        <img src={advantage_2} alt="深厚專業知識和領航技術" className='advantage-2'/>
                      </div>
                      <div className='box-content'>
                        <h3>深厚專業知識和領航技術</h3>
                        <p>微電能源以「創新永續未來Renewable Future Development」為方向，整合跨界團隊，以太陽能電廠開發。</p>
                      </div>
                      
                  </div>
                </Col>
                <Col lg={8} md={8} sm={24} xs={24}>
                  <div className='box'>
                      <div className='box-content'>
                        <h3>洞見趨勢的技術與服務</h3>
                        <p>微電能源以「創新永續未來Renewable Future Development」為方向，整合跨界團隊，以太陽能電廠開發。</p>
                      </div>
                      <div className='box-photo'>
                        <img src={advantage_3} alt="洞見趨勢的技術與服務" className='advantage-3'/>
                      </div>
                  </div>
                </Col>
              </Row>            
          </Col>
        </Row>

      </div>
    </section>
    <BackTop />
    <Footer/>    
  </div>
  )  
};
