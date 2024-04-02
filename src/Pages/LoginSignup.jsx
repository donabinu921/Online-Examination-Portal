import React, { useState } from 'react';
import '../Styles/LoginSignup.css'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

const LoginSignUp = ( {onLoginClick} ) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className='loginContainer'>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <h1>{isSignUp ? 'Sign Up Here' : 'Login Here'}</h1>
    
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
    
          <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" onClick={onLoginClick}>
            {isSignUp ? 'Sign Up' : 'Login'}
          </Button>
          <Button onClick={toggleMode}>{isSignUp ? 'Login' : 'Sign Up'}</Button>
          </Form.Item>
        </Form>
        </div>
      );
};

export default LoginSignUp;