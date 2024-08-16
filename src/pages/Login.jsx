import React, { useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import Checkbox from "../components/Checkbox";
import Header2 from "../components/Header2";
import "../styles/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log("Logging in", { username, password, rememberMe });
  };

  return (
    <div className="login-container">
      <Header2 page="로그인" />

      <div className="login-form">
        <InputField
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Checkbox
          checked={rememberMe}
          label="로그인 상태 유지"
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <Button
          text="로그인"
          onClick={handleLogin}
          className="button-primary"
        />
        <div className="login-options">
          <a href="/find-id">아이디 찾기</a> |{" "}
          <a href="/find-password">비밀번호 찾기</a> |{" "}
          <a href="/signup">회원 가입</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
