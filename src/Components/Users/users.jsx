import React from 'react';

import { I18Y } from '../../constants';

import style from './users.module.css';

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([{
      id: 1, followed: true, fullname: 'Dymuch', status: 'Lorem, ipsum', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Dmitry_Medvedev_2016.jpg', location: { City: 'Minsk', Country: 'Belarus' },
    },
    {
      id: 2, followed: false, fullname: 'Andrey', status: 'An praesentium ', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3ouc4dEwInAn-fzd0par_bEkPsHUxzx4J-nXg1sk-SC4ABqAt', location: { City: 'Minsk', Country: 'Belarus' },
    },
    {
      id: 3, followed: false, fullname: 'Natalya', status: 'consectetur ', photoUrl: 'https://images11.cosmopolitan.ru/upload/img_cache/7b3/7b3b3da698f08bee6e9e7402053f6df5_ce_750x497x0x129_fitted_740x0.jpg', location: { City: 'Minsk', Country: 'Belarus' },
    },
    {
      id: 4, followed: true, fullname: 'Igor', status: 'architecto ', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNtwQUeVJ4vImAb6HiD2qFiEXchzJJKPDWUU96D33THFtBskw1', location: { City: 'Minsk', Country: 'Belarus' },
    },
    {
      id: 5, followed: true, fullname: 'Adil', status: 'adipisicing elit', photoUrl: 'https://img.gazeta.ru/files3/784/11560784/skrskr2-pic905-895x505-4108.jpg', location: { City: 'Minsk', Country: 'Belarus' },
    }]);
  }
  const usersItem = props.users.map((item) => (
    <div key={item.id} className={style.item}>

      <div>
        <img src={item.photoUrl} alt="" className={style.img} />
        {item.followed ? <button type="button" onClick={() => { props.unfollowUser(item.id); }}>{I18Y.fl}</button>
          : <button type="button" onClick={() => { props.followUser(item.id); }}>{I18Y.unfl}</button>}
      </div>
      <div>
        <div>
          {item.fullname}
          {item.status}
        </div>
        <div>
          {item.location.city}
          {item.location.Country}
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      {usersItem}
    </div>

  );
};

export default Users;
