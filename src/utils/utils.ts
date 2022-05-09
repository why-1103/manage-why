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

/**
 * 标记指定关键字高亮（以关键字的特殊字符分隔后的数组单个值为单位，不区分大小写）
 * @param {string} text 需要处理的原字符串
 * @param {string} key  需要标记的字符串关键字
 * @param {string} className  高亮显示样式类名
 */

// 特殊字符
const specialCharater = new RegExp(
  "[`~!@#$%^&*()\\-+={}':;,\\[\\].<>/?￥…（）_|【】‘；：”“’。，、？\\s]",
);

export const keyRender = (text: string, key: string, className?: string) => {
  if (key && text && typeof text === 'string' && typeof key === 'string') {
    const keyArr = key.split(specialCharater).filter((k) => k);
    const newText = text.replace(
      new RegExp(keyArr.join('|'), 'ig'),
      (str) => `<Fragment class=${className || 'heighText'}>${str}</Fragment>`,
    );
    const node = React.createElement('span', {
      dangerouslySetInnerHTML: { __html: newText },
    });
    return node;
  }
  return text;
};

/**
 *
 * @param {string} text 校验的文本
 * @returns {boolean}
 */
const checkTelePhone = (text: string) => {
  const regex = /^1[34578]\d{9}$/g;
  if (text?.trim() && regex.test(text)) {
    return true;
  }
  return false;
};

const checkCode = (text: string) => {
  const regex =
    /[1-9][0-9]{5}(18|19|([23][0-9]))[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[0-1])([0-9]{3}[0-9xX])$/gm;
  if (text?.trim() && regex.test(text)) {
    return true;
  }
  return false;
};
