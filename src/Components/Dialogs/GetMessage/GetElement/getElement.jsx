import React from 'react';

import style from '../getMessage.module.css';

const getElemen = (context) => context.map((elem, index) => <div key={index.toString()} className={style.item}>{elem}</div>);

export default getElemen;
