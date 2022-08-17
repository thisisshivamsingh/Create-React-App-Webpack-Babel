import React from "react";
import ReactDOM from "react-dom";
import eiffelImg from "../asset/eiffel.jpg";
import "./test.css";

const Test = () => {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        Creating React App using Webpack and Babel
        <br />
        <br />
        <img src={eiffelImg} alt="eiffel tower" />
        <br />
        <br />
        <h2>Hello React</h2>
      </h2>
    </>
  );
};

ReactDOM.render(<Test />, document.getElementById("root"));
