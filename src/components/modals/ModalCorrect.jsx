import React from "react";
import ModalTemplate from "./ModalTemplate";
import "./ModalCorrect.scss";
import winningTeddy1 from "../assets/winning-teddy-bear1.png";
import winningTeddy2 from "../assets/winning-teddy-bear2.png";
import winningTeddy3 from "../assets/winning-teddy-bear3.png";
import winningTeddy4 from "../assets/winning-teddy-bear4.png";
import winningTeddy5 from "../assets/winning-teddy-bear5.png";
import winningTeddy6 from "../assets/winning-teddy-bear6.png";

const ModalCorrect = ({ allClearHandler }) => {
  const correctAnswerArr = [
    "Correct!! 💪",
    "nice job! 🥳",
    "awesome! 🎊",
    "Tears of happiness 😭",
    "I am so proud of you 🎉",
    "Amazing!! 🥳",
  ];

  const winnerImagesArr = [
    winningTeddy1,
    winningTeddy2,
    winningTeddy3,
    winningTeddy4,
    winningTeddy5,
    winningTeddy6,
  ];

  const CorrectAnswerMsg = (
    <p>
      {correctAnswerArr[Math.floor(Math.random() * correctAnswerArr.length)]}
    </p>
  );

  const CorrectAnswerImg =
    winnerImagesArr[Math.floor(Math.random() * winnerImagesArr.length)];

  return (
    <ModalTemplate allClearHandler={allClearHandler}>
      <img
        id="winning-teddy-bear"
        src={CorrectAnswerImg}
        alt="winning-teddy-bear-pic"
      />
      {CorrectAnswerMsg}
    </ModalTemplate>
  );
};

export default ModalCorrect;
