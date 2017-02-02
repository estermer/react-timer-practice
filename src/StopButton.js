import React, {Component} from 'react';

class StopButton extends Component {
  render() {
    let {stop} = this.props;
    return (
      <button onClick={(event) => stop(event)}>Stop</button>
    )
  }
}

export default StopButton;
