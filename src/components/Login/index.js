import React from "react";
import { Card, Row, Col } from "antd";
import LoginForm from "./LoginForm";

export const Login = () => {
  const divContainerStyle = {
    height: "100vh",
    backgroundColor: "#72849a",
    backgroundSize: "cover",
  };


  return (
    <div style={divContainerStyle}>
      <div className="container d-flex flex-column justify-content-center h-100">
        <Row justify="center">
          <Col xs={20} sm={20} md={20} lg={7}>
            <Card>
              <div className="margin-top">
                <div className="text-center">
                  <h1>Login</h1>
                </div>
                <Row justify="center">
                  <Col xs={24} sm={24} md={20} lg={20}>
                    <LoginForm />
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
