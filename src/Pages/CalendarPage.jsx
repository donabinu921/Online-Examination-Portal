import { useState } from 'react';
import Calendars from '../Components/Calendars';
import NavBar from '../Components/NavBar';

import { Breadcrumb, Layout, theme } from 'antd';
const { Header, Content, Sider } = Layout;

const events = [
  { date: '2024-03-15', title: 'Christmas' },
  { date: '2024-03-07', title: 'New Year' },
];

const CalendarPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={(value) => setCollapsed(value)}
        style={{ position: 'fixed', height: '100vh', overflowY: 'auto' }}
      >
        <div className="demo-logo-vertical" />
        <NavBar/>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
            style={{
            margin: '0 16px',
            marginLeft: collapsed ? 80 : 200, // adjust this value based on the width of your Sider
            overflowY: 'auto',
            position: 'relative'
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0px 0px 16px',
            }}
          >
            {/* <Breadcrumb.Item>Home</Breadcrumb.Item> */}
            <Breadcrumb.Item><h1>Hello Student!</h1></Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: '0px 0px 0px 0px',
              maxHeight: 260,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/* CalenderPage */}
            {/* <Calendars events={events}/> */}
            <Calendars />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default CalendarPage;