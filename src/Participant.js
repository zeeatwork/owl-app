import React from 'react';
import './Participant.css';

export default function Participant(props) {
  return (
    <div className="Person">
        <div className="item-avatar"><img src ={props.avatar} alt = {props.name}/></div>
        <div className="item-name"><h2>{props.name}</h2>
        <p>{props.onStage ? "On Stage" : ""}</p></div>
    </div>
  )
}