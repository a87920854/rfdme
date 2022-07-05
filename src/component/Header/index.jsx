import React, { useState } from 'react';
import classNames from 'classnames';
import { Menu, Dropdown, Row, Col, Button, Space } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import logo from "../../images/logo.svg";


export default function Header(props) {
    const [menuVisible, setMenuVisible] = useState(false);

    const headerClassName = classNames({
        clearfix: true,
    });

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
                  1st menu item
                </a>
              ),
            },
            {
              key: '2',
              label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                  2nd menu item (disabled)
                </a>
              ),
              icon: <SmileOutlined />,
              disabled: true,
            },
            {
              key: '3',
              label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                  3rd menu item (disabled)
                </a>
              ),
              disabled: true,
            },
            {
              key: '4',
              danger: true,
              label: 'a danger item',
            },
          ]}
        />
      );

    const menu = [
        // <Button className="header-lang-button" ghost size="small" key="lang">
        //     English
        // </Button>,
        <ul className={"header-menu"} key={"menu"}>
            <li>
                <Button href={"/"} type="link">
                    首頁
                </Button>
            </li>
            <li>
            <Dropdown overlay={menu2}>
                <a onClick={(e) => e.preventDefault()}>
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
                <Button href={"/"} type="link">
                    聯絡我們
                </Button>
            </li>
        </ul>,
    ];

    return (
        <header id="header" className={headerClassName}>
            <div className="header-container">
                <Row justify="space-between">
                    <Col lg={8} md={6} sm={20} xs={20}>
                        <div className="header-logo">
                            <a id="logo">
                                <img src={logo} alt="logo" />                        
                            </a>
                        </div>                        
                    </Col>
                    <Col lg={16} md={18} sm={0} xs={0}>
                        { menu }
                    </Col>
                    <Col lg={0} md={0} sm={4} xs={4}>
                        <div
                            className={menuVisible ?'header2-mobile-menu open':'header2-mobile-menu'}
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
            </div>   
        </header>
    );

}
