import React from 'react';
import PropTypes from 'prop-types';

const DANGER_TIME = 5;
const WARNING_TIME = 10;

const propTypes = {
  seconds: PropTypes.number.isRequired,
  counting: PropTypes.bool.isRequired,
};

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingTime: props.seconds,
    };

    /* METHOD BINDING */
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.decrementTimer = this.decrementTimer.bind(this);
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer() {
    this.interval = setInterval(this.decrementTimer, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
  }

  decrementTimer() {
    this.setState((prevState) => {
      // stop timer when only 1 second remains, or when correct answer is shown
      if (prevState.remainingTime === 1 || !this.props.counting) {
        this.stopTimer();
      }
      return ({
        remainingTime: prevState.remainingTime - 1,
      });
    });
  }

  render() {
    const { remainingTime } = this.state;
    let color = '';
    if (remainingTime <= DANGER_TIME) {
      color = 'danger';
    } else if (remainingTime <= WARNING_TIME) {
      color = 'warning';
    }
    return <div className={`countdown ${color}`} >{this.state.remainingTime}</div>;
  }
}

Timer.propTypes = propTypes;

export default Timer;
