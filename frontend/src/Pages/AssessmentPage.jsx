import { useState,useEffect } from "react";
import NavBar from "../Components/NavBar";
import { Button } from "antd";
import { Breadcrumb, Layout, theme } from "antd";
import { useNavigate } from "react-router-dom";
import userService from "../Services/service.js";
import { Link } from "react-router-dom";
import "../Styles/AssessmentPage.css";
import moment from 'moment'; 
const { Header, Content, Sider } = Layout;


const AssessmentPage = () => {

  console.log(moment().format('YYYY-MM-DD'))
  const [tests,setTests] = useState([]);
  
  const getQuestions = () => {
    userService.getAllTests()
    .then((res) => {
      console.log(res.data.tests);
      setTests(res.data.tests);
    })
    .catch((error) => {
      console.log(error);
    });
};

console.log(tests);

useEffect(() => {
  getQuestions();
  window.localStorage.getItem("TEST_ID");
}, []);



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
          onCollapse={(teacher_name) => setCollapsed(teacher_name)}
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
                {tests.map((item) => (
                  <div key={item._id} className="card-item">
                    <h3>{item.test_name}</h3>
                    <p>{item.teacher_name}</p>
                    <Link to="/test">
                      <Button type="primary" onClick={()=>{setTest(item._id)}}>Go to Test</Button>
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
