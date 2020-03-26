import React from 'react';

import style from './siteBar.module.css';

const SiteBar = (props) => {
  const { friends } = props.state;
  const friendsArray = Object.values(friends);
  const routeWrapper = ({ id, name, src }) => ((
    <div key={id} className={style.container}>
      <img className={style.img} src={src} alt="alt" />
      <span>{name}</span>
    </div>
  ));

  const route = friendsArray.map(routeWrapper);

  return (
    <div className={style.siteBar}>
      <div><h3>Friends</h3></div>
      <div className={style.wrapper}>{route}</div>
    </div>

  );
};

export default SiteBar;
