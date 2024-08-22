import "../styles/StartButton.css";
import chatIcon from "./../assets/icons/chat.png";
import signUp from "./../assets/icons/signup.png";
import logIn from "./../assets/icons/enter.png";
import { useNavigate } from "react-router-dom";

const StartButton = () => {
  const nav = useNavigate();

  return (
    <div className="StartButton">
      <div className="col">
        <button onClick={() => nav("/chat")} className="chatButton">
          <div>
            <span className="startchat">채팅 시작하기</span>
            <div className="infotext">
              <span>PPAP와의 대화를 통해</span>
              <span>개인정보 처리방침에 대해 알아보세요</span>
            </div>
          </div>
          <img src={chatIcon} alt="chat" />
        </button>
      </div>

      <div className="col">
        <button onClick={() => nav("/signup")} className="actionButton">
          <span>회원 가입</span>
          <img src={signUp} alt="sign up" />
        </button>
        <button onClick={() => nav("/login")} className="actionButton">
          <span>로그인</span>
          <img src={logIn} alt="log in" />
        </button>
      </div>
    </div>
  );
};

export default StartButton;
