import React from 'react';
import ReactDOM from 'react-dom';
import STORE from './STORE';
import Participant from './Participant';


export default function Participants(props) {
  let sorted = props.participants.sort((a,b) => b.inSession - a.inSession)
return (
  <div>
    {sorted.map((participant) => (<Participant 
      avatar={participant.avatar}
      name={participant.name} 
      onStage={participant.onStage}/>))}
    </div>
)
}

 ; 