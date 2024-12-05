import { useState, useCallback, useRef } from "react";
import axios from "axios";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";
import Sidebar from "../components/Sidebar";
import "../styles/Chat.css";
import Header from "../components/Header";
import Button from "../components/Button";
import Spinner from "../components/Spinner";

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: "system", text: "개인정보 처리방침에 관한 질문을 해 보세요!" },
  ]);
  const [policyFilePath, setPolicyFilePath] = useState(null);
  const [guidelineFilePath, setGuidelineFilePath] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSend = useCallback(
    async (message) => {
      setLoading(true);

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", text: message },
      ]);

      try {
        const response = await axios.post("http://15.165.54.60/api/ask", {
          query: message,
          policy_file_path: policyFilePath,
          guideline_file_path: guidelineFilePath,
        });

        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "system", text: response.data.response },
        ]);
      } catch (error) {
        console.error("Error sending request:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "system",
            text: "오류가 발생했습니다. 다시 시도해 주세요.",
          },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [policyFilePath, guidelineFilePath]
  );

  const hiddenFileInput = useRef(null);

  const handleFileUpload = (fileType, filePath) => {
    if (fileType === "policy") {
      setPolicyFilePath(filePath);
    } else if (fileType === "guideline") {
      setGuidelineFilePath(filePath);
    }
  };

  const handleClickUpload = (fileType) => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
      hiddenFileInput.current.onchange = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);

        try {
          const response = await axios.post(
            fileType === "policy"
              ? "http://15.165.54.60:8000/upload-policy"
              : "http://15.165.54.60:8000/upload-guideline",
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
          handleFileUpload(fileType, response.data.file_path);
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      };
    }
  };

  return (
    <div>
      <Header />
      <Sidebar className="chat-sidebar">
        <div className="buttons">
          <input
            type="file"
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
          <Button
            text="새로운 채팅"
            onClick={() =>
              setMessages([
                {
                  sender: "system",
                  text: "개인정보 처리방침에 관한 질문을 해 보세요!",
                },
              ])
            }
            className="button-sidebar"
          />
          <Button
            text="개인정보처리방침 업로드"
            onClick={() => handleClickUpload("policy")}
            className="button-sidebar"
          />
          <Button
            text="작성지침 업로드"
            onClick={() => handleClickUpload("guideline")}
            className="button-sidebar"
          />
        </div>
      </Sidebar>
      <div className="chat-container">
        {loading && <Spinner />}
        <ChatWindow messages={messages} />
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
};

export default Chat;
