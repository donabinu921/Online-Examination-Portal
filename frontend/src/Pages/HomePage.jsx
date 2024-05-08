import { useState, useEffect } from "react";
import Cards from "../Components/Cards";
import Activities from "../Components/Activities";
import NavBar from "../Components/NavBar";
import "../Styles/HomePage.css";
import userService from "../Services/service.js";
import { Breadcrumb, Layout, theme } from "antd";
const { Header, Content, Sider } = Layout;

const HomePage = () => {
  const USER = JSON.parse(window.localStorage.getItem("USER"));
  const USER_ID = window.localStorage.getItem("USER_ID");
  const [tests, setTests] = useState([]);
  const [marks, setMarks] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [results, setResults] = useState([]);
  const [testScores, setTestScores] = useState([
    { test_name: "Biology", mark: 50 },
    { test_name: "Physics", mark: 65 },
    { test_name: "Chemistry", mark: 55 },
  ]);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    userService
      .getAllTests()
      .then((res) => {
        setTests(
          res.data.tests.map((item) => {
            return {
              test_id: item._id,
              test_name: item.test_name,
            };
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // Empty dependency array to fetch tests only once when the component mounts
  
  useEffect(() => {
    // Check if tests are populated before processing test results
    if (tests.length > 0) {
      userService
        .getResults()
        .then((res) => {
          const _res = res.data.test_results.filter(
            (result) => result.student_id === USER_ID
          );
          setResults(_res);
  
          const score = _res.map((result) => {
            const test = tests.find((item) => item.test_id === result.test_id);
            return {
              test_name: test.test_name,
              mark: result.mark,
            };
          });
          setTestScores(score);
  
          console.log(testScores);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [tests]); // Watch for changes to the tests state
  
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

              <table class="table">
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
