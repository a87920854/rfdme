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
            <section className='page-service-section' id="solar">
                <div className='container'>
                    <Row>
                        <Col lg={6} md={6} sm={24} xs={24}>
                            <div className=''>
                                <h2>太陽能電廠整合方案</h2>
                            </div>
                        </Col>
                        <Col lg={{span:12,offset:6}} md={{span:12,offset:6}} sm={24} xs={24}>
                            <div className=''>
                                <h3>電廠開發建置維運</h3>
                                <p>微電能源具備太陽能電廠的全程服務與營運承諾，從評估模擬、開發申設，建置統籌、電廠投資，到監控營運、報酬管理等，均建立專業團隊統籌執行。依據土地場域的特性，綜合容量、技術、維運與長期管理等因素整體規劃管理，確保參與者與投資者的成果與權益。<br/>同時，微電自行開發專屬監控系統，藉由工業數據分析建構演算法與量化模型，整合資訊回報、可追溯性、可預測性、檢修維護技術，以及智慧資料庫等，提升太陽能電廠的運作率。持續的資料累積與分析，優化電廠營運品質與電能價值。</p>
                                <ul className='service-hash-ul'>
                                    <li>#EPC</li>
                                    <li>#全流程電廠服務</li>
                                    <li>#數據監控</li>
                                    <li>#能源數據</li>
                                </ul>
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