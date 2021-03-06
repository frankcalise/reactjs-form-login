import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <button onClick={this.props.clickHandler} className={"btn " + this.props.className} type="button">{this.props.label}</button>
  }
}

export default Button;