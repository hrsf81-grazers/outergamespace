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
      <div>
        <p>
          <button className="btn btn-outline-light ml-1 mt-3 leaderboardText" type="button" data-toggle="collapse" data-target="#gameInformation" aria-expanded="false" aria-controls="gameInformation">
            {this.props.title}'s Game
          </button>
        </p>
      <div className="collapse ml-1 mb-3" id="gameInformation">
        <div className="card list-group list-group-flush">
         <p className="list-group-item leaderboardText"># Questions: {this.props.game.num_questions}</p>
         <p className="list-group-item leaderboardText">Max Players: {this.props.game.max_players}</p>
         <p className="list-group-item leaderboardText">Number of Players: {this.props.game.num_players}</p>
         <p className="list-group-item leaderboardText">Trivia Topic: {this.props.game.category}</p>
         <p className="list-group-item leaderboardText">Game Difficulty: {this.props.game.difficulty}</p>
         <button onClick={this.props.click} className="list-group-item joinButton leaderboardText">Join Game!</button>
        </div>
      </div>
      </div>
    )
  }

}

export default DropDown;

// render() {
//   return (
//     <div className={'dropdown-container'}>
//       <div className={'dropdown-display'} onClick={this.toggle}>
//         <p>{this.props.title}'s Game</p>
//       </div>
//       <div
//         className={'dropdown-list' + (this.state.listVisible ? "" : " hide")}
//         onClick={this.props.click}
//       >
//         <p>Room Code: {this.props.game.room_id}</p>
//         <p># Questions: {this.props.game.num_questions}</p>
//         <p>Max Players: {this.props.game.max_players}</p>
//         <p># Players: {this.state.numPlayers}</p>
//       </div>
//     </div>
//   );
// }
