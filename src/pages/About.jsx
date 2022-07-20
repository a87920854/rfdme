import React from 'react';
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Row, Col, BackTop, Breadcrumb } from 'antd';

export default function Contact() {

    return (
        <div>
            <Header/>
            <div className='page-title'>
                <h1>About Us</h1>
            </div>
            <div className='breadcrumb'>
                <div className='container'>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <a href="/">Home</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            About Us
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>   
            </div>


            <BackTop />
            <Footer/>
        </div>
        
    );
}