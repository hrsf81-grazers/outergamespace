import React from 'react';
import PropTypes from 'prop-types';
import SocketClientInterface from '../../../../socket/socketClientInterface';

const propTypes = {
  game: PropTypes.shape({
    room_id: PropTypes.string,
    host_username: PropTypes.string,
    num_questions: PropTypes.number,
    time_per_question: PropTypes.number,
    max_players: PropTypes.number,
    num_players: PropTypes.number,
    is_started: PropTypes.number
  }).isRequired,
  joinGame: PropTypes.func.isRequired,
  socketClientInterface: PropTypes.instanceOf(SocketClientInterface).isRequired
};

class GameListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPlayers: this.props.game.num_players
    };

    this.handleClick = this.handleClick.bind(this);
    this.incrementPlayers = this.incrementPlayers.bind(this);
    this.decrementPlayers = this.decrementPlayers.bind(this);
  }

  componentDidMount() {
    this.props.socketClientInterface.registerCallbackPlayerJoinGame(this.incrementPlayers);
    this.props.socketClientInterface.registerCallbackPlayerLeaveGame(this.decrementPlayers);
  }

  incrementPlayers(roomId) {
    if (this.props.game.room_id === roomId) {
      this.setState({ numPlayers: this.state.numPlayers + 1 });
    }
  }

  decrementPlayers(roomId) {
    if (this.props.game.room_id === roomId) {
      this.setState({ numPlayers: this.state.numPlayers - 1 });
    }
  }

  handleClick() {
    this.props.joinGame(this.props.game.room_id);
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Room Code: {this.props.game.room_id}</p>
        <p>Hosted By: {this.props.game.host_username}</p>
        <p># Questions: {this.props.game.num_questions}</p>
        <p>Max Players: {this.props.game.max_players}</p>
        <p># Players: {this.state.numPlayers}</p>
      </div>
    );
  }
}

GameListItem.propTypes = propTypes;

export default GameListItem;