import React, { useEffect } from "react";
import "./Button.scss";
import WebFont from "webfontloader";

const Button = ({ symbol, className = "", clickHandler }) => {
  useEffect(() => {
    WebFont.load({
      google: { families: ["Fredoka One", "cursive"] },
    });
  }, []);

  return (
    <div
      onClick={() => {
        clickHandler(symbol);
      }}
      className={`button ${className}`}
    >
      {symbol}
    </div>
  );
};

export default Button;
