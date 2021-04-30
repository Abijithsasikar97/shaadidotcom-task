import React from "react";
import { Layout } from "antd";
import { LoginOutlined } from "@ant-design/icons";

const { Header } = Layout;

export const HeaderNav = () => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Header>
      <div>
        <h1 className="nav-left text-secondary">shaadi.com Task</h1>
        <h3
          onClick={() => logout()}
          className=" nav-right pointer text-secondary"
        >
          Logout <LoginOutlined />
        </h3>
      </div>
    </Header>
  );
};

export default HeaderNav;
