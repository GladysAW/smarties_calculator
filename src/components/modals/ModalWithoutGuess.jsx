import React from "react";
import ModalTemplate from "./ModalTemplate";

const ModalWithoutGuess = ({ allClearHandler, resultWithoutGuess }) => {
  const NoAnswerArr = [
    "why don't you guess the next one? 🥺",
    "sorry, you didn't give a guess 😕",
    "maybe next time you guess? 🤨",
    "no worries, you'll get the next one 😉",
  ];

  const NoAnswerMsg = (
    <p>{NoAnswerArr[Math.floor(Math.random() * NoAnswerArr.length)]}</p>
  );

  return (
    <ModalTemplate allClearHandler={allClearHandler}>
      {NoAnswerMsg}
      <p>for this one the answer is: {resultWithoutGuess}</p>
    </ModalTemplate>
  );
};

export default ModalWithoutGuess;
