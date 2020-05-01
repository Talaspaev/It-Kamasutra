import React from 'react';

import Profile from '../../Profile/Profile';
import DialogsContainer from '../../Dialogs/dialogsContainer';
import UsersContainer from '../../Users/usersContainer';
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
    id: 3, path: '/users', name: 'Users', component: () => <UsersContainer />,
  },
  {
    id: 4, path: '/news', name: 'News', component: News,
  },
  {
    id: 5, path: '/music', name: 'Music', component: Music,
  },
  {
    id: 4, path: '/settings', name: 'Settings', component: Settings,
  },
];

export default stateRoute;
