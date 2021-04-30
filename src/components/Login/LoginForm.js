import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

export const LoginForm = () => {
  let history = useHistory();

  const onLogin = (values) => {
    if (values.username === "foo" && values.password === "bar") {
      localStorage.setItem('auth-token', '!@#$%^&*())SDFGHJKLFGHJK')
      history.push("/home");
    }
  };

  return (
    <Form layout="vertical" name="login-form" onFinish={onLogin}>
      <Form.Item
        name="username"
        label="User Name"
        rules={[
          {
            required: true,
            message: "Please enter your user name",
          },
        ]}
      >
        <Input prefix={<UserOutlined className="text-primary" />} />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please enter your password",
          },
        ]}
      >
        <Input.Password prefix={<LockOutlined className="text-primary" />} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
