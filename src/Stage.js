import React from 'react';
import STORE from './STORE';
import Participant from './Participant';


export default function Participants(props) {
  let filtered = props.participants.filter((person) => person.onStage === true);
return (
  <div>
    {filtered.map((participant) => (<Participant name={participant.name} 
    avatar={participant.avatar}
    />))}
    </div>
)
}

 ; 
