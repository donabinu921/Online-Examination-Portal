import { useState } from "react";
import { Button } from "antd";
import NavBar from "../../Components/NavBar";
import Cards from "../../Components/Cards";
import "../../Styles/TeacherHome.css";
import ResultsTab from "../../Components/RecentTests";

import { Breadcrumb, Layout, theme } from "antd";
const { Header, Content, Sider } = Layout;

const TeacherHome = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [showResultsTab, setShowResultsTab] = useState(false);
  const toggleResultsTab = () => {
    setShowResultsTab(prev => !prev);
  };

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
                cardTitle="UPCOMING TESTS"
                cardContent="MPMC Second Series"
              />
              <br />
              <br />
            <Button type="primary" onClick={toggleResultsTab}>
            {showResultsTab ? 'Hide Recent Tests' : 'Show Recent Tests'}
            </Button>
            <div>
              {showResultsTab && <ResultsTab />}
            </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default TeacherHome;
