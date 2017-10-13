import React from 'react';

const LeaderboardEntry = props => (
  <li className="list-group-item bg-transparent leaderboardText">
    <span>{`${props.index + 1}. ${props.user.name}   ${props.user.total_points}pts`}</span>
    <span className="badge-dark">{props.user.games_played}</span>
  </li>
);

export default LeaderboardEntry;
