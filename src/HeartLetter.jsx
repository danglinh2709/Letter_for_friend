import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import "./HeartLetter.css";
import FloatingText from "./FloatingText";

function HeartLetter() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="letter-scene">
      <div className="title-block">
        <h1 className="main-title">This was made just for you.</h1>
        <p className="from-text">From Ninh</p>
      </div>
      <div
        className={`envelope ${opened ? "open" : ""}`}
        onClick={() => setOpened(true)}
      >
        <FaHeart className="heart-icon" />
        <div className="letter-content">
          <p>Dear DIEUTHU, you are so beautiful</p>
          <p>I am always proud of you.</p>
          <p> สู้ๆ นะ</p>
          <p>ขอบคุณที่เกิดมาในโลกใบนี้</p>
        </div>
      </div>
      {opened && <FloatingText />}
    </div>
  );
}

export default HeartLetter;
