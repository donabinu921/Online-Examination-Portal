import { useState } from 'react';
import NavBar from '../Components/NavBar';
import Cards from '../Components/Cards';
import Buttons from '../Components/Buttons';
import { Breadcrumb, Layout, theme } from 'antd';
const { Header, Content, Sider } = Layout;

const AssessmentPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div className="home-page">
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
          {/* Assessment Page */}
          <Cards card1Title="ATTENDANCE" card1Content="80%" card2Title="INTERNALS" card2Content="34/35" />
          <br /><br />
          <h2>Available Tests</h2>
          <Cards card1Title="Biology Retest" card1Content={<Buttons name={"Take Test"} to="/test" />} card2Title="Chemistry Test" card2Content={<Buttons name={"Take Test"} to="/test"/>} />
          </div>
        </Content>
      </Layout>
    </Layout></div>
  );
};
export default AssessmentPage;