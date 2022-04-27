import React, { useState } from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import DynamicAntdTheme from 'dynamic-antd-theme';
import './BasicLayout.less';
import SiderMenu from './SiderMenu';
import ThemeToggle from './components/ThemeToggle';

const { Header, Content } = Layout;

interface IBasicLayoutProps {
  children: string | React.ReactNode;
  history: any;
  location: any;
  match: any;
  route: any;
  routes: any[];
  staticContext: any;
}

function BasicLayout(props: IBasicLayoutProps) {
  const { children, routes } = props;

  return (
    <Layout>
      <SiderMenu menuData={routes} />
      <Layout className="site-layout">
        <Header className="header" style={{ padding: 0 }}>
          {/* <DynamicAntdTheme /> */}
          <ThemeToggle />
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 680,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default BasicLayout;
