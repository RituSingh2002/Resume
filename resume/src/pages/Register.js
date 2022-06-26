import React from "react";
// import 'antd/dist/antd.min.css;
 
import {  Form,Input,Button,Checkbox, message} from "antd";

 
import {Link} from "react-router-dom";
import axios from 'axios';
 
import '../resources/authentication.css'
const FormItem = Form.Item;
 
function Register() {
  const onFinish =async(values) => {
    try {
      console.log("hello");
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
        <FormItem name="username" label="UserName">
          <Input placeholder="usename" />
        </FormItem>
        <FormItem name="password" label="Password">
          <Input />
        </FormItem>
        <FormItem name="cpassword" label="Confirm Password">
          <Input/>
        </FormItem>
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
