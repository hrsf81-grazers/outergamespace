import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  answer: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

const AnswerListEntry = ({ answer, selected }) => (
  <div className={`list-group-item ${selected && 'selected'}`} >
    <span className="answer presenterText">
      {answer}‎
      {
      selected
        ? <span className="checkmark-placeholder checkmark presenterText" >✔</span>
        : <span className="checkmark-placeholder" />
      }
    </span>
  </div>
);

AnswerListEntry.propTypes = propTypes;

export default AnswerListEntry;
