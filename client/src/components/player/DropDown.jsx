import React from 'react';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listVisible: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ listVisible: !this.state.listVisible });
  }

  render() {
    return (
      <div className={'dropdown-container'}>
        <div className={'dropdown-display'} onClick={this.toggle}>
          <p>{this.props.title}'s Game</p>
        </div>
        <div
          className={'dropdown-list' + (this.state.listVisible ? "" : " hide")}
          onClick={this.props.click}
        >
          <p>Room Code: {this.props.game.room_id}</p>
          <p># Questions: {this.props.game.num_questions}</p>
          <p>Max Players: {this.props.game.max_players}</p>
          <p># Players: {this.state.numPlayers}</p>
        </div>
      </div>
    );
  }
}

export default DropDown;
