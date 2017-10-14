import React from 'react';
import PropTypes from 'prop-types';
import AnswerListEntry from './AnswerListEntry';

const propTypes = {
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  correctAns: PropTypes.string.isRequired,
};

const AnswerList = ({ answers, correctAns }) => (
  <div className="card col-sm-9 presenterQuestionCard">
    <div className="list-group list-group-flush">
      {answers.map(answer => (
        <AnswerListEntry
          key={answer}
          answer={answer}
          selected={answer === correctAns}
        />
      ))}
    </div>
  </div>
);

AnswerList.propTypes = propTypes;

export default AnswerList;
