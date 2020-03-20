import React from 'react';
import { NavLink } from 'react-router-dom';

import { I18Y } from '../../../../core/constants';

import style from '../getPerson.module.css';

const getElemen = (context, items) => context.map((elem) => <div><NavLink to={`${I18Y.path[0]}${elem}`} key={elem.toString()} className={style.item}>{items[elem].name}</NavLink></div>);

export default getElemen;
