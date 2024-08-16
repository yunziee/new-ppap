import StartButton from "../components/StartButton";
import "../styles/Home.css";
import ropeKnotShape from "../assets/icons/ropeKnotShape.png";

const Home = () => {
  return (
    <div className="Start">
      <img
        src={ropeKnotShape}
        alt="Rope Knot"
        className="background-image top-right"
      />
      <img
        src={ropeKnotShape}
        alt="Rope Knot"
        className="background-image bottom-left"
      />
      <section className="title">
        <h1>PPAP</h1>
        <p>개인정보 처리방침 작성 어시스턴트 챗봇</p>
      </section>
      <section className="startbox">
        <StartButton />
      </section>
    </div>
  );
};

export default Home;
