import React from 'react';
import { Menu, Dropdown } from 'antd';
import { IconTool } from '@/utils/utils';
import { changeAntdTheme } from 'dynamic-antd-theme';

interface IThemeToggleProps {
  themeBack?: any;
}

// 切换主题
function ThemeToggle(props: IThemeToggleProps) {
  const handleMenuClick = (e: any) => {
    const primaryColor = getColor(e.key);
    const { themeBack } = props;
    changeAntdTheme(primaryColor);
    if (themeBack) {
      themeBack(e.key);
    }
  };

  // 获取主题颜色
  const getColor = (type: string) => {
    let primaryColor = '#FB1B1C';
    switch (type) {
      case '1':
        primaryColor = '#FB1B1C';
        break;
      case '2':
        primaryColor = '#FA541C';
        break;
      case '3':
        primaryColor = '#FAAD14';
        break;
      case '4':
        primaryColor = '#52C41A';
        break;
      case '5':
        primaryColor = '#2F54EB';
        break;
      default:
        primaryColor = '#FB1B1C';
        break;
    }
    return primaryColor;
  };

  // 主题选项
  const items = [
    {
      key: '1',
      label: '黑红',
      color: '#1E1E1E',
      icon: IconTool('SkinTwoTone', { twoToneColor: '#1E1E1E' }),
    },
    {
      key: '2',
      label: '火山',
      color: '#1E1E1E',
      icon: IconTool('SkinTwoTone', { twoToneColor: '#FB1B1C' }),
    },
    {
      key: '3',
      label: '日暮',
      color: '#FAAD14',
      icon: IconTool('SkinTwoTone', { twoToneColor: '#FAAD14' }),
    },
    {
      key: '4',
      label: '极光绿',
      color: '#52C41A',
      icon: IconTool('SkinTwoTone', { twoToneColor: '#52C41A' }),
    },
    {
      key: '5',
      label: '极客蓝',
      color: '#2F54EB',
      icon: IconTool('SkinOutlined', { twoToneColor: '#2F54EB' }),
    },
  ];

  const menu = <Menu onClick={handleMenuClick} items={items} />;

  return (
    <Dropdown overlay={menu}>
      <span
        style={{
          cursor: 'pointer',
          paddingLeft: 12,
          paddingRight: 12,
          display: 'inline-block',
          height: '100%',
        }}
      >
        <span className="ant-dropdown-link">
          {IconTool('SkinOutlined', {})}
          切换主题
        </span>
      </span>
    </Dropdown>
  );
}

export default ThemeToggle;
