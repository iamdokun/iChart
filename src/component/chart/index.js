import React, { useState, useEffect } from "react";
import "../../styles/chart.css";
import OtherMessage from "./otherMessage";
import UserMessage from "./userMessage";
import { useDispatch, useSelector } from "react-redux";
import { messageBox } from "../../store/slices/messageSlice";

const Chart = () => {
  const dispatch = useDispatch();
  const {messages } = useSelector(state => state.messages)
  const [msg, setMsg] = useState();
  const [user, setUser] = useState("")


const reloadFunc = () => {
window.location.reload();
}

  useEffect(() => {
   const loginUser =  JSON.parse(sessionStorage.getItem("user"))
   setUser(loginUser)
  }, []);

  const handelMessage = () => {
    console.log(user);

    const payload = {
        userId: user.id,
        message: msg,
        userName: user.userName
    };
    
    dispatch(messageBox(payload));
  }

  console.log(messages);



  return (
    <div className="chartWrap">
      <div className="introWrap">
        <h3>
          Hello <span>{user.userName}</span>
        </h3>
        <p>
          Welcome to <span>i</span>Chart
        </p>
      </div>
      <div className="myChart">
        <div className="messageWrap">
          {messages?.map((message, index) => {
            if (
              message.userId === user.id &&
              message.userName === user.userName
            ) {
              return <UserMessage message={message} />;
            } else {
              return <OtherMessage message={message} />;
            }
          })}
        </div>

        <div className="write-message-wrap">
          <input
            type="text"
            placeholder="Write your message here..."
            vale={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <button onClick={handelMessage}>Send</button>
        </div>
      </div>
      <div className="refreshBtn">
        <p>Kindly click on the reload button to see new messages</p>
        <button onClick={reloadFunc}>Reload</button>
      </div>
    </div>
  );
};

export default Chart;
