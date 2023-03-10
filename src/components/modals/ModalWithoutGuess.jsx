import React from "react";
import ModalTemplate from "./ModalTemplate";

const ModalWithoutGuess = ({ allClearHandler, resultWithoutGuess }) => {
  const NoAnswerArr = [
    "why don't you guess the next one? ๐ฅบ",
    "sorry, you didn't give a guess ๐",
    "maybe next time you guess? ๐คจ",
    "no worries, you'll get the next one ๐",
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
