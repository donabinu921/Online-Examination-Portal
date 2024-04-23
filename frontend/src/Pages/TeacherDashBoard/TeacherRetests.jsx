import { useState } from "react";
import Cards from "../../Components/Cards";
import { Button } from "antd";
import NavBar from "../../Components/NavBar";
import Activities from "../../Components/Activities";
import { toast } from "react-toastify";

import { Breadcrumb, Layout, theme } from "antd";
const { Header, Content, Sider } = Layout;

const TeacherRetests = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const approveRequest = () => {
    console.log("Request approved");
    toast.success("Request approved");
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
              {/*  Home  */}
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
              {/* RetestPage */}
              <h2>Approve Requests:</h2>
              <Cards
                cardTitle="Biology Lab Retest"
                cardContent={
                  <Button type="primary" onClick={approveRequest}>
                    Approve
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
export default TeacherRetests;
