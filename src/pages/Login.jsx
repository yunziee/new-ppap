import React, { useState, useCallback } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import Checkbox from "../components/Checkbox";
import Header2 from "../components/Header2";
import "../styles/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberId, setRememberId] = useState(false);

  const handleUsernameChange = useCallback((e) => {
    setUsername(e.target.value);
  }, []);

  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleRememberIdChange = useCallback((e) => {
    setRememberId(e.target.checked);
  }, []);

  const handleLogin = useCallback(() => {
    console.log("Logging in", { username, password, rememberId });
  }, [username, password, rememberId]);

  return (
    <div className="login-container">
      <MemoizedHeader2 page="로그인" />

      <div className="login-form">
        <MemoizedInputField
          type="text"
          placeholder="아이디"
          value={username}
          onChange={handleUsernameChange}
        />
        <MemoizedInputField
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={handlePasswordChange}
        />
        <MemoizedCheckbox
          checked={rememberId}
          label="아이디 저장"
          onChange={handleRememberIdChange}
        />
        <MemoizedButton
          text="로그인"
          onClick={handleLogin}
          className="button-primary"
        />
        <div className="login-options">
          {/* <a href="/find-id">아이디 찾기</a> |{" "}
          <a href="/find-password">비밀번호 찾기</a> |{" "} */}
          <a href="/signup">회원 가입</a>
        </div>
      </div>
    </div>
  );
};

// 최적화
const MemoizedHeader2 = React.memo(Header2);
const MemoizedInputField = React.memo(InputField);
const MemoizedCheckbox = React.memo(Checkbox);
const MemoizedButton = React.memo(Button);

export default Login;
