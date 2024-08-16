import "../styles/Header2.css";
import { Link } from "react-router-dom";

const Header = ({ page }) => {
  return (
    <header className="header2">
      <h1 className="logo">
        <Link to="/">PPAP</Link>
      </h1>
      <p>개인정보 처리방침 평가 어시스턴트 챗봇</p>
      <h3>{page}</h3>
    </header>
  );
};

export default Header;
