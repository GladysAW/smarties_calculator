import React from "react";
import ModalTemplate from "./ModalTemplate";
import "./ModalHelpMessage.scss";

const ModalHelpMessage = ({ allClearHandler, helpMsg, setHelpMsg }) => {
  const returnToApp = () => {
    setHelpMsg(false);
  };

  return (
    <div onClick={returnToApp}>
      <ModalTemplate allClearHandler={allClearHandler} helpMsg={helpMsg}>
        <ol className="instructions">
          <li>enter a mathematical operation</li>
          <li>enter your answer</li>
          <li>click on the equal button to see if your answer is correct</li>
        </ol>
        <p className="note">
          <span>note:</span> you can only enter numbers in the guess field and
          in case you couldn't make a guess, you can still see the answer by
          clicking on the equal button
        </p>
      </ModalTemplate>
    </div>
  );
};

export default ModalHelpMessage;
