import React from 'react';

import style from './siteBar.module.css';

const friends = [
  { id: 1, name: 'Dymuch', src: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Dmitry_Medvedev_2016.jpg' },
  { id: 2, name: 'Natalya', src: 'https://images11.cosmopolitan.ru/upload/img_cache/7b3/7b3b3da698f08bee6e9e7402053f6df5_ce_750x497x0x129_fitted_740x0.jpg' },
  { id: 3, name: 'Adil', src: 'https://img.gazeta.ru/files3/784/11560784/skrskr2-pic905-895x505-4108.jpg' }];

const SiteBar = () => {
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
