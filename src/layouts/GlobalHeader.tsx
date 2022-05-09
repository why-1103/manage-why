import React from 'react';
import { Layout } from 'antd';

import ThemeToggle from './components/ThemeToggle';
import UserSetting from './components/UserSetting';

const { Header } = Layout;
function GlobalHeader(props: any) {
  return (
    <Header style={{ padding: 0, textAlign: 'right' }}>
      {/* <DynamicAntdTheme /> */}
      <ThemeToggle />
      <UserSetting />
    </Header>
  );
}
export default GlobalHeader;
