import React from "react";
import "./Keypad.scss";

import Button from "./Button";

const Keypad = ({
  clickHandler,
  allClearHandler,
  resultHandler,
  clearEntryHandler,
}) => {
  return (
    <div className="keypad">
      <Button
        symbol="AC"
        className={`spanned btnAC`}
        clickHandler={allClearHandler}
      ></Button>
      <Button
        className="btnCE"
        symbol="CE"
        clickHandler={clearEntryHandler}
      ></Button>
      <Button
        className="btnDevide"
        symbol="/"
        clickHandler={clickHandler}
      ></Button>
      <Button
        className="btnNr1"
        symbol="1"
        clickHandler={clickHandler}
      ></Button>
      <Button
        className="btnNr2"
        symbol="2"
        clickHandler={clickHandler}
      ></Button>
      <Button
        className="btnNr3"
        symbol="3"
        clickHandler={clickHandler}
      ></Button>
      <Button
        className="btnMultiply"
        symbol="*"
        clickHandler={clickHandler}
      ></Button>
      <Button
        className="btnNr4"
        symbol="4"
        clickHandler={clickHandler}
      ></Button>
      <Button
        className="btnNr5"
        symbol="5"
        clickHandler={clickHandler}
      ></Button>
      <Button
        className="btnNr6"
        symbol="6"
        clickHandler={clickHandler}
      ></Button>
      <Button
        className="btnAdd"
        symbol="+"
        clickHandler={clickHandler}
      ></Button>
      <Button
        className="btnNr7"
        symbol="7"
        clickHandler={clickHandler}
      ></Button>
      <Button
        className="btnNr8"
        symbol="8"
        clickHandler={clickHandler}
      ></Button>
      <Button
        className="btnNr9"
        symbol="9"
        clickHandler={clickHandler}
      ></Button>
      <Button
        className="btnSubtract"
        symbol="-"
        clickHandler={clickHandler}
      ></Button>
      <Button
        className="btnDot"
        symbol="."
        clickHandler={clickHandler}
      ></Button>
      <Button
        className="btnNr0"
        symbol="0"
        clickHandler={clickHandler}
      ></Button>
      <Button
        symbol="="
        className={`spanned btnResult`}
        clickHandler={resultHandler}
      ></Button>
    </div>
  );
};

export default Keypad;
