import { useState } from "react";
import NavBar from "../Components/NavBar";
import { Button } from "antd";
import { Breadcrumb, Layout, theme } from "antd";
import { useNavigate } from "react-router-dom";
import userService from "../Services/service.js";
import { Link } from "react-router-dom";
import "../Styles/AssessmentPage.css";

const { Header, Content, Sider } = Layout;

const AssessmentPage = () => {
  const data = [
    {id:1, title: "Title 1", value: "Value 1" },
    { id:2,title: "Title 2", value: "Value 2" },
    { id:3,title: "Title 3", value: "Value 3" },
  ];

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

 
 

  const setTest = (id) => {
    window.localStorage.setItem("TEST_ID", id);
  }

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
                padding: 30,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
        
              <h2>Available Tests</h2>
              <div className="card">
                {data.map((item) => (
                  <div key={item.id} className="card-item">
                    <h3>{item.title}</h3>
                    <p>{item.value}</p>
                    <Link to="/test">
                      <Button type="primary" onClick={()=>{setTest(item.id)}}>Go to Test</Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default AssessmentPage;
