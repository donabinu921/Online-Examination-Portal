import React from 'react';
import './Menubar.css';

import {
  HomeFilled,
  CalendarFilled,
  CopyFilled,
  MailFilled,
} from '@ant-design/icons';
import { Menu } from 'antd';

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label
  };
}
const items = [
  getItem('Home', '1', <HomeFilled />),
  getItem('Assessment', '2', <CopyFilled />),
  getItem('Calender', '3', <CalendarFilled />),
  getItem('Request Retest', '4', <MailFilled />),
];

const Menubar = () => {
  return (
    <div className="dash"    >
      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        theme="light"
        className="menu"
        items={items}
      />
    </div>
  );
};

export default Menubar;