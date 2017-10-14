import React from 'react';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.setState({
      listVisible: false
    });
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ listVisible: !this.state.listVisible });
  }

  render() {
    return (
      <div className={'dropdown-container' + (this.state.listVisible ? " show" : "")}>
        <div className={'dropdown-display'} onClick={this.show}>
          <p>{this.props.title}</p>
        </div>
        <div className="dropdown-list">
          {
            // {this.props.list}
          }
        </div>
      </div>
    );
  }
}

export default DropDown;
