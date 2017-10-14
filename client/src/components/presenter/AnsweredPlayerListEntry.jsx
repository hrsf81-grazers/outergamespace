import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  player: PropTypes.shape({
    username: PropTypes.string,
    score: PropTypes.number,
    answered: PropTypes.bool,
  })
    .isRequired,
};

const AnsweredPlayerListEntry = ({ player: { username, answered } }) => (
  <div className={`list-group-item presenterText ${!answered && 'unanswered'}`} >{username}</div>
);

AnsweredPlayerListEntry.propTypes = propTypes;

export default AnsweredPlayerListEntry;
