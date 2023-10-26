import React, { useState, useEffect } from "react";
import "./Exhibit.css";

function Exhibit({ widget }) {
  const [statusSymbolClass, setStatusSymbolClass] = useState("");

  useEffect(() => {
    // Determine the class for the status symbol based on widget.data
    if (widget.data !== null && widget.data !== undefined) {
      setStatusSymbolClass("status-symbol-green");
    } else {
      setStatusSymbolClass("status-symbol-red");
    }
  }, [widget.data]);

  return (
    <div className="widget" style={{ width: widget.width }}>
    <header>
      <div className={`status-symbol ${statusSymbolClass}`}></div>
      <h2 className="heading">{widget.heading}</h2>
    </header>
    {widget.data !== null && widget.data !== undefined ? (
      <p className="value">{widget.data}</p>
    ) : (
      <div className="status-symbol"></div>
    )}
  </div>
  
  );
}

export default Exhibit;
