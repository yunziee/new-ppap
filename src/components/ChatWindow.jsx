import "../styles/ChatWindow.css";
import user from "./../assets/icons/userIcon.png";
import system from "./../assets/icons/robotEmoji.png";

const ChatWindow = ({ messages }) => {
  return (
    <div className="chat-window">
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
