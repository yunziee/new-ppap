import React, { useState, useCallback } from "react";
import axios from "axios";
import Header2 from "../components/Header2";
import "../styles/Signup.css";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Signup = () => {
  // 초기 값 세팅
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    confirmPassword: "",
    name: "",
    email: "",
    userType: "personal",
  });

  // 오류 메시지 상태
  const [error, setError] = useState({
    id: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }, []);

  const validate = useCallback(() => {
    let valid = true;
    const newError = { id: "", password: "", confirmPassword: "", email: "" };

    const idExp = /^[a-zA-Z0-9]{4,12}$/;
    if (!idExp.test(formData.id)) {
      newError.id = "4-12 길이의 영문자와 숫자만 입력해 주세요.";
      valid = false;
    }

    const passwordExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordExp.test(formData.password)) {
      newError.password =
        "영문자와 숫자와 특수문자(!@#$%^*+=-) 조합으로 8자리 이상 입력해 주세요.";
      valid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newError.confirmPassword = "비밀번호가 일치하지 않습니다.";
      valid = false;
    }

    const emailExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailExp.test(formData.email)) {
      newError.email = "이메일의 형식이 올바르지 않습니다.";
      valid = false;
    }

    setError(newError);
    return valid;
  }, [formData]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setSuccess(""); // 성공 메시지 초기화
      setError({ id: "", password: "", confirmPassword: "", email: "" }); // 에러 메시지 초기화
      if (validate()) {
        try {
          // Axios 요청
          const response = await axios.post(
            "http://localhost:5173/signup",
            formData
          );

          if (response.status === 200) {
            setSuccess("회원 가입에 성공했습니다!");
            setFormData({
              id: "",
              password: "",
              confirmPassword: "",
              name: "",
              email: "",
              userType: "personal",
            });
            window.location.href = "http://localhost:5173/login";
          }
        } catch (err) {
          if (err.response && err.response.data) {
            setError((prevError) => ({
              ...prevError,
              ...err.response.data.errors, // 서버에서 전송된 에러 메시지 반영
            }));
          } else {
            // 팝업으로 에러 메시지 표시
            alert("회원 가입에 실패했습니다. 다시 시도해 주세요.");
          }
        }
      }
    },
    [formData, validate]
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
          {error.id && <p className="error-text">{error.id}</p>}
        </div>

        <div className="form-group">
          <MemoizedInputField
            placeholder="비밀번호"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          {error.password && <p className="error-text">{error.password}</p>}
        </div>

        <div className="form-group">
          <MemoizedInputField
            placeholder="비밀번호 확인"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {error.confirmPassword && (
            <p className="error-text">{error.confirmPassword}</p>
          )}
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
          {error.email && <p className="error-text">{error.email}</p>}
        </div>

        {success && <p className="success-text">{success}</p>}

        <MemoizedButton
          text="가입하기"
          type="SQBL"
          className="button-primary"
          onClick={handleSubmit}
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
