import React from 'react';
import * as Icon from '@ant-design/icons';

export const IconTool = (type: string, style: any) => {
  // @ts-ignore
  return React.createElement(Icon[type], {
    style: style || { fontSize: '16px' },
  })
}