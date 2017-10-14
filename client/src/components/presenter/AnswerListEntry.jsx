import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  answer: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

const AnswerListEntry = ({ answer, selected }) => (
  <div className={`answer list-item-group ${selected && 'selected'}`} >
    <span className="answerLine">
      {answer}‎
      {
      selected
        ? <span className="checkmark-placeholder checkmark" >✔</span>
        : <span className="checkmark-placeholder" />
      }
    </span>
  </div>
);

AnswerListEntry.propTypes = propTypes;

export default AnswerListEntry;
