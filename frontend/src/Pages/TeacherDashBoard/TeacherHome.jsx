import { useState } from "react";
import NavBar from "../../Components/NavBar";
import Cards from "../../Components/Cards";
import Activities from "../../Components/Activities";
import "../../Styles/TeacherHome.css";

import { Breadcrumb, Layout, theme } from "antd";
const { Header, Content, Sider } = Layout;

const TeacherHome = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div className="teacher-home">
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
          <NavBar num={2} />
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
              <Breadcrumb>
                <h1>Hello Teacher!</h1>
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
              {/* HomePage */}
              <Cards
                card1Title="UPCOMING TESTS"
                card1Content="MPMC Second Series"
                card2Title="REQUESTS PENDING"
                card2Content="5"
              />
              <br />
              <br />
              <br />
              <h2>Activities:</h2>
              <Activities
                activities={[
                  { description: "12 requests for First Series Retest" },
                  { description: "Feedback live for First Series" },
                  { description: "First Series assessment due" },
                ]}
              />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default TeacherHome;
