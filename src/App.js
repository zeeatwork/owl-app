import React, {Component} from 'react';
import './App.css';
import { render } from '@testing-library/react';
import Participants from './Participants';
import Stage from './Stage';

//


class App extends Component {
  static defaultProps = {
    store: {participants:[]}
  }
  render(){
    const {store} = this.props;
    return (
      <div className ="container">
      <div className="participantsList item-participants">
            <Participants participants = {store.participants} />
      </div>
      <div className="stage item-stage">
          <Stage participants = {store.participants}/>
      </div>
      </div>
    )
  }
}

export default App;