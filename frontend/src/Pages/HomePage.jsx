import { useState,useEffect } from "react";
import Cards from "../Components/Cards";
import Activities from "../Components/Activities";
import NavBar from "../Components/NavBar";
import "../Styles/HomePage.css";
import userService from "../Services/service.js";


import { Breadcrumb, Layout, theme } from "antd";
const { Header, Content, Sider } = Layout;

const HomePage = () => {
  const USER = JSON.parse(window.localStorage.getItem("USER"));
  const USER_ID = JSON.parse(window.localStorage.getItem("USER_ID"));

  const [marks,setMarks] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

//   const getQuestions = () => {
//     userService.getAllTests()
//     .then((res) => {
//       console.log(res.data.tests);
//       setTests(res.data.tests);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// useEffect(() => {
//   getQuestions();
// }, []);

  const testScores = [
    { test_name: "Biology", mark: 50 },
    { test_name: "Physics", mark: 65 },
    { test_name: "Chemistry", mark: 55 }
  ];

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
              {/* HomePage */}
              {/* <Cards
                card1Title="UPCOMING TESTS"
                card1Content="2"
                card2Title="REQUESTS PENDING"
                card2Content="1"
              />
              <br />
              <br />
              <br /> */}
              <h2>Internal Assessment</h2>

              <table class="table" >    
                  <thead>
                    <tr>
                      <th scope="col">Index</th>
                      <th scope="col">Test Name</th>
                      <th scope="col">Mark</th>
                    </tr>
                  </thead>
                  <tbody>
                    {testScores.map((item, index) => (
                      <tr key={index}>
                        <td scope="row">{index + 1}</td>
                        <td>{item.test_name}</td>
                        <td>{item.mark}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default HomePage;
