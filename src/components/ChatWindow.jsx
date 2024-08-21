import React, { useEffect, useRef } from "react";
import "../styles/ChatWindow.css";
import user from "./../assets/icons/userIcon.png";
import system from "./../assets/icons/robotEmoji.png";

const ChatWindow = ({ messages }) => {
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // 메시지가 추가될 때마다 스크롤을 최하단으로 이동
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]); // messages가 변경될 때마다 실행

  return (
    <div className="chat-window" ref={chatContainerRef}>
      <div className="message-list">
        {messages.map((msg, index) => (
          <div key={index} className={`message-bubble ${msg.sender}`}>
            <div className="message-content">
              <img
                src={msg.sender === "user" ? user : system}
                alt={`${msg.sender} icon`}
                className="message-icon"
              />
              <span>{msg.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatWindow;
