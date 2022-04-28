import React, { useState } from 'react';
import { Input, Button } from 'antd';
import styles from './index.less';
import Map4Baidu from '@/components/Map4Baidu/index';
import Editor from '@/components/UEditor/index';

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
  return (
    <div>
      {/* {IconTool('ToolOutlined', {})} */}
      {/* <Button type="primary">查看</Button> */}
      <Editor />
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
