import React, { useState, useCallback } from "react";
import Header2 from "../components/Header2";
import "../styles/Signup.css";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    password: "",
    confirmPassword: "",
    name: "",
    email: "",
    userType: "personal",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (formData.password !== formData.confirmPassword) {
        setError("비밀번호가 일치하지 않습니다.");
        return;
      }
      // 서버에 회원가입 요청 로직은 여기에 추가됩니다.
    },
    [formData]
  );

  return (
    <div className="Signup">
      <MemoizedHeader2 page="회원 가입" />
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="check-group">
          <input
            type="radio"
            id="personal"
            name="userType"
            value="personal"
            checked={formData.userType === "personal"}
            onChange={handleChange}
          />
          <label htmlFor="personal">개인</label>

          <input
            type="radio"
            id="business"
            name="userType"
            value="business"
            checked={formData.userType === "business"}
            onChange={handleChange}
          />
          <label htmlFor="business">법인</label>
        </div>

        <div className="form-group">
          <MemoizedInputField
            placeholder="아이디"
            name="id"
            type="text"
            value={formData.id}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <MemoizedInputField
            placeholder="비밀번호"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <MemoizedInputField
            placeholder="비밀번호 확인"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <MemoizedInputField
            placeholder="이름"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <MemoizedInputField
            placeholder="이메일"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <MemoizedButton
          text="가입 완료"
          type="SQBL"
          className="button-primary"
          onClick={() => nav("/login")}
        />
      </form>
    </div>
  );
};

// 불필요한 리렌더링 방지
const MemoizedHeader2 = React.memo(Header2);
const MemoizedInputField = React.memo(InputField);
const MemoizedButton = React.memo(Button);

export default Signup;
