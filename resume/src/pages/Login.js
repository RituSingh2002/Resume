import React from "react";
 
import { Button,Form,Checkbox, Input,message } from "antd";
import {Link} from 'react-router-dom'
import '../resources/authentication.css'
import axios from 'axios';
function Login() {
   
   
    const onFinish =async(values) => {
      console.log(values);
      try {
        console.log(values);
        await axios.post('/api/user/login',values);
        message.success('Login successfull');
      } catch (error) {
        message.error('Loginfailed');
      }
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
          <Input type='password' />
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
