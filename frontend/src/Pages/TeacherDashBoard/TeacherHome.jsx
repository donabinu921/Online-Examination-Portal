import { useState } from "react";
import { Button } from "antd";
import NavBar from "../../Components/NavBar";
import Cards from "../../Components/Cards";
import "../../Styles/TeacherHome.css";
import Results from "../../Components/Results";

import { Breadcrumb, Layout, theme } from "antd";
const { Header, Content, Sider } = Layout;

const TeacherHome = () => {

  const USER = JSON.parse(window.localStorage.getItem("USER"));
  const USER_ID = JSON.parse(window.localStorage.getItem("USER_ID"));

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [showResultsTab, setShowResultsTab] = useState(false);
  const toggleResultsTab = () => {
    setShowResultsTab((prev) => !prev);
  };

  const [results, setResults] = useState([
    {
      id: 1,
      testName: "Test 1",
    },
    {
      id: 2,
      testName: "Test 2",
    },
    {
      id: 3,
      testName: "Test 3",
    },
  ]);

  const [selectedResultId, setSelectedResultId] = useState(false);

  const handleResults = (id) => {
    console.log(id);
    if (selectedResultId === id) {
      setSelectedResultId(false);
    } else {
      setSelectedResultId(id);
    }
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
                <h1>Hello Prof. {USER}!</h1>
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

              <div className="outer-box">
                <div>
                  <br />
                  <div className="test-tab">
                    {results.map((result) => (
                      <div key={result.id} className="test-bar">
                        <h3>{result.testName}</h3>
                        <Button
                          id={result.id}
                          type="primary"
                          className="result-button"
                          onClick={() => handleResults(result.id)}
                        >
                          Results
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="results-tab">
                  {selectedResultId && <Results resultId={selectedResultId} />}
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default TeacherHome;
