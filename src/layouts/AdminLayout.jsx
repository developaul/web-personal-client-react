import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Layout } from 'antd';

import { LoadRoutes } from '../routers/LoadRoutes';
import { MenuTop } from '../components/Admin/MenuTop'
import { MenuSider } from '../components/Admin/MenuSider'
import { AdminSignIn } from '../pages/Admin';

import './AdminLayout.scss';

const { Header, Content, Footer } = Layout;

export const AdminLayout = ({ routes }) => {
  const [menuCollapsed, setMenuCollapsed] = useState(false);

  const user = null;

  if (!user) return (
    <>
      <Route path="/admin/login" component={AdminSignIn} />
      <Redirect to="/admin/login" />
    </>
  );

  return (
    <>
      <Layout>
        <MenuSider
          menuCollapsed={menuCollapsed}
        />
        <Layout className="admin-layout">
          <Header className="admin-layout__header">
            <MenuTop
              setMenuCollapsed={setMenuCollapsed}
              menuCollapsed={menuCollapsed}
            />
          </Header>
          <Content className="admin-layout__content">
            <LoadRoutes routes={routes} />
          </Content>
          <Footer className="admin-layout__footer">
            @developaul
          </Footer>
        </Layout>
      </Layout>
    </>
  )
}