import React from 'react';
import Badge from './Badge';


const LeaderboardEntry = props => (
  <li className="list-group-item bg-transparent leaderboardText">
    <span>{`${props.index + 1}. ${props.user.name}   ${props.user.total_points}pts`}</span>
    <span className="badge-dark float-right">{props.user.games_played}</span>
    {props.user.badge.split(',').map((badge, index) => {
      return <Badge badge={badge} index={index}/>
    })}
  </li>
);

export default LeaderboardEntry;