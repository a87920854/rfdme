import React, { useState, useLayoutEffect, useEffect, useRef } from 'react';
import classNames from 'classnames';
import {NavLink, Link} from 'react-router-dom';
import Dropdown from './Dropdown';
import { Row, Col, Button } from 'antd';
import logo from "../images/logo.svg";
import logo_w from "../images/logo_white.svg";

export default function Header(props) {
    const headerItem = useRef();    
    const [dropclass,setDropclass]=useState("");
    const [scroll,setScroll]=useState("");
    const [menuVisible, setMenuVisible] = useState(false);
    const headerClassName = classNames({
        clearfix: true,
        headerTranparent: props.transparent,
    });
    const menuDropItem_about = [
        {
            id:"公司介紹",
            title:"公司介紹",
            url:"/about",
            hash:"",
        },
        {
            id:"願景宗旨",
            title:"願景宗旨",
            url:"/about",
            hash:"view",
        },
        {
            id:"營運團隊",
            title:"營運團隊",
            url:"/about",
            hash:"team",
        },
        {
            id:"Spirits/Motivation",
            title:"Spirits/Motivation",
            url:"/about",
            hash:"spirits",
        },
        {
            id:"微電大事紀",
            title:"微電大事紀",
            url:"/about",
            hash:"history",
        },
    ]
    const menuDropItem_service = [
        {
            id:"太陽能電廠整合方案",
            title:"太陽能電廠整合方案",
            url:"/service",
            hash:"",
        },
        {
            id:"綠能應用解決方案",
            title:"綠能應用解決方案",
            url:"/service",
            hash:"green",
        },
        {
            id:"瓦力電能：綠能採購",
            title:"瓦力電能：綠能採購",
            url:"/service",
            hash:"wali01",
        },
        {
            id:"瓦力電能：綠電銷售代理",
            title:"瓦力電能：綠電銷售代理",
            url:"/service",
            hash:"wali02",
        },
        {
            id:"Light Donate",
            title:"Light Donate",
            url:"/service",
            hash:"lightdonate",
        },
        {
            id:"電廠銷售服務",
            title:"電廠銷售服務",
            url:"/service",
            hash:"evsale",
        },
    ]
    const dropItemSet = (isview) => {
        setDropclass(isview);
    }
    useLayoutEffect(()=>{
        window.onload = function(){
            clearTimeout(tt);            
        }      
        const tt = setTimeout(()=>{
            window.scrollTo(0, 0);
        },1000); 
    },[])
    useEffect(()=>{
        if(props.transparent === "true"){
            window.addEventListener('scroll',()=>{      
                setScroll(window.scrollY > 0 ? "scroll" : "");
            });
        }
        
    })
    const phoneClick = () => {
        setMenuVisible(!menuVisible);
    };

    const menu = [
        <ul className="header-menu" key={"menu"}>
            <li>
                <NavLink to="/">
                    首頁
                </NavLink>
            </li>            
            <li>            
                <Dropdown view={dropItemSet} content={menuDropItem_about} title={"關於我們"}/>
            </li>
            <li>
                <NavLink to="/news">
                    最新消息
                </NavLink>
            </li>
            <li>
                <Dropdown view={dropItemSet} content={menuDropItem_service} title={"服務內容"}/>
            </li>
            <li>
                <NavLink to="/project">
                    電廠實績
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact">
                    聯絡我們
                </NavLink>
            </li>
            <li>
                <div className="header-rightline"></div>
                <Button href={"/"} type="link">
                    EN
                </Button>                
            </li>
        </ul>
    ];

    return (
        <>
            <header id="header" className={headerClassName + " " +  scroll + " " + dropclass} ref={headerItem}>
                <div className='header-bg'></div>
                <div className="header-container">
                    <Row justify="space-between">
                        <Col lg={8} md={6} sm={20} xs={20}>
                            <div className="header-logo">
                                <Link to="/" id="logo">
                                    <div className='logo-wrap'>
                                        <img src={logo} alt="logo"  className='logo'/>
                                    </div>
                                    <div className='logo-w-wrap'>
                                        <img src={logo_w} alt="logo" className='logo-w'/> 
                                    </div>                                                
                                </Link>
                            </div>                        
                        </Col>
                        <Col lg={16} md={18} sm={4} xs={4}>
                            <div
                                className={menuVisible ?'header-mobile-menu open':'header-mobile-menu'}
                                onClick={() => {
                                    phoneClick();
                                }}
                            >
                                <em />
                                <em />
                            </div>
                            { menu }
                        </Col>                    
                    </Row>
                    <div className="header-menuline"></div>   
                    <div className="header-bottomline"></div>                
                </div>   
            </header>
        </>
    );

}
