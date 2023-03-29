import React, { useState } from 'react';
import logo from "../../images/Logo.svg";
import { Form, Input } from 'antd';

const Login = () => {

  const [form] = Form.useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const trueEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email);
  const truePassword = /^[0-9a-zA-Z]{3,}/.test(password);
  
  const checkData = () => {

    if(trueEmail && truePassword){
      console.log("It`s work");
    } 
  }

  return (
    <div className='login-container'>
      <div className='image-side'>
        <a className='image-side__link' href='#'>
          <img className='image-side__logo' src={logo} alt='Logo'></img>
        </a>
      </div>
      <div className='form-side'>
        <h1 className='form-side__title'>Welcome <br></br> Bartholomew Hernandez!</h1>
        <p className='form-side__text'>Sign in to the Project Lab</p>
        <Form
          form={form}
          layout='vertical'
        >
            <Form.Item
              name="username"
              label="Email Address"
              style={{
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: '30px',
                color: '#1A2237',
                width: "540px",
                borderRadius: "28px",
                marginBottom: "17px",
              }}
              rules={[
                {
                  required: true, 
                  message: 'Please input your email!'
                },
                {
                  type: "email",
                  message: 'Invalid email!'
                }
              ]}
            >
              <Input 
                style={{padding: "20px 0px 20px 25px"}} 
                placeholder="Bartholomew123092@gmail.com" 
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              style={{
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: '30px',
                color: '#1A2237',
                width: "540px",
                borderRadius: "28px",
                marginBottom: "40px"
              }}
              rules={[
                  {
                    required: true, 
                    message: 'Please input your password!'
                  }, 
                  {
                    min: 3,
                    message: 'Invalid password!'
                  },
                ]}
            >
              <Input.Password 
                style={{padding: "20px 23px 20px 25px"}}
                placeholder="Enter password" 
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
        </Form>
        <button onClick={checkData}  className='form-side__button'>Sign in</button>
      </div>
    </div>
  )
}

export default Login