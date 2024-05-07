import { useState } from "react";
import Cards from "../Components/Cards";
import NavBar from "../Components/NavBar";
import { Button } from "antd";
import { toast } from "react-toastify";

import { Breadcrumb, Layout, theme } from "antd";
const { Header, Content, Sider } = Layout;

const RetestRequestPage = () => {

  const USER = JSON.parse(window.localStorage.getItem("USER"));
  const USER_ID = JSON.parse(window.localStorage.getItem("USER_ID"));

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleRequest = () => {
    console.log("Retest request sent");
    toast.success("Retest request sent");
  };

  const [retests,setRetests] = useState([
    {
      test_id: 1,
      test_name: "Biology",
      student_id: 1,
      status: "Approved",
    }
  ]);

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
                <h1>Hello {USER}!</h1>
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
              
                    
              <h2>Approved Requests</h2>
           
           
           
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default RetestRequestPage;
