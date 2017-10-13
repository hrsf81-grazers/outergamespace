import React from 'react';
import LeaderboardEntry from './LeaderboardEntry';

const Leaderboard = props => (
  <div className={`col-sm-3 leaderboard mr-3 ${props.leaderboardRender}`}>
    <ol className="list-group">
      {props.users.sort((a, b) => b.total_points - a.total_points)
        .map((user, index) => <LeaderboardEntry key={user.id} user={user} index={index}/>)}
    </ol>
  </div>
);

export default Leaderboard;
