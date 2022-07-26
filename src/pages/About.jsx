import React, { useEffect, useRef } from 'react';
import { Link as Alink } from 'react-router-dom';
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Row, Col, BackTop, Breadcrumb } from 'antd';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import about_kv from "../images/about_kv.jpg";
import view_img from "../images/view_img.jpg";
import avatar from "../images/avatar.jpg";
import spirits_mountain01 from "../images/mountain01.png";
import spirits_mountain02 from "../images/mountain02.png";
import spirits_clouds from "../images/clouds.png";

export default function About() {    
    const toLink = (url) =>{
        let anchorElement = document.getElementById(url);
        anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'});
    }
    const scrollref = useRef(null);
    useEffect(()=>{        
        gsap.registerPlugin(ScrollTrigger);
        const element = scrollref.current;
        gsap.fromTo(
            element.querySelector(".page-kv-img"),
            {        
              y: 0
            },
            {        
              y: 80,
              scrollTrigger: {
                trigger: element.querySelector(".page-title"),
                start: "top top",
                end: "bottom top",
                scrub: true,
              }
            }
        );
        gsap.fromTo(
            element.querySelector(".view-img"),
            {        
              y: 0
            },
            {        
              y: 80,
              scrollTrigger: {
                trigger: element.querySelector(".view-section"),
                start: "top top",              
                scrub: true,
              }
            }
        );
        setTimeout(()=>{
            gsap.to(element.querySelector(".mountain02"), {
                scrollTrigger: {
                  trigger: element.querySelector(".spirits-section"),
                  start: "top top",               
                  scrub: true,
                }, 
                y: 200,
            });
            gsap.to(element.querySelector(".clouds"), {
                scrollTrigger: {
                  trigger: element.querySelector(".spirits-section"),
                  start: "top top",               
                  scrub: true,
                }, 
                y: 100,
            });
        },200);

    })
    return (
        <div ref={scrollref}>
            <Header/>
            <div className='page-title'>
                <h1>About Us</h1>                
                <ul className='page-title-link'>
                    <li><a href='/' onClick={(e)=> {e.preventDefault(); toLink("company")}} >公司介紹</a></li>
                    <li><a href='/' onClick={(e)=> {e.preventDefault(); toLink("view")}} >願景宗旨</a></li>
                    <li><a href='/' onClick={(e)=> {e.preventDefault(); toLink("team")}} >營運團隊</a></li>
                    <li><a href='/' onClick={(e)=> {e.preventDefault(); toLink("spirits")}} >Spirits/Motivation</a></li>
                    <li><a href='/' onClick={(e)=> {e.preventDefault(); toLink("history")}} >微電大事紀</a></li>
                </ul>                
            </div>           
            <div className='page-kv'>
                <div className='page-kv-img-wrap'>
                    <img src={about_kv} alt={about_kv} className='page-kv-img'/>
                </div>                
                {/* <a className={`btn-more`} href='/#' onClick={(e)=> {e.preventDefault();toLink("company");}}>
                    <div className='btn-more-wrap'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
                            <circle r="38" cx="40" cy="40" strokeWidth="2" fill="none"></circle>
                            <circle r="38" cx="40" cy="40" strokeWidth="2" fill="none"></circle>
                        </svg>
                        <i className='arrow-right'></i>
                    </div>        
                    <p className='bottom'>Find out more</p>
                </a> */}
            </div>
            <div className='breadcrumb'>
                <div className='container'>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Alink to="/">Home</Alink>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            About Us
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
            <section className='page-about-section view-section' id="view">
                <div className='section-top-line'></div>
                <div className='container'>
                    <Row align="middle">
                        <Col lg={6} md={6} sm={24} xs={24}>
                            <div className=''>
                                <h2>Mission<br/>Vision</h2>
                                <p>我們衷心相信「太陽能即服務」 (Solar as a service) ！</p>
                                <p>微電從太陽能出發，以數據能力為核心，因應不同對象的需求與條件，精準地提供最佳綜效的太陽能應用方案，在開放性的架構下展開跨界合作，讓能源業者、電能使用者、投資者甚至每位國人都有機會參與綠色能源。</p>
                                <p>微電並願成為發動社會共好的綠色引擎，串接能源、公益、文化、消費、金融等各個領域，把綠色能源的價值散播到社會每個角落。</p>
                            </div>
                        </Col>
                        <Col lg={18} md={18} sm={24} xs={24}>
                            <div className='view-img-wrap'>
                                <img className='view-img' src={view_img} alt={view_img}/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className='page-about-section team-section' id="team">
                <div className='section-top-line'></div>
                <div className='container'>
                    <h2>Team</h2>
                    <Row gutter={[32, 32]}>
                        <Col lg={{span:6,offset:6}} md={{span:6,offset:6}} sm={24} xs={24}>
                            <div className='team-box'>
                                <div className='team-box-photo'>
                                    <img src={avatar} alt="王愍廸" />
                                </div>
                                <div className='team-box-txt'>
                                    <div className='team-box-txt-title'>創辦人/董事長</div>
                                    <div className='team-box-txt-name'>王愍廸</div>
                                    <div className='team-box-txt-description'>
                                        微電能源創辦人，具備電機背景、國際金融產業，與公民電廠「一人一千瓦」的推動經驗，2015年創辦微電能源，以Solar as a Service的太陽能願景，組建跨界團隊，創造再生能源電流、金流、資訊流的整合應用。
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={24} xs={24}>
                            <div className='team-box'>
                                <div className='team-box-photo'>
                                    <img src={avatar} alt="武俊祺" />
                                </div>
                                <div className='team-box-txt'>
                                    <div className='team-box-txt-title'>共同創辦人/營運長</div>
                                    <div className='team-box-txt-name'>武俊祺</div>
                                    <div className='team-box-txt-description'>
                                        具有超過25年的半導體與光電業經驗，為微電能源之共同創辦人，並擔任集團營運長，負責集團營運、太陽能電廠籌設維運、團隊發展等事務。
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={[32, 32]}>
                        <Col lg={{span:6,offset:3}} md={{span:6,offset:3}} sm={24} xs={24}>
                            <div className='team-box'>
                                <div className='team-box-photo'>
                                    <img src={avatar} alt="陳心希" />
                                </div>
                                <div className='team-box-txt'>
                                    <div className='team-box-txt-title'>財務長/發言人</div>
                                    <div className='team-box-txt-name'>陳心希</div>
                                    <div className='team-box-txt-description'>
                                        逾30年跨國/兩岸企業之核心領導層與財務長經驗，長於規模型企業之治理、團隊、績效與價值策略，擔任微電能源財務長及集團發言人，負責建構企業治理，提升企業營運與股東價值。
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={24} xs={24}>
                            <div className='team-box'>
                                <div className='team-box-photo'>
                                    <img src={avatar} alt="沈時華" />
                                </div>
                                <div className='team-box-txt'>
                                    <div className='team-box-txt-title'>業務長</div>
                                    <div className='team-box-txt-name'>沈時華</div>
                                    <div className='team-box-txt-description'>
                                        擅長跨產業之商務模式整合和資產價值，擔任微電能源業務長，負責帶領團隊，推動綠能資產整合應用及商務模式開發，包括綠電售電、儲能應用、客戶ESG策略，以及太陽能資產服務之核心業務。
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={24} xs={24}>
                            <div className='team-box'>
                                <div className='team-box-photo'>
                                    <img src={avatar} alt="姜智昂" />
                                </div>
                                <div className='team-box-txt'>
                                    <div className='team-box-txt-title'>技術長</div>
                                    <div className='team-box-txt-name'>姜智昂</div>
                                    <div className='team-box-txt-description'>
                                        專長於雲技術、大數據、人工智慧、物聯網等趨勢技術，以及開發整合，曾深耕於跨國製造業/物流、內容/使用者、行動通訊等領域之數據技術研發，擔任微電能源技術長，負責集團在太陽能監控系統、電網數據、綠電應用、到能源調度管理趨勢的解決方案研發。
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className='spirits-section page-about-section' id="spirits">                
                <h2>Spirits/<br/>Motivation</h2>
                <p>勇敢、大膽、聰明、開創、務實、溫暖、關懷</p>
                <div className="spirits-photo">                    
                    <img className='mountain02' src={spirits_mountain02} alt={spirits_mountain02} />
                    <img className='clouds' src={spirits_clouds} alt={spirits_clouds} />
                    <img className='mountain01' src={spirits_mountain01} alt={spirits_mountain01} />                    
                </div>
            </section>
            <section className='page-about-section history-section' id="history">
                <div className="container">
                    <h2>Milestones Stories</h2>
                    <div className='history-all'>
                        <div className='history-box'>
                            <div className='history-box-item'>
                                <div className='year'>2015</div>
                                <div className="line"><span></span></div>
                                <div className='description'>
                                    <p>
                                        微電能源創立
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='history-box'>
                            <div className='history-box-item'>
                                <div className='year'>2016</div>
                                <div className="line"><span></span></div>
                                <div className='description'>
                                    <p>
                                        福華集團投資
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='history-box'>
                            <div className='history-box-item'>
                                <div className='year'>2017</div>
                                <div className="line"><span></span></div>
                                <div className='description'>
                                    <p>
                                        與私募基金合作 投資金額2800萬元<br/>
                                        完成太陽能監控數據分析模式開發，1MWp電廠試營運
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='history-box'>
                            <div className='history-box-item'>
                                <div className='year'>2018</div>
                                <div className="line"><span></span></div>
                                <div className='description'>
                                    <p>
                                        完成監控數據金融區塊鏈對接POC；太陽能資產管理平台「SOLA」完成上線<br/>
                                        國發天使基金通過投資 太陽能電廠投資總金額突破2億元<br/>
                                        工業局補助智慧城鄉專案
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='history-box'>
                            <div className='history-box-item'>
                                <div className='year'>2019</div>
                                <div className="line"><span></span></div>
                                <div className='description'>
                                    <p>
                                        與國泰世華銀行簽署信託架構合約<br/>
                                        開始進行太陽能 私募股權基金計畫 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='history-box'>
                            <div className='history-box-item'>
                                <div className='year'>2020</div>
                                <div className="line"><span></span></div>
                                <div className='description'>
                                    <p>
                                        行政院國發基金增資微電能源<br/>
                                        聯邦銀行、活水影響力創投投資微電能源
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='history-box'>
                            <div className='history-box-item'>
                                <div className='year'>2021</div>
                                <div className="line"><span></span></div>
                                <div className='description'>
                                    <p>
                                        屏東天璣案場掛錶 成為屏東最大民營發電商<br/>
                                        國統一國際開發、研華科技、璞石晶華、華陽創投集團投資微電能源
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='history-box'>
                            <div className='history-box-item'>
                                <div className='year'>2022</div>
                                <div className="line"><span></span></div>
                                <div className='description'>
                                    <p>
                                        台南廷捷漁電共生160MW聯貸案通過，預計2023完工<br/>
                                        公開發行 籌備上市計畫
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
   
                </div>
            </section>
            <BackTop />
            <Footer/>
        </div>
        
    );
}