import React from 'react';
import './Card.css';


function Card (props) {
   
      let content;
      if(props.faceUp) {
        content = props.content;
      } else {
        content = ''
      }
      return (
        <div onClick={props.flip} className={`Card ${props.faceUp ? 'face-up': ''}`}>
          {content}
        </div>
      )
    
  }


export default Card;
