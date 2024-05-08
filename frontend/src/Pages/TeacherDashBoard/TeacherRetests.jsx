import { useState } from "react"
import Cards from "../../Components/Cards"
import { Button } from "antd"
import NavBar from "../../Components/NavBar"
import Activities from "../../Components/Activities"
import { toast } from "react-toastify"
import "../../Styles/TeacherRetests.css"

import { Breadcrumb, Layout, theme } from "antd"
const { Header, Content, Sider } = Layout

const TeacherRetests = () => {

  const USER = JSON.parse(window.localStorage.getItem("USER"));
  const USER_ID = (window.localStorage.getItem("USER_ID"));
  const [index, setIndex] = useState(0);
  const [collapsed, setCollapsed] = useState(false);
 
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  const approveRequest = index => {
    setIndex(index)

    console.log(retests[index].student_name, retests[index].test_name)
    toast.success("Request approved")
  }

  const [retests, setRetests] = useState([
    {
      test_id: 1,
      test_name: "Biology",
      student_id: 1,
      student_name: "Jane Doe",
      status: "Pending",
    },
    {
      test_id: 2,
      test_name: "Physics",
      student_id: 2,
      student_name: "Imkhan Pussy",
      status: "Pending",
    },
    {
      test_id: 3,
      test_name: "Chemistry",
      student_id: 3,
      student_name: "John Doe",
      status: "Pending",
    },
  ])

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
          onCollapse={value => setCollapsed(value)}
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
              {/* RetestPage */}
              {/* <h1>{index}</h1> */}
              <h2>Approve Requests:</h2>

              {retests.map((retest, index) => (
                <div key={retest.test_id} className="approve-requests-box">
                  <h3 className="name">{retest.student_name}</h3>
                  <h3 className="test-name">{retest.test_name}</h3>
                  <Button
                    type="primary"
                    onClick={() => {
                      approveRequest(index)
                    }}
                  >
                    Approve
                  </Button>
                </div>
              ))}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}
export default TeacherRetests
