import React from 'react';
import { Menu, Dropdown, Avatar, Image } from 'antd';
import { LogoutOutlined, EditOutlined } from '@ant-design/icons';

function UserSetting(props: any) {
  const handleMenuClick = (e: any) => {
    const { key } = e;
    switch (key) {
      case 'resetpwd':
        console.log('修改密码');
        break;
      case 'logout':
        logout();
        break;
      default:
        break;
    }
  };
  const logout = () => {
    // authorize
    console.log('注销登录');
  };
  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: '修改密码',
          key: 'resetpwd',
          icon: <EditOutlined />,
        },
        {
          type: 'divider',
        },
        {
          label: '注销',
          key: 'logout',
          icon: <LogoutOutlined />,
          // disabled: true,
        },
      ]}
    />
  );

  return (
    <Dropdown overlay={menu}>
      <span
        style={{
          cursor: 'pointer',
          paddingLeft: 12,
          paddingRight: 12,
          display: 'inline-block',
          height: '100%',
          color: '#fff',
        }}
      >
        <span className="ant-dropdown-link">
          <Avatar
            // src={
            //   <Image
            //     // src="https://joeschmoe.io/api/v1/random"
            //     src="https://images.pexels.com/photos/6962024/pexels-photo-6962024.jpeg"
            //     style={{ width: 32 }}
            //   />
            // }
            src="https://images.pexels.com/photos/6962024/pexels-photo-6962024.jpeg"
          />
          <span style={{ display: 'inline-block', padding: '0 5px' }}>
            hello,why
          </span>
        </span>
      </span>
    </Dropdown>
  );
}
export default UserSetting;
