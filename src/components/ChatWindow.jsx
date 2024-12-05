import React, { useRef, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "../styles/ChatWindow.css";
import user from "./../assets/icons/userIcon.png";
import system from "./../assets/icons/robotEmoji.png";

const ChatWindow = ({ messages }) => {
  const chatContainerRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

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
              {msg.sender === "system" ? (
                <div>
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                  <button onClick={() => handleCopy(msg.text)}>
                    {copied ? "복사됨!" : "복사"}
                  </button>
                </div>
              ) : (
                <span>{msg.text}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatWindow;
