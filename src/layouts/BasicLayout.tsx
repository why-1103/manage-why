import React, { useState } from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import './BasicLayout.less';
import SiderMenu from './SiderMenu';

const { Header, Sider, Content } = Layout;

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
  // 收缩侧边栏
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <SiderMenu collapsed={collapsed} menuData={routes} />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: toggle,
            },
          )}
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
