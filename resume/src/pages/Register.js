import React from "react";
// import 'antd/dist/antd.min.css;
import { Button, Form, Input, message } from "antd";
import {Link} from "react-router-dom";
import axios from 'axios';
import '../resources/authentication.css'
 
function Register() {
  const onFinish =async(values) => {
    try {
      console.log(values);
      await axios.post('/api/user/register',values)
      message.success('Registration successfull')
    } catch (error) {
      message.error('Registration failed');
    }
  };
  return (
    <div className="auth-parent" onFinish={onFinish}>
      <Form layout="vertical" >
        <h1>Register</h1>
        <hr></hr>
        <Form.Item name="username" label="UserName">
          <Input placeholder="usename" />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input />
        </Form.Item>
        <Form.Item name="cpassword" label="Confirm Password">
          <Input/>
        </Form.Item>
        <div className="d-flex align-item-center justify-content-between">
           <Link to='/login'> Click Here to Login</Link>
         <Button type="primary" htmlType="submit">
           REGISTER
        </Button>
         </div>
      </Form>
    </div>
  );
}

export default Register;
