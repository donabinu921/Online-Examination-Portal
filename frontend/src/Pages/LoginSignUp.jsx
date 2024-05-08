import React, { useState, useEffect } from "react";
import "../Styles/LoginSignup.css";
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Radio } from "antd";
import userService from "../Services/service.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginSignUp = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    retrieveUsers();
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUserTypeChange = e => {
    setUserType(e.target.value);
  };

  const retrieveUsers = () => {
    userService
      .getAllUsers()
      .then((response) => {
        console.log(response.data.users);
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const foundUser = users.find(
      (user) => user.username === email && user.password === password
    );
    if (foundUser) {
      setLoginUser(foundUser.username);
      window.localStorage.setItem("USER", JSON.stringify(foundUser.username));
      window.localStorage.setItem("USER_ID", foundUser._id);
      if (userType === "student" && foundUser.pos === "student") {
        navigate("/home");
        console.log("success");
        toast.success("Successfully logged in!");
      } else if (userType === "teacher" && foundUser.pos === "teacher") {
        navigate("/teacher-home");
        console.log("success");
        toast.success("Successfully logged in!");
      } else{
        console.log("Invalid usertype!");
        toast.error("Invalid usertype!");
      }
    }
    else {
      console.log("Invalid email or password!");
      toast.error("Invalid email or password!");
    }
  };

  return (
    <div className="login-page">
      <div className="loginContainer">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
        >
          <h1>Login Here</h1>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Item>

          <Form.Item name="userType" rules={[{ required: true, message: 'Please select user type!' }]}>
            <Radio.Group onChange={handleUserTypeChange} className="radio-stu-tea">
              <Radio value="student">Student</Radio>
              <Radio value="teacher">Teacher</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginSignUp;
