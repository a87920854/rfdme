import React, { useEffect, useRef } from 'react';
import { Link as Alink } from 'react-router-dom';
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Row, Col, BackTop, Breadcrumb } from 'antd';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import service_kv from "../images/service_kv.jpg";
import service_img1 from "../images/service_img1.jpg";
import service_img2 from "../images/service_img2.jpg";
import service_img3 from "../images/service_img3.jpg";

export default function Service() {    
    const toLink = (url) =>{
        let anchorElement = document.getElementById(url);
        anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'});
    }
    const scrollref = useRef(null);
    useEffect(()=>{        
        gsap.registerPlugin(ScrollTrigger);
        // const element = scrollref.current;
    })
    return (
        <div ref={scrollref}>
            <Header/>
            <div className='page-title'>
                <h1>Service</h1>                
                <ul className='page-title-link'>
                    <li><a href='/' onClick={(e)=> {e.preventDefault(); toLink("solar")}} >太陽能電廠整合方案</a></li>
                    <li><a href='/' onClick={(e)=> {e.preventDefault(); toLink("green")}} >綠能應用解決方案</a></li>
                    <li><a href='/' onClick={(e)=> {e.preventDefault(); toLink("wali")}} >瓦力電能：綠能採購</a></li>
                    <li><a href='/' onClick={(e)=> {e.preventDefault(); toLink("wali")}} >瓦力電能：綠電銷售代理</a></li>
                    <li><a href='/' onClick={(e)=> {e.preventDefault(); toLink("lightdonate")}} >Light Donate</a></li>
                    <li><a href='/' onClick={(e)=> {e.preventDefault(); toLink("lightdonate")}} >電廠銷售服務</a></li>
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
            <section className='page-service-section solar-section' id="solar">
                <div className='container'>
                    <Row gutter={[32, 32]}>
                        <Col lg={24} md={24} sm={24} xs={24}>
                            <div className=''>
                                <h2>太陽能電廠整合方案</h2>
                            </div>
                        </Col>
                        <Col lg={8} md={8} sm={24} xs={24}>
                            <div className='solar-txt'>
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
                        <Col lg={8} md={8} sm={24} xs={24}>
                            <div className='solar-txt'>
                                <h3>多元整合應用開發</h3>
                                <p>持續開發太陽能與多場景的整合技術。從地面型、屋頂型，到農電共生、漁電共生，停車場、大型建築物的太陽能電廠整合開發，微電能源以豐富的建廠維運經驗，營運模式整合，到技術支援，帶動多樣化的太陽能電廠應用，發展再生能源的發電場景。</p>
                                <ul className='service-hash-ul'>
                                    <li>#多元電廠</li>
                                    <li>#漁電共生及更多場景</li>
                                </ul>
                            </div>   
                        </Col>
                        <Col lg={8} md={8} sm={24} xs={24}>
                            <div className='solar-txt'>
                                <h3>電能數據研發應用</h3>
                                <p>微電能源以能源數據資訊的開發、累積與分析為基礎，深化科技的核心能力，以未來應用為發展願景，在IoT、AI、區塊鏈、微電網、儲能等趨勢與應用層面，推動跨界軟體與硬體的共同研發項目，創造多元的未來應用。</p>
                                <ul className='service-hash-ul'>
                                    <li>#能源數據</li>
                                    <li>#創新研發</li>
                                </ul>
                            </div> 
                        </Col>
                    </Row>
                </div>
            </section>
            <section className='page-service-section green-section' id="green">
                <div className='section-top-line'></div>
                <div className='container'>
                    <Row justify="space-between" align="middle">
                        <Col lg={8} md={8} sm={24} xs={24}>
                            <div className='green-txt'>
                                <h2>綠能應用解決方案</h2>
                                <h3>綠能資產投資</h3>
                                <p>以完整的電廠解決方案與跨領域團隊的專業，客製化綠能資產的投入與管理服務。對綠能資產投資、長期持有等不同的客戶需求，客製化設計方案；兼顧穩定性、持續性以及管理承諾，創造多方共贏的合作模式。</p>
                                <ul className='service-hash-ul'>
                                    <li>#穩定報酬</li>
                                    <li>#彈性設計</li>
                                </ul>
                            </div>   
                            <div className='green-txt'>
                                <h2>電廠銷售服務</h2>                                
                                <p>微電能源運用長期累積的電廠營運經驗，以及跨領域夥伴的網路，協助電廠引資銷售，透過評估、健檢、評價與交易設計，優化與實現電廠的交易價值。</p>
                                <ul className='service-hash-ul'>
                                    <li>#電廠銷售代理</li>
                                    <li>#精準規劃與媒合</li>
                                </ul>
                            </div>                         
                        </Col>
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <div className='green-img'>
                                <img src={service_img1} alt={service_img1} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className='page-service-section wali-section' id="wali">
                <div className='section-top-line'></div>
                <div className='container'>
                    <Row justify="space-between" align="middle">
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <div className='wali-img'>
                                <img src={service_img2} alt={service_img2} />
                            </div>
                        </Col>
                        <Col lg={8} md={8} sm={24} xs={24}>
                            <div className='green-txt'>
                                <h2>瓦力電能：綠能採購與再生能源憑證 (REC)</h2>
                                <p>微電能源開發並持有電廠，具備充足且持續擴充的太陽能發電量。面對企業日益提升的綠電需求，微電能源以轉供、建置自發自用電廠開發等方式，結合綠能資產的規劃，滿足用電大戶、企業RE策略、用電確保與成本控制，以及再生能源憑證(REC)取得的策略需要。</p>
                                <ul className='service-hash-ul'>
                                    <li>#RE100</li>
                                    <li>#用電大戶</li>
                                    <li>#綠電成本可控</li>
                                    <li>#綠電憑證T-REC</li>
                                </ul>
                            </div> 
                            <div className='green-txt'>
                                <h2>瓦力電能：綠電銷售代理</h2>                                
                                <p>微電能源以能源數據核心，開發售電服務，針對發電端與負載端進行分析，提供太陽能電廠與綠電用戶從預估、配對、轉供等綠電優化服務，並整合銀行、金融等專業解決方案，優化風險控管、收益可控的機制，協助太陽能電廠透過綠電銷售提升整體報酬效益。</p>
                                <ul className='service-hash-ul'>
                                    <li>#綠電銷售代理</li>
                                    <li>#售電優化</li>
                                </ul>
                            </div>                                                       
                        </Col>
                    </Row>
                </div>
            </section>
            <section className='page-service-section lightdonate-section' id="lightdonate">
                <div className='section-top-line'></div>
                <div className='container'>
                    <Row>
                        <Col lg={{span:8, offset:8}} md={{span:8, offset:8}} sm={24} xs={24}>
                            <div className='lightdonate-txt'>
                                <h2>Light Donate：ESG/CSR 應用</h2>                                
                                <p>利用擅長的模式創新能力，微電能源使參與綠能的企業可將太陽能投資的報酬轉為公益價值，讓投資方不只因為投資太陽能獲得ESG Investing中「環境Environmental」的表現，同時可以提升ESG Investing裡「社會Social」的價值。</p>
                                <ul className='service-hash-ul'>
                                    <li>#ESG</li>
                                    <li>#社會價值</li>
                                    <li>#永續目標</li>
                                </ul>
                            </div>                            
                        </Col>

                    </Row>
                    <div className='lightdonate-margin'></div>
                </div>
                <div className='service_img' style={{backgroundImage:`url(${service_img3})`,backgroundSize:'cover'}}></div>
            </section>
            <div className='contact-banner'>

            </div>
            <BackTop />
            <Footer/>
        </div>
        
    );
}