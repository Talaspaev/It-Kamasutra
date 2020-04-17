import ACTION_TYPES from '../actionTypes';

const initailState = {
  dialogsData: [
    {
      id: 1, name: 'Dymuch', message: 'Lorem, ipsum dolor sit amet', src: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Dmitry_Medvedev_2016.jpg',
    },
    {
      id: 2, name: 'Andrey', message: 'An praesentium tempore atque evenietdrey', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3ouc4dEwInAn-fzd0par_bEkPsHUxzx4J-nXg1sk-SC4ABqAt',
    },
    {
      id: 3, name: 'Natalya', message: 'consectetur adipisicing elit. Officiis error', src: 'https://images11.cosmopolitan.ru/upload/img_cache/7b3/7b3b3da698f08bee6e9e7402053f6df5_ce_750x497x0x129_fitted_740x0.jpg',
    },
    {
      id: 4, name: 'Igor', message: 'architecto Placeat inventore officiis odit ipsa quibusdam', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNtwQUeVJ4vImAb6HiD2qFiEXchzJJKPDWUU96D33THFtBskw1',
    },
    {
      id: 5, name: 'Adil', message: 'adipisicing elit. Officiis error', src: 'https://img.gazeta.ru/files3/784/11560784/skrskr2-pic905-895x505-4108.jpg',
    }],
  newMessage: 'Say hi to Scriptone',
};

const dialogsReducer = (state = initailState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_NEW_MESSAGE: {
      const messageData = {
        id: 5,
        name: 'Adil',
        message: state.newMessage,
        src: 'https://img.gazeta.ru/files3/784/11560784/skrskr2-pic905-895x505-4108.jpg',

      };
      state.dialogsData.push(messageData);
      state.newMessage = '';
      return state;
    }
    case ACTION_TYPES.UPDATE_NEW_MESSAGE: state.newMessage = action.payload;
      return state;
    default: return state;
  }
};

export default dialogsReducer;
