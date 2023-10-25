import React from 'react';
import './Exhibit.css';

function Exhibit({ widget }) {
  return (
    <div className="widget">
      <h2>{widget.heading}</h2>
      <p>{widget.data}</p>
    </div> 
  );
}

export default Exhibit;



