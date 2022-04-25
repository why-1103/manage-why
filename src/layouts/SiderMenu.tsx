import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { history } from 'umi';
import {
  BarChartOutlined,
  PieChartOutlined,
  LineChartOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

interface ISiderMenuProps {
  collapsed: boolean;
}

export default function SiderMenu(props: ISiderMenuProps) {
  // 收缩侧边栏
  const { collapsed } = props;
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">logo</div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        onClick={(e) => {
          const { key } = e;
          history.push(key);
        }}
        items={[
          {
            key: '/charts/bar',
            icon: <BarChartOutlined />,
            label: '柱状图',
          },
          {
            key: '/charts/brokenline',
            icon: <LineChartOutlined />,
            label: '折线图',
          },
          {
            key: '/charts/doughnut',
            icon: <PieChartOutlined />,
            label: '饼图',
          },
        ]}
      />
    </Sider>
  );
}
