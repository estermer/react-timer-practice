import React, {Component} from 'react';

class TimeDisplay extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.time}</h1>
      </div>
    )
  }
}

export default TimeDisplay;
