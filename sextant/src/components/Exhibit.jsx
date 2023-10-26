import React from 'react';
import './Exhibit.css';

function Exhibit({ widget }) {
  return (
    <div className="widget">
      <h2 className="heading">{widget.heading}</h2>
      <p className="value">{widget.data}</p>
    </div> 
  );
}

export default Exhibit;



