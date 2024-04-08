import { useState } from "react";
import NavBar from "../Components/NavBar";
import Cards from "../Components/Cards";
import { Button } from "antd";
import { Breadcrumb, Layout, theme } from "antd";
import { useNavigate } from "react-router-dom";
const { Header, Content, Sider } = Layout;

const AssessmentPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();
  const handleTakeTest = () => {
    navigate("/test");
  };

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
              {/* Assessment Page */}
              <Cards
                card1Title="ATTENDANCE"
                card1Content="80%"
                card2Title="INTERNALS"
                card2Content="34/35"
              />
              <br />
              <br />
              <h2>Available Tests</h2>
              <Cards
                card1Title="Biology Retest"
                card1Content={
                  <Button onClick={handleTakeTest} type="primary">
                    Take Test
                  </Button>
                }
                card2Title="Chemistry Test"
                card2Content={
                  <Button type="primary" onClick={handleTakeTest}>
                    Take Test
                  </Button>
                }
              />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default AssessmentPage;
