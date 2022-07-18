import React from 'react';
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Row, Col, BackTop, Breadcrumb, Input, Form, Button } from 'antd';

export default function Contact() {
    const { TextArea } = Input;
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };   
    const company = [
        {
            id:1,
            company:"新竹總公司",
            address:"302 新竹縣竹北市文興路二段100號4樓",
            tel:"(03) 658-6456",
            fax:"(03) 658-2085",
            email:"rfdme@rfdme.com"
        },
        {
            id:2,
            company:"台北辦公室",
            address:"110 台北市信義區信義路五段7號38樓A室",
            tel:"(02) 8101-6002 #3",
            fax:"",
            email:""
        },
        {
            id:3,
            company:"台南辦公室",
            address:"711 台南市歸仁區中正南路二段43巷5號",
            tel:"(06) 303-2797",
            fax:"(06) 303-2552",
            email:""
        },
        {
            id:4,
            company:"屏東辦公室",
            address:"928 屏東縣東港鎮大同路451號",
            tel:"(08) 832-5371",
            fax:"",
            email:""
        },
    ]
    return (
        <div>
            <Header/>
            <div className='page-title'>
                <h1>CONTACT US</h1>
            </div>
            <div className='breadcrumb'>
                <div className='container'>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <a href="/">Home</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            Contact Us
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>   
            </div>
            <section className='page-contact'>
                <div className='container'>
                    <div className='address'>
                        <Row gutter={[16, 16]}>                      
                            { company.map((item)=>{
                                return (
                                    <Col lg={6} md={6} sm={12} xs={24} key={item.id}>
                                        <div className='address-item'>
                                            <h3>{item.company}</h3>
                                            <h4>Address:</h4>
                                            {item.address ? <p className='p-address'>{item.address}</p> : ""}
                                            {item.tel ? <p><span>Tel:</span> {item.tel}</p> : ""}
                                            {item.fax ? <p><span>Fax:</span> {item.fax}</p> : ""}
                                            {item.email ? <p><span>Email:</span> {item.email}</p> : ""}
                                        </div>
                                    </Col>
                                )
                            }) }
                        </Row>
                    </div>
                </div>
            </section>
            <section className='page-contact-form'>
                <div className='container'>
                    
                    <Row>
                        <Col lg={{span:12,offset:6}} md={{span:12,offset:6}} sm={24} xs={24}>
                            <div className='page-contact-box'>
                                <h3>聯絡我們</h3>
                                <div className='page-contact-formbox'>
                                <Form
                                    name="basic"
                                    layout="vertical"
                                    labelCol={{
                                        span: 24,
                                    }}
                                    wrapperCol={{
                                        span: 24,
                                    }}
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                        <Form.Item label="姓名" required>
                                            <Input placeholder="請輸入您的姓名" />
                                        </Form.Item>
                                        <Form.Item label="電子郵件" required>
                                            <Input placeholder="請輸入您的電子郵件" />
                                        </Form.Item>
                                        <Form.Item label="電話" required>
                                            <Input placeholder="請輸入您的電話" />
                                        </Form.Item>
                                        <Form.Item label="訊息" required>
                                            <TextArea rows={8} maxLength={12} placeholder="請輸入您的訊息" />
                                        </Form.Item>
                                        <Form.Item>
                                            <Button type="secondary" block>傳送</Button>
                                        </Form.Item>
                                    </Form>
                                </div>
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