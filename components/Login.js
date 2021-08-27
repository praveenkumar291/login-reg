import { Button,message, Checkbox, Form, Input } from 'antd';

import axios from 'axios';
import Router  from 'next/router';
import Link from 'next/link';
import React from 'react';



const Login= () => {
  const onFinish = (values) => {
    console.log('Success:', values);
    axios({
      method: 'post',
      url: 'https://devapi.agnicart.com/api/auth/login/',
      data: values,
    })
      .then(response => {
        Router.push('/table')
        console.log('postRequest', response.statusText);
        {
          response.statusText === 'Created' &&
            message.success('Login successfully');
          values = {}
        }
      }).catch((err) => { err && message.error('Dont have an account') });
  };


  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <>
      <Link href='/register'>create a new account</Link>
      <h1 >Login Form</h1>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
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
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
        >

        <Button type="primary" htmlType="submit">
          Submit
            </Button>

      </Form.Item>
      </Form>
      </>
  );
};
export default Login;
