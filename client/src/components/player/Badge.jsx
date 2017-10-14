import React from 'react';

const badgeKey = {
  onFire: <img src="../../flame-icon-transparent.png" alt="flame-icon" className="user-badge"/>,
  hacker:<img src="../../hacker.png" alt="hacker-icon" className="user-badge"/>,
  grazer:<img src="../../cow-icon.png" alt="cow-icon" className="user-badge"/>,
  newb:<img src="../../newb-icon.png" alt="newb-icon" className="user-badge"/>,
  turd: <img src="../../poop-emoji.png" alt="turd-icon" className="user-badge"/>,
  champ: <img src="../../winner_icon.png" alt="winner-icon" className="user-badge"/>
}

const Badge = (props) => {
  return (
    <span className="float-right" key={props.index}>{badgeKey[props.badge]}</span>
  );
}

export default Badge;