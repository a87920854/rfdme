import React, { useState, useLayoutEffect, useEffect, useRef } from 'react';
import classNames from 'classnames';
import {NavLink, Link} from 'react-router-dom';
import { Menu, Dropdown, Row, Col, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import logo from "../images/logo.svg";
import logo_w from "../images/logo_white.svg";

export default function Header(props) {
    const headerItem = useRef();    
    const [dropclass,setDropclass]=useState("");
    const [scroll,setScroll]=useState("");
    // const [padding,setPadding]=useState("");
    const [menuVisible, setMenuVisible] = useState(false);
    const headerClassName = classNames({
        clearfix: true,
        headerTranparent: props.transparent,
    });
    const dropdownfunc = () => {
        setDropclass("open");
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
        if(props.transparent !== "true"){
            // const headerHeight = headerItem.current.offsetHeight;
            // window.addEventListener('scroll',()=>{      
            //     if(window.scrollY > 0 ){
            //         if(window.scrollY < headerHeight){
            //             document.body.style.paddingTop = window.scrollY + "px";
            //         }else{
            //             document.body.style.paddingTop = headerHeight + "px";
            //         }               
            //     }
            // });
        }else{
            window.addEventListener('scroll',()=>{      
                setScroll(window.scrollY > 0 ? "scroll" : "");
            });
        }
        
    })
    const phoneClick = () => {
        // const phoneOpen = !this.state.phoneOpen;
        setMenuVisible(!menuVisible);
    };
    const menu2 = (
        <Menu
          items={[
            {
                key: '1',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    關於我們
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                  <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    公司願景
                  </a>
                ),
            },
            {
                key: '3',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    團隊
                    </a>
                ),
            },
            {
                key: '4',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    動機
                    </a>
                ),
            },
            {
                key: '5',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    公司歷史
                    </a>
                ),
            },
          ]}
        />
      );

    const menu = [
        // <Button className="header-lang-button" ghost size="small" key="lang">
        //     English
        // </Button>,
        <ul className="header-menu" key={"menu"}>
            <li>
                <NavLink to="/">
                    首頁
                </NavLink>
            </li>            
            <li>            
                <a className='header-dropbtn' href='/#' onClick={(e) => dropdownfunc }>
                    關於我們                                    
                </a>
                <ul className={`header-dropmenu ${dropclass}`}>
                    <li><Link to="/">公司介紹</Link></li>
                    <li><Link to="/">願景宗旨</Link></li>
                    <li><Link to="/">營運團隊</Link></li>
                    <li><Link to="/">Spirits/Motivation</Link></li>
                    <li><Link to="/">微電大事紀</Link></li>
                </ul>         
            </li>
            <li>
                <NavLink to="/">
                    最新消息
                </NavLink>
            </li>
            <li>
                <NavLink to="/">
                    服務內容
                </NavLink>
            </li>
            <li>
                <NavLink to="/">
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
        </ul>,
    ];

    return (
        <header id="header" className={headerClassName + " " +  scroll} ref={headerItem}>
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
                <div className="header-bottomline"></div>                
            </div>   
        </header>
    );

}
