import { useState } from "react";

function App() {
  const [hovering, setHovering] = useState(false);
  const [position, setPosition] = useState("right");

  const mouseOver = () => {
    return setHovering(true);
  };
  const mouseOut = () => {
    return setHovering(false);
  };

  return (
    <div className="main-div">
      <div className="tooltip-div">
        <div
          className="component-div"
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
        >
          Hover Over Me!
        </div>
        {hovering && (
          <div className={`tip-div tip-${position}`}>
            Thanks for hovering! I'm a tooltip
          </div>
        )}
      </div>

      <div className="position-div">
        <button className="position top" onClick={() => setPosition("top")}>
          Top
        </button>
        <button
          className="position bottom"
          onClick={() => setPosition("bottom")}
        >
          Bottom
        </button>
        <button className="position left" onClick={() => setPosition("left")}>
          Left
        </button>
        <button className="position right" onClick={() => setPosition("right")}>
          Right
        </button>
      </div>
    </div>
  );
}

export default App;
