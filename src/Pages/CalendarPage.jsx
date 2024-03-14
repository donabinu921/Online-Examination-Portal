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
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            {/* <Breadcrumb.Item>Home</Breadcrumb.Item> */}
            <Breadcrumb.Item><h1>Hello User!</h1></Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/* CalenderPage */}
            <Calendars events={events}/>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default CalendarPage;