import React from 'react';
import { Link } from 'react-router-dom';
import {Row, Col} from 'antd';
import { Divider } from 'antd';
import logo from "../images/logo_white.svg";
import icon_arrow from "../images/icon-arrow.svg";

export default function Footer(props){
    return (
        <footer className="footer">
            <div className="container">
                <Row>
                    <Col lg={6} md={6} sm={24} xs={24}>
                        <Link to="/" className='footer-logo'><img src={logo} alt="logo" /> </Link>
                    </Col>
                    <Col lg={6} md={6} sm={24} xs={24}>                         
                    </Col>
                    <Col lg={12} md={12} sm={24} xs={24}>
                         <Row gutter={[16, 16]}>
                            <Col lg={8} md={8} sm={24} xs={24}>
                                <h6><Link to="/">關於我們</Link></h6>
                                <Link className='footer-link' to="/"><div className='footer-link-img'><img src={icon_arrow} alt="arrow"/></div>公司介紹</Link>
                                <Link className='footer-link' to="/"><div className='footer-link-img'><img src={icon_arrow} alt="arrow"/></div>願景宗旨</Link>
                                <Link className='footer-link' to="/"><div className='footer-link-img'><img src={icon_arrow} alt="arrow"/></div>營運團隊</Link>
                                <Link className='footer-link' to="/"><div className='footer-link-img'><img src={icon_arrow} alt="arrow"/></div>Spirits/Motivation</Link>
                                <Link className='footer-link' to="/"><div className='footer-link-img'><img src={icon_arrow} alt="arrow"/></div>微電大事紀</Link>

                            </Col>
                            <Col lg={8} md={8} sm={24} xs={24}>
                                <h6><Link to="/">服務內容</Link></h6>
                                <Link className='footer-link' to="/"><div className='footer-link-img'><img src={icon_arrow} alt="arrow"/></div>太陽能電廠整合方案</Link>
                                <Link className='footer-link' to="/"><div className='footer-link-img'><img src={icon_arrow} alt="arrow"/></div>綠能應用解決方案</Link>
                                <Link className='footer-link' to="/"><div className='footer-link-img'><img src={icon_arrow} alt="arrow"/></div>瓦力電能：綠能採購</Link>
                                <Link className='footer-link' to="/"><div className='footer-link-img'><img src={icon_arrow} alt="arrow"/></div>瓦力電能：綠電銷售代理</Link>
                                <Link className='footer-link' to="/"><div className='footer-link-img'><img src={icon_arrow} alt="arrow"/></div>Light Donate</Link>
                                <Link className='footer-link' to="/"><div className='footer-link-img'><img src={icon_arrow} alt="arrow"/></div>電廠銷售服務</Link>
                            </Col>
                            <Col lg={8} md={8} sm={24} xs={24}>
                                <h6><Link to="/">最新消息</Link></h6>
                                <h6><Link to="/">電廠實績</Link></h6>
                                <h6><Link to="/contact">聯絡我們</Link></h6>
                            </Col>
                        </Row> 
                        {/* <Row>
                            <Col lg={12} md={12} sm={24} xs={24}>
                                <h6><Link to="/">News</Link></h6>
                                <h6><Link to="/">Project</Link></h6>
                            </Col>
                            <Col lg={12} md={12} sm={24} xs={24}>
                                <h6><Link to="/contact">Contact</Link></h6>
                                
                            </Col>
                        </Row>                 */}
                    </Col>
                </Row>
                <Divider/>
                <div className='footer-copyright'>
                    <p>© 2020 RFD Micro Electricity Co., Ltd. All rights reserved.</p>
                </div>
            </div>            
        </footer>
    )
}