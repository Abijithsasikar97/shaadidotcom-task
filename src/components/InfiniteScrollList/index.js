import React, { useState, useEffect } from "react";
import axios from "axios";
import { List, Avatar, Spin } from "antd";

export const InfiniteScrollList = () => {
  const [userList, setUserList] = useState([]);
  const [paginationLimit, setPaginationLimit] = useState(10);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    getuserData();
  }, []);

  const getuserData = () => {
    setShowLoader(true);
    axios({
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "app-id": "608cc1c54135ad3adae8b4fb",
      },
      url: `https://dummyapi.io/data/api/user?limit=${paginationLimit}`,
    })
      .then((response) => {
        setShowLoader(false);
        if (paginationLimit > 10) {
          let arry = [...userList, ...response.data.data];

          setUserList(arry);
        } else {
          setUserList(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const scrollEvent = (e) => {
    var bottom =
      e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 50;
    if (bottom) {
      let pagination = paginationLimit + 10;
      setPaginationLimit(pagination);
      setShowLoader(true);
      setTimeout(() => {
        getuserData();
      }, 500);
    }
  };

  return (
    <>
      <h1>Infinite scroll List</h1>
      <hr />
      <div onScroll={scrollEvent} className="scroll-style">
        <List
          itemLayout="horizontal"
          dataSource={userList}
          style={{ textAlign: "left" }}
          renderItem={(users) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={users.picture} />}
                title={`${users.firstName}  ${users.lastName}`}
                description={users.email}
              />
            </List.Item>
          )}
        />
        {showLoader ? <Spin tip="Loading..."></Spin> : ""}
      </div>
    </>
  );
};

export default InfiniteScrollList;
