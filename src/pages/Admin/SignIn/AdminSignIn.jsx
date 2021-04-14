import React from 'react';
import { Redirect } from 'react-router-dom';
import { Layout, Tabs } from 'antd';

import Logo from '../../../assets/images/png/logo-white.png';

import './AdminSignIn.scss';

const { Content } = Layout;
const { TabPane } = Tabs;

export const AdminSignIn = () => {
  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <h1 className="sign-in__content-logo">
          <img src={Logo} alt="Paul Chávez" />
        </h1>

        <div className="sign-in__content-tabs">
          <Tabs type='card'>
            <TabPane tab={<span>Entrar</span>} key="1" >
              Componente de Login Form
            </TabPane>
            <TabPane tab={<span>Nuevo usuario</span>} key="2" >
              Componente de Register Form
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  )
}
