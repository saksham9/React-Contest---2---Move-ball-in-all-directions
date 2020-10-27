import React, { Component, useState } from "react";
import "../styles/App.css";

function App() {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });
  function handler(event){
    event = event || window.event;
    //console.log(event.keyCode);
    if (event.keyCode === 40) {
      //upArrow
      setY(y + 5);
    } else if (event.keyCode === 38) {
      //downarrow
      setY(y - 5);
    } else if (event.keyCode === 37) {
      //left arrow
      setX(x - 5);
    } else if (event.keyCode === 39) {
      //right arrow
      setX(x + 5);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
    };
  });
  useEffect(() => {
    setBallPosition({
      left: x + "px",
      top: ballPosition.top
    });
  }, [x]);
  useEffect(() => {
    setBallPosition({
      left: ballPosition.left,
      top: y + "px"
    });
  }, [y]);
  function reset  () {
    setRenderBall(false);
    setX(0);
    setY(0);
    setBallPosition({ left: "0px", top: "0px" });
  };
  function start  () {
    setRenderBall(true);
  };
  function renderChoice() {
    if (renderBall) {
      return <div className="ball" style={ballPosition}></div>;
    } else
      return (
        <button onClick={start} className="start">
          Start
        </button>
      );
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
