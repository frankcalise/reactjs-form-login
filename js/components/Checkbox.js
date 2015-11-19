import React from 'react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isChecked: false};

    this.onChange = this.onChange.bind(this);
  }
  onChange() {
    this.setState({isChecked: !this.state.isChecked});
  }
  render() {
    return (
      <div className="checkbox">
        <label>
          <input type="checkbox" /> {this.props.label}
        </label>
      </div>
    )
  }
}

export default Checkbox;