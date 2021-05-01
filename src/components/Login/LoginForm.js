import React, { useState, useEffect } from "react";
import { Form, Input, Button, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

export const LoginForm = () => {
  let history = useHistory();

  const [showErrMess, setShowErrMess] = useState(false);

  const onLogin = (values) => {
    if (values.username === "foo" && values.password === "bar") {
      localStorage.setItem("auth-token", "!@#$%^&*())SDFGHJKLFGHJK");
      history.push("/home");
    } else {
      setShowErrMess(true);
    }
  };

  useEffect(() => {
    if (showErrMess) {
      setTimeout(() => {
        setShowErrMess(false);
      }, 2000);
    }
  }, [showErrMess]);

  return (
    <Form layout="vertical" name="login-form" onFinish={onLogin}>
      {showErrMess ? (
        <Alert
          type="error"
          showIcon
          message={`INvalid username or password`}
        ></Alert>
      ) : (
        ""
      )}
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
