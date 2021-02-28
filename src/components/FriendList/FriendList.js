import React, { useEffect, useState } from "react";
import "./FriendList.css";
import friendsData from '../../JSON Data/friendsData.json';
import Friend from "./Friend/Friend";
import FriendCart from "./FriendCart/FriendCart";

const FriendList = (props) => {
  const [friendInfo, setFriendInfo] = useState([]);
  useEffect(()=> {
    setFriendInfo(friendsData);
  }, [])
  return (
    <div className="friendList-container">
      <div className="friendList">
          {
            friendInfo.map(info => <Friend info={info}></Friend>)
          }
      </div>
      <div className="friendList-cart">
        <FriendCart></FriendCart>
      </div>
    </div>
  );
};

export default FriendList;
