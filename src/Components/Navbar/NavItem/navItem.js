import React from 'react';

import Profile from '../../Profile/Profile';
import DialogsContainer from '../../Dialogs/dialogsContainer';
import News from '../../News/news';
import Music from '../../Music/music';
import Settings from '../../Settings/settings';


const stateRoute = [
  {
    id: 0, path: '/profile', name: 'Profile', component: Profile,
  },
  {
    id: 1, path: '/dialogs', name: 'Dialogs', component: () => <DialogsContainer />,
  },
  {
    id: 2, path: '/news', name: 'News', component: News,
  },
  {
    id: 3, path: '/music', name: 'Music', component: Music,
  },
  {
    id: 4, path: '/settings', name: 'Settings', component: Settings,
  },
];

export default stateRoute;
