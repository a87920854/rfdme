import React from 'react';
import { Link as Alink } from 'react-router-dom';
import { Link } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Row, Col, BackTop, Breadcrumb, Pagination } from 'antd';

export default function Contact() {    

    return (
        <div>
            <Header/>
            <div className='page-title'>
                <h1>News</h1>
            </div>           
            <div className='breadcrumb'>
                <div className='container'>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Alink to="/">Home</Alink>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            News
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>   
            </div>
            <section className='page-news-section'>
                <div className='container'>
                    <div className="page-news-content">
                        <Row>
                            <Col lg={{span:16,offset:4}} md={{span:16,offset:4}} sm={24} xs={24}>
                                <div className='page-news-list'>
                                    <Link className='news-item' to="/">
                                        <div className='news-item-date'>
                                            <div className='news-item-date-day'>24</div>
                                            <div className='news-item-date-month'>2022.07</div>
                                        </div>
                                        <div className='news-item-content'>
                                            <h3>讓綠能更有價值！微電能源用太陽能推動共好價值鏈微電能源用太陽能推動共好價值鏈</h3>
                                            <p>全球追求淨零碳排如火如荼，台灣也宣布2050淨零轉型政策，積極發展再生能源，成為未來的發電主力，其中風電和光電更是重中之重。2015年創立的微電能源，跨界集結能量，持續致力加值綠能，讓太陽能不只是發電...</p>
                                        </div>
                                    </Link>
                                    <Link className='news-item' to="/">
                                        <div className='news-item-date'>
                                            <div className='news-item-date-day'>24</div>
                                            <div className='news-item-date-month'>2022.07</div>
                                        </div>
                                        <div className='news-item-content'>
                                            <h3>讓綠能更有價值！微電能源用太陽能推動共好價值鏈微電能源用太陽能推動共好價值鏈</h3>
                                            <p>全球追求淨零碳排如火如荼，台灣也宣布2050淨零轉型政策，積極發展再生能源，成為未來的發電主力，其中風電和光電更是重中之重。2015年創立的微電能源，跨界集結能量，持續致力加值綠能，讓太陽能不只是發電...</p>
                                        </div>
                                    </Link>
                                    <Link className='news-item' to="/">
                                        <div className='news-item-date'>
                                            <div className='news-item-date-day'>24</div>
                                            <div className='news-item-date-month'>2022.07</div>
                                        </div>
                                        <div className='news-item-content'>
                                            <h3>讓綠能更有價值！微電能源用太陽能推動共好價值鏈微電能源用太陽能推動共好價值鏈</h3>
                                            <p>全球追求淨零碳排如火如荼，台灣也宣布2050淨零轉型政策，積極發展再生能源，成為未來的發電主力，其中風電和光電更是重中之重。2015年創立的微電能源，跨界集結能量，持續致力加值綠能，讓太陽能不只是發電...</p>
                                        </div>
                                    </Link>
                                    <Link className='news-item' to="/">
                                        <div className='news-item-date'>
                                            <div className='news-item-date-day'>24</div>
                                            <div className='news-item-date-month'>2022.07</div>
                                        </div>
                                        <div className='news-item-content'>
                                            <h3>讓綠能更有價值！微電能源用太陽能推動共好價值鏈微電能源用太陽能推動共好價值鏈</h3>
                                            <p>全球追求淨零碳排如火如荼，台灣也宣布2050淨零轉型政策，積極發展再生能源，成為未來的發電主力，其中風電和光電更是重中之重。2015年創立的微電能源，跨界集結能量，持續致力加值綠能，讓太陽能不只是發電...</p>
                                        </div>
                                    </Link>
                                    <Link className='news-item' to="/">
                                        <div className='news-item-date'>
                                            <div className='news-item-date-day'>24</div>
                                            <div className='news-item-date-month'>2022.07</div>
                                        </div>
                                        <div className='news-item-content'>
                                            <h3>讓綠能更有價值！微電能源用太陽能推動共好價值鏈微電能源用太陽能推動共好價值鏈</h3>
                                            <p>全球追求淨零碳排如火如荼，台灣也宣布2050淨零轉型政策，積極發展再生能源，成為未來的發電主力，其中風電和光電更是重中之重。2015年創立的微電能源，跨界集結能量，持續致力加值綠能，讓太陽能不只是發電...</p>
                                        </div>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                        <Row justify="center">
                            <Col>
                                <div className="pagination">
                                    <Pagination defaultCurrent={1} total={50} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    
                </div>
            </section>

            <BackTop />
            <Footer/>
        </div>
        
    );
}