import React from 'react';
import PropTypes from 'prop-types';
import SocketClientInterface from '../../../../socket/socketClientInterface';
// import io from '../../../../socket/socketClientInterface';

const DEFAULT_CONFIG = {
  noOfQuestions: '10',
  timePerQuestion: '20',
  maxPlayers: '6',
};

const propTypes = {
  createRoom: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  socketClientInterface: PropTypes.instanceOf(SocketClientInterface).isRequired,
};

class CreateRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, DEFAULT_CONFIG, { errMsg: '' });

    /* METHOD BINDING */
    this.onChangeInput = this.onChangeInput.bind(this);
    this.getConfig = this.getConfig.bind(this);
    this.createRoom = this.createRoom.bind(this);
    this.getConfig = this.getConfig.bind(this);
    this.getConfigObj = this.getConfigObj.bind(this);
  }

  onChangeInput(event, stateName) {
    const newState = event.target.value;
    if (newState === '' || !isNaN(newState)) {
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
    };
  }

  createRoom() {
    const gameConfig = this.getConfigObj();
    this.props.socketClientInterface.connection.emit('createRoom', this.props.username, gameConfig, (errMsg, roomId) => {
      if (errMsg) {
        this.setState({ errMsg });
      } else {
        this.props.createRoom(roomId, gameConfig);
      }
    });
  }

  render() {
    const { noOfQuestions, timePerQuestion, maxPlayers, errMsg } = this.state;
    return (
      <div className="container-fluid">
        <div className="card">
          <div className="card-body">
            <div className="card-title">Game Settings</div>
  
              <div class="form-group row">
                <div class="input-group-addon">No of Questions</div>
                <input                   
                  type="text"
                  value={noOfQuestions}
                  placeholder="10"
                  onChange={e => this.onChangeInput(e, 'noOfQuestions')}>
                </input>
              </div>
  
              <div class="form-group row">
                <div class="input-group-addon">Time per Question (Seconds)</div>
                <input                   
                  type="text"
                  value={timePerQuestion}
                  placeholder="20"
                  onChange={e => this.onChangeInput(e, 'timePerQuestion')}>
                </input>
              </div>
  
              <div class="form-group row">
                <div class="input-group-addon">Maximum No of Players</div>
                <input                   
                  type="text"
                  value={maxPlayers}
                  placeholder="6"
                  onChange={e => this.onChangeInput(e, 'maxPlayers')}>
                </input>
              </div>
  
          </div>
        </div>
      </div>
    );
  }
}

CreateRoom.propTypes = propTypes;

export default CreateRoom;

