import React, { useState } from "react";
import "./App.scss";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import * as math from "mathjs";
import smartiesPic from "./components/assets/smarties_pic.png";

const App = () => {
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  const [guess, setGuess] = useState("");
  const [style, setStyle] = useState({ bottom: 0, right: 0 });

  const displayOperation = (userInput) => {
    if (isNaN(operation.charAt(operation.length - 1)) && isNaN(userInput)) {
      userInput = operation.slice(0, -1) + userInput;
      setOperation(userInput);
    } else {
      setOperation((operation) => [...operation, userInput].join(""));
    }
  };

  const allClear = () => {
    setOperation("");
    setResult("");
    setGuess("");
  };

  const clearEntry = () => {
    setOperation(operation.slice(0, -1));
  };

  const displayResult = () => {
    try {
      if (operation) {
        setResult(math.evaluate(operation).toString());
      } else {
        throw new Error("make a calculation please!");
      }
    } catch (error) {
      alert(error);
    }
  };

  const guessHandler = (e) => {
    let guessedResult = e.target.value;

    try {
      if (!isNaN(guessedResult)) {
        setGuess(guessedResult);
      } else {
        throw new Error("only numbers go here!");
      }
    } catch (error) {
      alert(error);
    }
  };
  const movingHandler = () => {
    let x = Math.floor(Math.random() * 500);
    let y = Math.floor(Math.random() * 500);
    setStyle({ bottom: x, right: y });
  };

  const holdingImgHandler = () => {
    setStyle({ bottom: 0, right: 0 });
  };

  return (
    <div className="App" onClick={holdingImgHandler}>
      <Display
        operation={operation}
        result={result}
        guess={guess}
        allClearHandler={allClear}
        guessHandler={guessHandler}
      />
      <Keypad
        clickHandler={displayOperation}
        resultHandler={displayResult}
        allClearHandler={allClear}
        clearEntryHandler={clearEntry}
      />
      <img
        src={smartiesPic}
        alt="smarties pictures"
        className="smartiesImg"
        style={style}
        onMouseEnter={movingHandler}
      />
    </div>
  );
};

export default App;
