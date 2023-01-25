import React, { useState } from "react";
import "./ModalTemplate.scss";

const ModalTemplate = ({ allClearHandler, children, helpMsg }) => {
  const [style, setStyle] = useState({ visibility: "visible" });

  const hideModal = () => {
    setStyle({ visibility: "hidden" });
  };

  const resetAndClear = () => {
    hideModal();

    !helpMsg && allClearHandler();
  };
  return (
    <div className="modal" style={style}>
      <div className="modal__overlay" onClick={resetAndClear}></div>
      <div className="modal__container">
        {children}
        <button type="button" className="modal__close" onClick={resetAndClear}>
          &#10005;
        </button>
      </div>
    </div>
  );
};

export default ModalTemplate;
