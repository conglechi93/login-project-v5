import logo from './logo.svg';
import './App.css';
import { BorderInnerOutlined, GoogleOutlined } from '@ant-design/icons';
import anh1 from './image/anh1.jpg';
import anh2 from './image/anh2.png';
import { Divider, Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
function App() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="content">
      <div className="container">
        <div className="left">
          <div className="inside">
          <img id="image" src={anh1}/>
            <p className="first-paragraph">Turn your ideas into reality</p>
            <p className="second-paragraph">Start for free and get attractive offers from the community</p>
          </div>
          </div>
        <div className="right">
          <div className="outlined">
        <BorderInnerOutlined />
        </div>
        <div className="login">
        <p className="login-text">Login to your Account</p>
        <p className="login-paragraph">See what is going on with your business</p>
        <Button className="login-button" > <img id="image2" src={anh2}/>Continue with Google</Button>
        <Divider
      variant="dashed"
      style={{
        borderColor: '#7cb305',
      }}
      dashed
    >
      or Sign in with Email
    </Divider> 
    
        <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input  />
    </Form.Item>
    
    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>
   
    <Form.Item 
  
      name="remember"
      valuePropName="checked"
      
      // wrapperCol={{
      //   offset: 8,
      //   span: 16,
      // }}
    >
      <Checkbox className='remember'>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      // wrapperCol={{
      //   offset: 8,
      //   span: 16,
      // }}
    >
      <Button type="primary" htmlType="Login" className="submit">
        Login
      </Button>
    </Form.Item>
  </Form>
        </div> 
        </div>
        </div>

      </div>
    
  );
}
export default App;
