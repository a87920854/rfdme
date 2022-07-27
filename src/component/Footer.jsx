import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Modal, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import logo from "../images/logo_white.svg";
import icon_arrow from "../images/icon-arrow.svg";

export default function Footer(props){
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <footer className="footer">
            <div className="container">
                <Row>
                    <Col lg={6} md={24} sm={24} xs={24}>
                        <Link to="/" className='footer-logo'><img src={logo} alt="logo" /> </Link>
                    </Col>
                    <Col lg={6} md={24} sm={24} xs={24}>                         
                    </Col>
                    <Col lg={12} md={24} sm={24} xs={24}>
                         <Row gutter={[16, 16]}>
                            <Col lg={8} md={8} sm={8} xs={24}>
                                <h6><Link to="/about">關於我們</Link></h6>
                                <Link className='footer-link' to="/about"><div className='footer-link-img'><img src={icon_arrow} alt="arrow"/></div>公司介紹</Link>
                                <Link className='footer-link' to="/about"><div className='footer-link-img'><img src={icon_arrow} alt="arrow"/></div>願景宗旨</Link>
                                <Link className='footer-link' to="/about"><div className='footer-link-img'><img src={icon_arrow} alt="arrow"/></div>營運團隊</Link>
                                <Link className='footer-link' to="/about"><div className='footer-link-img'><img src={icon_arrow} alt="arrow"/></div>Spirits/Motivation</Link>
                                <Link className='footer-link' to="/about"><div className='footer-link-img'><img src={icon_arrow} alt="arrow"/></div>微電大事紀</Link>

                            </Col>
                            <Col lg={8} md={8} sm={8} xs={24}>
                                <h6><Link to="/service">服務內容</Link></h6>
                                <Link className='footer-link' to="/service"><div className='footer-link-img'><img src={icon_arrow} alt="arrow"/></div>太陽能電廠整合方案</Link>
                                <Link className='footer-link' to="/service"><div className='footer-link-img'><img src={icon_arrow} alt="arrow"/></div>綠能應用解決方案</Link>
                                <Link className='footer-link' to="/service"><div className='footer-link-img'><img src={icon_arrow} alt="arrow"/></div>瓦力電能：綠能採購</Link>
                                <Link className='footer-link' to="/service"><div className='footer-link-img'><img src={icon_arrow} alt="arrow"/></div>瓦力電能：綠電銷售代理</Link>
                                <Link className='footer-link' to="/service"><div className='footer-link-img'><img src={icon_arrow} alt="arrow"/></div>Light Donate</Link>
                                <Link className='footer-link' to="/service"><div className='footer-link-img'><img src={icon_arrow} alt="arrow"/></div>電廠銷售服務</Link>
                            </Col>
                            <Col lg={8} md={8} sm={8} xs={24}>
                                <h6><Link to="/news">最新消息</Link></h6>
                                <h6><Link to="/project">電廠實績</Link></h6>
                                <h6><a href='/#' onClick={(e)=>{ e.preventDefault();showModal()}}>電業訊息</a></h6>
                                <Modal title="電業訊息" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                    <dl className='modal-list'>
                                        <dt>111年</dt>
                                        <dd>
                                            <Button type="link" shape="round" icon={<DownloadOutlined />} size='small'>
                                                111年1月電業月報.pdf
                                            </Button>
                                        </dd>
                                        <dd>
                                            <Button type="link" shape="round" icon={<DownloadOutlined />} size='small'>
                                                111年1月電業月報.pdf
                                            </Button>
                                        </dd>  
                                        <dd>
                                            <Button type="link" shape="round" icon={<DownloadOutlined />} size='small'>
                                                111年1月電業月報.pdf
                                            </Button>
                                        </dd>  
                                        <dd>
                                            <Button type="link" shape="round" icon={<DownloadOutlined />} size='small'>
                                                111年1月電業月報.pdf
                                            </Button>
                                        </dd>                   
                                    </dl>
                                </Modal>
                            </Col>
                        </Row> 
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