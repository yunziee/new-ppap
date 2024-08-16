import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"; // 스타일을 관리하는 CSS 파일

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">PPAP</Link>
      </div>
    </header>
  );
};

export default Header;
