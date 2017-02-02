import React, {Component} from 'react';
import TimeDisplay from './TimeDisplay';
import StartButton from './StartButton';
import StopButton from './StopButton';
import ResetButton from './ResetButton';

class Controls extends Component {
  constructor() {
    super();
    this.state = {
      time: 0
    }
  }

  start(e) {
    e.preventDefault();
    console.log('Start');
    this.intervalId = setInterval(this.tick.bind(this), 1000);
  }

  stop(e) {
    e.preventDefault();
    console.log('Stop');
    clearInterval(this.intervalId);
  }

  reset(e) {
    e.preventDefault();
    console.log('Reset');
    clearInterval(this.intervalId);
    this.setState({
      time: 0
    });
  }

  tick() {
    let tick = this.state.time;
    tick++;
    this.setState({
      time: tick
    });
  }

  render() {
    return (
      <div>
        <TimeDisplay time={this.state.time}/>
        <StartButton start={(e) => this.start(e)}/>
        <StopButton stop={(e) => this.stop(e)}/>
        <ResetButton reset={(e) => this.reset(e)}/>
      </div>
    )
  }
}

export default Controls;
