import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Icon = <LoadingOutlined style={{ fontSize: 35 }} spin />;

const Loading = () => {
  const loaderStyle = {
    position: "fixed",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={loaderStyle}>
      <Spin indicator={Icon} />
    </div>
  );
};

export default Loading;
