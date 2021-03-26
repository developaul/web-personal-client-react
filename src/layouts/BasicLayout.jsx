import React from 'react';
import { Layout } from 'antd';

import { LoadRoutes } from '../routers/LoadRoutes';

import './BasicLayout.scss';

const { Content, Footer } = Layout;

export const BasicLayout = ({ routes }) => {
  return (
    <Layout>
      <h2>Menu</h2>
      <Layout>
        <Content>
          <LoadRoutes routes={routes} />
        </Content>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  )
}

