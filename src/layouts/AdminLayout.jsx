import React from 'react';
import { Layout } from 'antd';

import { LoadRoutes } from '../routers/LoadRoutes';

import './AdminLayout.scss';

const { Header, Content, Footer, Sider } = Layout;

export const AdminLayout = ({ routes }) => {

  console.log(routes);

  return (
    <>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>
          <LoadRoutes routes={routes} />
        </Content>
        <Footer>@developaul</Footer>
      </Layout>
    </>
  )
}