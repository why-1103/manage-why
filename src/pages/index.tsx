import React from 'react';
import * as Icon from '@ant-design/icons';
import styles from './index.less';
import { IconTool } from '@/utils/utils';

export default function IndexPage() {
  return (
    <div>
      {React.createElement(Icon['ToolOutlined'], {
        style: { fontSize: '16px' },
      })}
      {IconTool('ToolOutlined')}
      <span className="anticon anticon-step-forward"></span>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
