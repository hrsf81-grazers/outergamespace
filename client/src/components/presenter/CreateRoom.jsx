import React from 'react';
import PropTypes from 'prop-types';
import SocketClientInterface from '../../../../socket/socketClientInterface';
// import io from '../../../../socket/socketClientInterface';

const DEFAULT_CONFIG = {
  noOfQuestions: '10',
  timePerQuestion: '20',
  maxPlayers: '6',
  difficulty: 'any',
  category: 'any'
};

const propTypes = {
  createRoom: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  socketClientInterface: PropTypes.instanceOf(SocketClientInterface).isRequired,
};

const difficultyLevels = [
  'all',
  'easy',
  'medium',
  'hard'
];

class CreateRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({ categories: [{ id: -1, name: 'any' }] }, DEFAULT_CONFIG, { errMsg: '' });

    /* METHOD BINDING */
    this.onChangeInput = this.onChangeInput.bind(this);
    this.getConfig = this.getConfig.bind(this);
    this.createRoom = this.createRoom.bind(this);
    this.getConfig = this.getConfig.bind(this);
    this.getConfigObj = this.getConfigObj.bind(this);
  }

  componentDidMount() {
    fetch('/categories')
      .then(res => res.json())
      .then((categories) => {
        this.setState({
          categories: this.state.categories.concat(categories)
        });
      })
      .catch(console.error);
  }

  onChangeInput(event, stateName) {
    const newState = event.target.value;
    if (newState === ''
        || !isNaN(newState)
        || stateName === 'difficulty'
        || stateName === 'category') {
      this.setState({
        [stateName]: newState,
      });
    }
  }

  getConfig(configName) {
    let val = this.state[configName];
    if (!val) {
      val = DEFAULT_CONFIG[configName];
    }
    return parseInt(val, 10);
  }

  getConfigObj() {
    return {
      noOfQuestions: this.getConfig('noOfQuestions'),
      timePerQuestion: this.getConfig('timePerQuestion'),
      maxPlayers: this.getConfig('maxPlayers'),
      difficulty: this.state.difficulty
    };
  }

  createRoom() {
    const gameConfig = this.getConfigObj();
    this.props.socketClientInterface.connection.emit('createRoom', this.props.username, gameConfig, (errMsg, roomId) => {
      if (errMsg) {
        console.error(errMsg);
        this.setState({ errMsg });
      } else {
        this.props.createRoom(roomId, gameConfig);
      }
    });
  }

  render() {
    const { noOfQuestions, timePerQuestion, maxPlayers, difficulty, errMsg } = this.state;
    const difficultyOptions = difficultyLevels.map(level =>
      <option key={level} value={level}>{level}</option>
    );
    const categories = this.state.categories.map(category =>
      <option key={category.id} value={category}>{category.name}</option>
    );
    return (
      <div className="container-fluid gameBackground">
        <div className="row align-items-center">
          <div className={`card col-sm-5 createRoom animated slideInLeft`}>
            <div className="card-body">
              <div className="card-title presenterText createTitle">Game Settings</div>

              <div className="form-group row">
                <div className="input-group-addon presenterText ml-3">No of Questions</div>
                <input
                  type="text"
                  value={noOfQuestions}
                  placeholder="10"
                  onChange={e => this.onChangeInput(e, 'noOfQuestions')}>
                </input>
              </div>

              <div className="form-group row">
                <div className="input-group-addon presenterText ml-3">Category</div>
                <select
                  onChange={e => this.onChangeInput(e, 'category')}>
                  {categories}
                </select>
              </div>

              <div className="form-group row">
                <div className="input-group-addon presenterText ml-3">Difficulty</div>
                <select
                  onChange={e => this.onChangeInput(e, 'difficulty')}>
                  {difficultyOptions}
                </select>
              </div>

              <div className="form-group row">
                <div className="input-group-addon presenterText ml-3">Time per Question (Seconds)</div>
                <input
                  type="text"
                  value={timePerQuestion}
                  placeholder="20"
                  onChange={e => this.onChangeInput(e, 'timePerQuestion')}>
                </input>
              </div>

              <div className="form-group row">
                <div className="input-group-addon presenterText ml-3">Maximum No of Players</div>
                <input
                  type="text"
                  value={maxPlayers}
                  placeholder="6"
                  onChange={e => this.onChangeInput(e, 'maxPlayers')}>
                </input>
              </div>

              <button onClick={this.createRoom} className="btn btn-transparent-light presenterText">Create Room</button>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateRoom.propTypes = propTypes;

export default CreateRoom;

// render() {
//   const { noOfQuestions, timePerQuestion, maxPlayers, errMsg } = this.state;
//   return (
//     <div className="screen">
//       <div className="screen-top">Game Settings</div>

//       <div className="screen-middle screen-bordered" >
//         <div className="table-body">
//           <div className="table-col">
//             <div className="table-row">No. of Questions</div>
//             <div className="table-row">Time per Question (Seconds)</div>
//             <div className="table-row">Maximum No. of Players</div>
//           </div>

//           <div className="table-col table-input">
//             <div className="table-row">
//               <input
//                 type="text"
//                 value={noOfQuestions}
//                 placeholder="10"
//                 onChange={e => this.onChangeInput(e, 'noOfQuestions')}
//               />
//             </div>

//             <div className="table-row">
//               <input
//                 type="text"
//                 value={timePerQuestion}
//                 placeholder="15"
//                 onChange={e => this.onChangeInput(e, 'timePerQuestion')}
//               />
//             </div>

//             <div className="table-row">
//               <input
//                 type="text"
//                 value={maxPlayers}
//                 placeholder="6"
//                 onChange={e => this.onChangeInput(e, 'maxPlayers')}
//               />
//             </div>
//           </div>
//         </div>

//         {errMsg && <div className="table-footer err-msg">{errMsg}</div>}
//       </div>

//       <div className="screen-bottom">
//         <button onClick={this.createRoom} >Create Room</button>
//       </div>
//     </div>
//   );
// }
