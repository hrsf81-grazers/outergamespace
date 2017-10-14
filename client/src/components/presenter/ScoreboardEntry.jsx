import React from 'react';

const ScoreboardEntry = (props) => {
  return (
    <div className="list-group-item presenterText">
      {`${props.player.username} - ${props.player.score}`}
    </div>
  );
};

export default ScoreboardEntry;