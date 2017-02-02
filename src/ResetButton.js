import React, {Component} from 'react';

class ResetButton extends Component {
  render() {
    let {reset} = this.props;
    return (
      <button onClick={(event) => reset(event)}>Reset</button>
    )
  }
}

export default ResetButton;
