import { useState } from "react";
import Cards from "../Components/Cards";
import NavBar from "../Components/NavBar";
import { Button } from "antd";

import { Breadcrumb, Layout, theme } from "antd";
const { Header, Content, Sider } = Layout;

const RetestRequestPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div className="home-page">
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <NavBar />
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
              margin: "0 16px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              {/*  Home  */}
              <Breadcrumb>
                <h1>Hello Student!</h1>
              </Breadcrumb>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {/* RetestPage */}
              <h2>Available Retests</h2>
              <Cards
                card1Title="MPMC 1rst Series"
                card1Content={<Button type="primary">+ Request Retest</Button>}
                card2Title="Chemistry Lab"
                card2Content={<Button type="primary">+ Request Retest</Button>}
              />
              <h2>Approved Requests</h2>
              <Cards
                card1Title="Biology Lab"
                card1Content={<Button type="default">March 12</Button>}
                card2Title="Chemistry Assignment Test"
                card2Content={<Button type="default">April 2</Button>}
              />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default RetestRequestPage;
