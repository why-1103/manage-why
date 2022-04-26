import React from 'react';
import * as Icon from '@ant-design/icons';

export const IconTool = (type: string, props: any) => {
  let _props = {};
  if (!props?.style) {
    _props = {
      ...props,
      style: { fontSize: '16px' }, // 设置默认字体大小为16px
    };
  } else {
    _props = {
      ...props,
    };
  }
  if (type) {
    // @ts-ignore
    return React.createElement(Icon[type], props);
  }
  return null;
};
