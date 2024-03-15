import { useState } from 'react';
import Cards from '../Components/Cards';
import Activities from '../Components/Activities';
import NavBar from '../Components/NavBar';

import { Breadcrumb, Layout, theme } from 'antd';
const { Header, Content, Sider } = Layout;

const HomePage = () => {
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
        < NavBar />
        
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
            <Breadcrumb.Item><h1>Hello Student!</h1></Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/* HomePage */}
            <Cards card1Title="UPCOMING TESTS" card1Content="2" card2Title="REQUESTS PENDING" card2Content="1" />
            <br /><br /><br />
            <h2>Activities:</h2>
            <Activities activities={[
              { description: 'Retest Approved for Chem' },
              { description: 'Result Published for Biology Test' },
              { description: 'Feedback Form is Live' },
            ]} />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default HomePage;