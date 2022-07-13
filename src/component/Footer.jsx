import React from 'react';
import {Row, Col} from 'antd';
import { Divider } from 'antd';
import logo from "../images/logo_white.svg";

export default function Footer(props){
    return (
        <footer className="footer">
            <div className="container">
                <Row>
                    <Col lg={6} md={6} sm={24} xs={24}>
                        <a href='/' className='footer-logo'><img src={logo} alt="logo" /> </a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis lorem posuere non non congue risus enim porttitor nascetur. Nunc integer id venenatis feugiat velit nunc enim. Quis proin et, sed sit tincidunt. Eget auctor mattis vestibulum, et.</p> 
                    </Col>
                    <Col lg={6} md={6} sm={24} xs={24}>                         
                    </Col>
                    <Col lg={12} md={12} sm={24} xs={24}>
                         <Row>
                            <Col lg={12} md={12} sm={24} xs={24}>
                                <h6>About</h6>
                                <p><a href='/'>Company introduction</a></p>
                                <p><a href='/'>Vision</a></p>
                                <p><a href='/'>Our team</a></p>
                            </Col>
                            <Col lg={12} md={12} sm={24} xs={24}>
                                <h6>Services</h6>
                                <p><a href='/'>PV Power Plant Solutionsc</a></p>
                                <p><a href='/'>Renewable Energy Applications</a></p>
                                <p><a href='/'>PV Power Plant Operation and Management</a></p>
                            </Col>
                        </Row> 
                        <Row>
                            <Col lg={12} md={12} sm={24} xs={24}>
                                <h6>About</h6>
                                <p><a href='/'>Company introduction</a></p>
                                <p><a href='/'>Vision</a></p>
                                <p><a href='/'>Our team</a></p>
                            </Col>
                            <Col lg={12} md={12} sm={24} xs={24}>
                                <h6>Services</h6>
                                <p><a href='/'>PV Power Plant Solutionsc</a></p>
                                <p><a href='/'>Renewable Energy Applications</a></p>
                                <p><a href='/'>PV Power Plant Operation and Management</a></p>
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