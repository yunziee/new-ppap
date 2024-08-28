import React, { useState, useCallback } from "react";
import axios from "axios"; // Axios import
import Button from "../components/Button";
import InputField from "../components/InputField";
import Checkbox from "../components/Checkbox";
import Header2 from "../components/Header2";
import "../styles/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberId, setRememberId] = useState(false);
  const [error, setError] = useState(""); // 에러 메시지를 위한 상태

  const handleUsernameChange = useCallback((e) => {
    setUsername(e.target.value);
  }, []);

  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleRememberIdChange = useCallback((e) => {
    setRememberId(e.target.checked);
  }, []);

  const handleLogin = useCallback(async () => {
    try {
      const response = await axios.post("http://localhost:5173/login", {
        username,
        password,
      });

      // 로그인 성공 시 처리 (예: 토큰 저장, 리다이렉트 등)
      if (response.status === 200) {
        console.log("Login successful", response.data);
        // 예를 들어, JWT 토큰을 로컬 스토리지에 저장
        localStorage.setItem("token", response.data.token);

        // 사용자 리다이렉션
        window.location.href = "http://localhost:5173/chat";
      }
    } catch (error) {
      // 로그인 실패 시 에러 처리
      console.error("Login failed", error);
      setError("아이디와 비밀번호를 확인하세요.");
    }
  }, [username, password]);

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
        {error && <div className="error-message">{error}</div>}
        <div className="login-options">
          <a href="/find-id">아이디 찾기</a> |{" "}
          <a href="/find-password">비밀번호 찾기</a> |{" "}
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
