import { useState } from "react";
import Cards from "../Components/Cards";
import NavBar from "../Components/NavBar";
import { Button } from "antd";
import { toast } from "react-toastify";
import "../Styles/RetestRequestPage.css";

import { Breadcrumb, Layout, theme } from "antd";
const { Header, Content, Sider } = Layout;

const RetestRequestPage = () => {

  const USER = JSON.parse(window.localStorage.getItem("USER"));
  const USER_ID = (window.localStorage.getItem("USER_ID"));

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleRequest = () => {
    console.log("Retest request sent");
    toast.success("Retest request sent");
  };
  const [retests, setRetests] = useState([
    {
      test_id: 1,
      test_name: "Biology",
      status: "Unattempted",
    },
    {
      test_id: 2,
      test_name: "Physics",
      status: "Approved",
    },
    {
      test_id: 3,
      test_name: "Chemistry",
      status: "Pending",
    },
    {
      test_id: 2,
      test_name: "Physics",
      status: "Approved",
    },
    {
      test_id: 3,
      test_name: "Chemistry",
      status: "Pending",
    },
    {
      test_id: 2,
      test_name: "Physics",
      status: "Approved",
    },
    {
      test_id: 3,
      test_name: "Chemistry",
      status: "Pending",
    },
    {
      test_id: 4,
      test_name: "Mathematics",
      status: "Pending",
    },
    {
      test_id: 5,
      test_name: "History",
      status: "Unattempted",
    },
    {
      test_id: 6,
      test_name: "English",
      status: "Unattempted",
    }
  ]);


  const Request = (index) => {
    console.log(retests[index].test_name);
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
              <h2>Request Retest</h2>
              {retests.map(
                (retest,index) =>
                  retest.status === "Unattempted" && (
                    <div
                      key={retest.test_id}
                      className="retest-requests-box"
                    >
                      <h3>{retest.test_name}</h3>
                      <Button type="primary" onClick={()=>{Request(index)}}>Request</Button>
                    </div>
                  )
              )}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default RetestRequestPage;
