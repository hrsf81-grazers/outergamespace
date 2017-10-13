import React from 'react';
import PropTypes from 'prop-types';
import GameListItem from './GameListItem';
import SocketClientInterface from '../../../../socket/socketClientInterface';

const propTypes = {
  createGame: PropTypes.func.isRequired,
  joinGame: PropTypes.func.isRequired,
  socketClientInterface: PropTypes.instanceOf(SocketClientInterface).isRequired
};

class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };

    this.addGame = this.addGame.bind(this);
  }

  componentDidMount() {
    this.props.socketClientInterface.listenForHostEvents();
    this.props.socketClientInterface.registerCallbackHostNewGame(this.addGame);

    fetch('/games')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          games: data
        });
      })
      .catch(console.error);
  }

  componentWillUnmount() {
    this.props.socketClientInterface.removeListenersForHostEvents();
  }

  addGame(roomId) {
    fetch(`/game/${roomId}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ games: this.state.games.concat(data[0]) });
      })
      .catch(console.error);
  }

  render() {
    const gameListItems = this.state.games.map(game =>
      (<GameListItem
        key={game.room_id}
        game={game}
        joinGame={this.props.joinGame}
        socketClientInterface={this.props.socketClientInterface}
      />)
    );

    return (
      <div>
        <ul>{gameListItems}</ul>
        <div>
          <button className="btn btn-light ml-1 mr-3" onClick={this.props.createGame}>Create Game</button>
        </div>
      </div>
    );
  }
}

GameList.propTypes = propTypes;

export default GameList;
