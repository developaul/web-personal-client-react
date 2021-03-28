import React, { memo } from 'react'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MenuOutlined } from '@ant-design/icons';

import './MenuSider.scss';

const { Sider } = Layout;

export const MenuSider = memo(({ menuCollapsed }) => {

  console.log('me volvi a ejecutar :( - MenuSider');

  return (
    <Sider className="menu-sider" collapsed={menuCollapsed}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" >
          <Link to="/admin">
            <HomeOutlined />
            <span className="nav-text">Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2" >
          <Link to="/admin/menu-web">
            <MenuOutlined />
            <span className="nav-text">Menu Web</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
})
