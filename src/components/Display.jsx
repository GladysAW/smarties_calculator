import React, { useState } from "react";
import "./Display.scss";
import ModalHelpMessage from "./modals/ModaHelpMessage";
import ModalCorrect from "./modals/ModalCorrect";
import ModalIncorrect from "./modals/ModalIncorrect";
import ModalWithoutGuess from "./modals/ModalWithoutGuess";

const Display = ({
  operation,
  result,
  guess,
  guessHandler,
  allClearHandler,
}) => {
  let displayMessage;
  const [helpMsg, setHelpMsg] = useState(false);

  // if guess is correct
  if (guess && result && guess === result) {
    displayMessage = <ModalCorrect allClearHandler={allClearHandler} />;
  }
  // if guess is not correct
  if (result && guess !== result) {
    displayMessage = <ModalIncorrect allClearHandler={allClearHandler} />;
  }
  // if no guess was entered
  if (!guess && result) {
    displayMessage = (
      <ModalWithoutGuess
        allClearHandler={allClearHandler}
        resultWithoutGuess={result}
      />
    );
  }

  const displayHelpMessage = () => {
    setHelpMsg(true);
  };

  return (
    <>
      <div className="display">
        <input
          className="guess"
          placeholder="Enter your answer here"
          value={guess}
          type="text"
          onChange={guessHandler}
        />
        <div className="operation">{operation}</div>
        <div className="result">{result}</div>
      </div>
      {displayMessage}
      <span className="help" onClick={displayHelpMessage}>
        <a href="#"></a>
      </span>
      {helpMsg && (
        <ModalHelpMessage
          setHelpMsg={setHelpMsg}
          helpMsg={helpMsg}
          allClearHandler={allClearHandler}
        ></ModalHelpMessage>
      )}
    </>
  );
};

export default Display;
