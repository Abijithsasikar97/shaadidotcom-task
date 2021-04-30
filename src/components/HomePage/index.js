import React from "react";
import Header from "../HeaderNav";
import InfiniteScrollList from "../InfiniteScrollList";
import { Row, Col } from "antd";

export const HomePage = () => {
  return (
    <>
      <Header />
      <div className="margin-top">
        <Row justify="center">
          <Col xs={20} sm={20} md={20} lg={20}>
            <InfiniteScrollList />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HomePage;
