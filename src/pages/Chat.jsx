import { useState } from "react";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";
import Sidebar from "../components/Sidebar";
import "../styles/Chat.css";
import Header from "../components/Header";

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: "system", text: "개인정보 처리방침에 관한 질문을 해보세요!" },
  ]);

  const handleSend = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: message },
      { sender: "system", text: "PPAP 답변" },
    ]);
  };

  return (
    <>
      <Header />
      <Sidebar title="진행한 평가">
        <a href="#eval1">20240801</a>
        <a href="#eval2">20240803</a>
        {/* 다른 링크들... */}
      </Sidebar>
      <div className="chat-container">
        <ChatWindow messages={messages} />
        <ChatInput onSend={handleSend} />
      </div>
    </>
  );
};

export default Chat;
