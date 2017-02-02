import React, {Component} from 'react';

class StartButton extends Component {
  render() {
    let {start} = this.props;
    return (
      <button onClick={(event) => start(event)}>Start</button>
    )
  }
}

export default StartButton;
