import { useState, useEffect } from "react";
import Calendars from "../Components/Calendars";
import NavBar from "../Components/NavBar";
import userService from "../Services/service.js";
import { Breadcrumb, Layout, theme } from "antd";
const { Header, Content, Sider } = Layout;

const CalendarPage = () => {
  const USER = JSON.parse(window.localStorage.getItem("USER"));
  const USER_ID = window.localStorage.getItem("USER_ID");
  const [tests, setTests] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const getQuestions = () => {
    userService
      .getAllTests()
      .then((res) => {
        setTests(res.data.tests);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getQuestions();
  }, []);

  useEffect(() => {
    // Call mapData only when tests state is updated
    mapData();
  }, [tests]);

  const mapData = () => {
    const dates = tests.map((test) => {
      return {
        date: test.test_date,
        content: test.test_name,
      };
    });
    setDates(dates);
  };

  const [dates, setDates] = useState([
    { date: "2024-05-08", content: "Biology" },
    { date: "2024-05-10", content: "Chemistry" },
    // Add more dates and their corresponding test_name as needed
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
          style={{ position: "fixed", height: "100vh", overflowY: "auto" }}
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
              marginLeft: collapsed ? 80 : 200,
              overflowY: "auto",
              position: "relative",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0px 0px 16px",
              }}
            >
              {/*  Home  */}
              <Breadcrumb>
                <h1>Hello {USER}!</h1>
              </Breadcrumb>
            </Breadcrumb>
            <div
              style={{
                padding: "0px 0px 0px 0px",
                maxHeight: 260,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {/* CalendarPage */}
              <Calendars dates={dates} />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default CalendarPage;
