import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import {Link} from 'react-router-dom'
import '../resources/authentication.css'
 
function Login() {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div className="auth-parent" onFinish={onFinish}>
      <Form layout="vertical">
        <h1>Login</h1>
        <hr></hr>
        <Form.Item name="username" label="UserName">
          <Input placeholder="usename" />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input />
        </Form.Item>
        
         <div className="d-flex align-item-center justify-content-between">
           <Link to='/register'> Click Here to Register</Link>
         <Button type="primary" htmlType="submit">
          LOGIN
        </Button>
         </div>
      </Form>
    </div>
  );
}

export default Login;
