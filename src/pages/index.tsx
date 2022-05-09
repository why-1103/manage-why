import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import request from 'umi-request';

import styles from './index.less';
import Map4Baidu from '@/components/Map4Baidu/index';
import Editor from '@/components/UEditor/index';
import { ConfigProvider } from 'antd';
import { keyRender } from '@/utils/utils';
import './index.less';

export default function IndexPage() {
  const [address, setAddress] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');

  const AddCallback = (addr: string) => {
    if (addr) {
      setAddress(addr);
      setSearchText(addr);
    }
  };

  const handleSearch = (value: string) => {
    if (value) {
      setAddress(value);
    }
  };

  useEffect(() => {
    request('/api/users', {
      method: 'get',
    })
      .then(function (response) {
        console.log('response', response);
      })
      .catch(function (error) {
        console.log('error', error);
      });
  }, []);

  return (
    <div>
      {/* {IconTool('ToolOutlined', {})} */}
      <Button
        onClick={() => {
          ConfigProvider.config({
            theme: {
              primaryColor: '#52C41A',
            },
          });
        }}
        type="primary"
      >
        设置
      </Button>
      {keyRender('12456543', '456', 'heighText')}
      {/* <Editor /> */}
      <Input.Search
        value={searchText}
        onChange={(e) => {
          setSearchText(e?.target?.value);
        }}
        onSearch={handleSearch}
      />
      <Map4Baidu AddressDetail={address} AddCallback={AddCallback} />
    </div>
  );
}
