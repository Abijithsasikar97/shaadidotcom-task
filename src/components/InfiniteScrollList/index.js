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
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?_start=0&_limit=${paginationLimit}`
      )
      .then((response) => {
        setShowLoader(false);
        if (paginationLimit > 10) {
          let arry = [...userList, ...response.data];

          setUserList(arry);
        } else {
          setUserList(response.data);
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
      setShowLoader(true);
      setPaginationLimit(pagination);
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
          //   loading={showLoader}
          renderItem={(users) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={users.thumbnailUrl} />}
                title={users.title}
                description={users.url}
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
