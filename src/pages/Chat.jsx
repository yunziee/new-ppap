import { useState, useCallback, memo } from "react";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";
import Sidebar from "../components/Sidebar";
import "../styles/Chat.css";
import Header from "../components/Header";
import Button from "../components/Button";

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: "system", text: "개인정보 처리방침에 관한 질문을 해 보세요!" },
  ]);

  const handleSend = useCallback(
    (message) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", text: message },
        { sender: "system", text: "PPAP 답변" },
      ]);
    },
    [setMessages]
  );

  return (
    <div>
      <Header />
      <Sidebar className="chat-sidebar">
        <div className="buttons">
          <Button
            text="새로운 채팅"
            onClick={() => {}}
            className="button-sidebar"
          />
          <Button
            text="파일 업로드"
            onClick={() => {}}
            className="button-sidebar"
          />
        </div>
        <div className="pre-eval">
          <h2>진행한 평가</h2>
          <a href="#eval1">20240801</a>
          <a href="#eval2">20240803</a>
          <a href="#eval3">20240803</a>
          <a href="#eval4">20240805</a>
          <a href="#eval5">20240817</a>
          <a href="#eval6">20240826</a>
          {/* 다른 링크들... */}
        </div>
      </Sidebar>
      <div className="chat-container">
        <ChatWindow messages={messages} />
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
};

export default Chat;
