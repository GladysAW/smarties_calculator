import React from "react";
import "./ModalIncorrect.scss";
import ModalTemplate from "./ModalTemplate";
import sadTeddy1 from "../assets/sad-teddy-bear.png";
import sadTeddy2 from "../assets/sad-teddy-bear2.png";
import sadTeddy3 from "../assets/sad-teddy-bear3.png";
import confusedTedy from "../assets/teddy-bear-confused.png";
import embarrassedTeddy from "../assets/teddy-bear-embarrassed.png";
import hopefullTeddy from "../assets/teddy-bear-hopefull.png";

const ModalIncorrect = ({ allClearHandler }) => {
  const incorrectAnswerArr = [
    "you’re never a loser until you quit trying 💪",
    "sorry 😢 that was an incorrect guess ",
    "maybe you'll guess the one after this 🥺",
    "it's not correct, but don't give up! 🤗",
    "wrong answer, sorry 🙁",
    "try again, maybe you'll get it next time",
  ];

  const loseImagesArr = [
    sadTeddy1,
    sadTeddy2,
    sadTeddy3,
    confusedTedy,
    confusedTedy,
    embarrassedTeddy,
    hopefullTeddy,
  ];

  const incorrectAnswerMsg = (
    <p>
      {
        incorrectAnswerArr[
          Math.floor(Math.random() * incorrectAnswerArr.length)
        ]
      }
    </p>
  );
  const incorrectAnswerImg =
    loseImagesArr[Math.floor(Math.random() * loseImagesArr.length)];

  return (
    <ModalTemplate allClearHandler={allClearHandler}>
      <img
        id="loser-teddy-bear"
        src={incorrectAnswerImg}
        alt="teddy-bear-pic"
      />
      {incorrectAnswerMsg}
    </ModalTemplate>
  );
};

export default ModalIncorrect;
