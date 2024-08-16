import { useRef, useState } from "react";
import send from "./../assets/icons/up.png";
import "../styles/ChatInput.css";

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(1);

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = () => {
    if (input === "") {
      inputRef.current.focus();
      return;
    }
    onSend(input);
    setInput("");
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        value={input}
        onChange={onChangeInput}
        onKeyDown={onKeydown}
        placeholder="메시지를 입력하세요..."
      />
      <button type="button" onClick={onSubmit}>
        <img src={send} alt="send" />
      </button>
    </div>
  );
};

export default ChatInput;
