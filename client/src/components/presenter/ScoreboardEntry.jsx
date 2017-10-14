import React from 'react';

const ScoreboardEntry = (props) => {
  return (
    <div className="list-group-item">
      {`${player.username} - ${player.score}`}
    </div>
  );
};

export default ScoreboardEntry;