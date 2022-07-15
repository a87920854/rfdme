import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Menu, Dropdown, Row, Col, Button, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import logo from "../images/logo.svg";
import logo_w from "../images/logo_white.svg";
import { useRef } from 'react';

export default function Header(props) {
    const headerItem = useRef();
    const [scroll,setScroll]=useState("");
    // const [padding,setPadding]=useState("");
    const [menuVisible, setMenuVisible] = useState(false);
    const headerClassName = classNames({
        clearfix: true,
        headerTranprent: props.transparent,
    });
    useEffect(()=>{
        
        window.addEventListener('scroll',()=>{      
            setScroll(window.scrollY > headerItem.current.offsetHeight ? "scroll" : "");    
        });
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
                <Button href={"/"} type="link">
                    首頁
                </Button>
            </li>
            <li>
            <Dropdown overlay={menu2}>
                <a href='/#' onClick={(e) => e.preventDefault()}>
                <Space>
                    關於我們
                    <DownOutlined />
                </Space>
                </a>
            </Dropdown>
            </li>
            <li>
                <Button href={"/"} type="link">
                    最新消息
                </Button>
            </li>
            <li>
                <Button href={"/"} type="link">
                    服務內容
                </Button>
            </li>
            <li>
                <Button href={"/"} type="link">
                    電廠實績
                </Button>
            </li>
            <li>
                <Button href={"/contact"} type="link">
                    聯絡我們
                </Button>
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
                            <a href="/" id="logo">
                                <div className='logo-wrap'>
                                    <img src={logo} alt="logo"  className='logo'/>
                                </div>
                                <div className='logo-w-wrap'>
                                    <img src={logo_w} alt="logo" className='logo-w'/> 
                                </div>                                                
                            </a>
                        </div>                        
                    </Col>
                    <Col lg={16} md={18} sm={0} xs={0}>
                        { menu }
                    </Col>                    
                    <Col lg={0} md={0} sm={4} xs={4}>
                        <div
                            className={menuVisible ?'header-mobile-menu open':'header-mobile-menu'}
                            onClick={() => {
                                phoneClick();
                            }}
                        >
                            <em />
                            <em />
                            <em />
                        </div>
                    </Col>
                </Row>
                <div className="header-bottomline"></div>                
            </div>   
        </header>
    );

}
