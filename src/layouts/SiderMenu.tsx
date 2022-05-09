import React, { useState, useEffect } from 'react';
import { Layout, Menu, MenuProps } from 'antd';
import { history } from 'umi';
import { IconTool } from '@/utils/utils';

const { Sider } = Layout;

interface ISiderMenuProps {
  menuData: any[];
}

type MenuItem = Required<MenuProps>['items'][number];

export default function SiderMenu(props: ISiderMenuProps) {
  // 收缩侧边栏
  const { menuData } = props;
  const [menuItems, setMenuItems] = useState<any>([]);

  // 收缩侧边栏
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const buildMenuItemsData = (menuData: any[]) => {
    const sideMenuData =
      menuData.find((menu: any) => menu.key === 'BasicLayout')?.routes || [];

    const items = sideMenuData?.map((menu: any) => {
      if (menu?.hidden) {
        return null;
      }
      if (!menu?.routes) {
        return getItem(menu?.name, menu?.path, menu?.icon);
      }
      const { routes } = menu;
      const children = routes?.map((rt: any) => {
        return rt?.hidden ? null : getItem(rt?.name, rt?.path, rt?.icon);
      });
      return getItem(menu?.name, menu?.path, menu?.icon, children);
    });
    setMenuItems(items);
  };

  useEffect(() => {
    buildMenuItemsData(menuData);
    return () => {};
  }, [menuData]);

  const getItem = (
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: string,
    children?: MenuItem[],
  ): MenuItem => {
    return {
      key,
      icon: IconTool(icon || 'MailOutlined', {}),
      children,
      label,
    } as MenuItem;
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo"></div>
      <Menu
        selectable={false}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        onClick={toggle}
        items={[
          {
            key: 'collapsed',
            icon: IconTool(
              collapsed ? 'MenuUnfoldOutlined' : 'MenuFoldOutlined',
              {},
            ),
            label: collapsed ? '收缩菜单' : '展开菜单',
          },
        ]}
      />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        onClick={(e) => {
          const { key } = e;
          history.push(key);
        }}
        items={menuItems}
      />
    </Sider>
  );
}
