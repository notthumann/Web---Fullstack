import React from 'react';
import './chip.css';

const Chip = (props) => {
  return(
    <div className = {`chip-background ${props.color}`}>
        {props.text}
      </div>
  );
};
export default Chip;