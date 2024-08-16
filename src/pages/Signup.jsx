import Header2 from "../components/Header2";
import "../styles/Signup.css";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    name: "",
    email: "",
    userType: "personal",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 비밀번호 확인 로직
    if (formData.password !== formData.confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    // try {
    //   const response = await axios.post("/api/signup", formData);
    //   setSuccess("회원가입에 성공했습니다.");
    // } catch (err) {
    //   setError("회원가입에 실패했습니다.");
    // }
  };

  return (
    <div className="Signup">
      <Header2 page="회원 가입" />
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
          <InputField
            placeholder="아이디"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <InputField
            placeholder="비밀번호"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <InputField
            placeholder="비밀번호 확인"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <InputField
            placeholder="이름"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <InputField
            placeholder="이메일"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          {/* <select name="emailDomain" onChange={handleChange}>
            <option value="직접 입력">직접 입력</option>
            <option value="@gmail.com">@gmail.com</option>
            <option value="@naver.com">@naver.com</option>
          </select> */}
        </div>

        <Button
          text="가입 완료"
          type="SQBL"
          className="button-primary"
          onClick={() => nav("/login")}
        />
      </form>
    </div>
  );
};

export default Signup;
