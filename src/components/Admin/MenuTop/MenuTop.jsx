import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, PoweroffOutlined } from '@ant-design/icons';

import PaulLogo from '../../../assets/images/png/logo-white.png';

import './MenuTop.scss';

export const MenuTop = memo(({ menuCollapsed, setMenuCollapsed }) => {

  console.log('me volvi a ejecutar :( - MenuTop');

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <Link to="/admin">
          <img
            className="menu-top__left-logo"
            src={PaulLogo}
            alt="Paul"
          />
        </Link>
        <Button
          type="link"
          onClick={() => setMenuCollapsed(!menuCollapsed)}
        >
          {(menuCollapsed)
            ? <MenuFoldOutlined />
            : <MenuUnfoldOutlined />
          }
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" >
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  )
})