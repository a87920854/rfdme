import React, { useEffect, useRef } from 'react';
import { Link as Alink } from 'react-router-dom';
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Row, Col, BackTop, Breadcrumb } from 'antd';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import service_kv from "../images/service_kv.jpg";


export default function Service() {    
    const toLink = (url) =>{
        let anchorElement = document.getElementById(url);
        anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'});
    }
    const scrollref = useRef(null);
    useEffect(()=>{        
        gsap.registerPlugin(ScrollTrigger);
        const element = scrollref.current;
    })
    return (
        <div ref={scrollref}>
            <Header/>
            <div className='page-title'>
                <h1>Service</h1>                
                <ul className='page-title-link'>
                    <li><a href='/' onClick={(e)=> {e.preventDefault(); toLink("solar")}} >太陽能電廠整合方案</a></li>
                    <li><a href='/' onClick={(e)=> {e.preventDefault(); toLink("green")}} >綠能應用解決方案</a></li>
                    <li><a href='/' onClick={(e)=> {e.preventDefault(); toLink("wali01")}} >瓦力電能：綠能採購</a></li>
                    <li><a href='/' onClick={(e)=> {e.preventDefault(); toLink("wali02")}} >瓦力電能：綠電銷售代理</a></li>
                    <li><a href='/' onClick={(e)=> {e.preventDefault(); toLink("lightdonate")}} >Light Donate</a></li>
                    <li><a href='/' onClick={(e)=> {e.preventDefault(); toLink("evsale")}} >電廠銷售服務</a></li>
                </ul>                
            </div>           
            <div className='page-kv'>
                <div className='page-kv-img-wrap'>
                    <img src={service_kv} alt={service_kv} className='page-kv-img'/>
                </div>                
            </div>
            <div className='breadcrumb'>
                <div className='container'>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Alink to="/">Home</Alink>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            Service
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>   
            </div>
            <section className='page-about-section' id="company">
                <div className='container'>
                    <Row>
                        <Col lg={{span:12,offset:6}} md={{span:12,offset:6}} sm={24} xs={24}>
                            <div className='company-section-txt'>
                                <p>微電能源以「創新永續未來Renewable Future Development」為方向，整合跨界團隊，以太陽能電廠開發、能源數據的蒐集、分析、整合、應用為核心能力，發展太陽能電廠整合規劃建置與營運，以及串連能源到投資的整合價值鏈服務； 提供企業到社會在綠能策略、綠能投資、ESG策略，到技術合作創新的跨界整合方案。成立來迅速擴張，具備堅實的營運與獲利基礎，並吸引國內外跨產業領導者的規模性投資。</p>
                                <p>我們相信，太陽能不僅是綠能與永續的基礎，更是未來企業與社會創新與發展的核心驅動力。</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>


            <BackTop />
            <Footer/>
        </div>
        
    );
}