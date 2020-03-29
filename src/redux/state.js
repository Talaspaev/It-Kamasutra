const state = {
  dialogsPages: {
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
  },
  ProfilePages: {
    profileData: [
      {
        id: 1, like: 13, message: 'HI EE',
      },
      {
        id: 2, like: 11, message: 'whar are you doing',
      },
      {
        id: 3, like: 8, message: 'adipisicing elit. Officiis error',
      },
    ],
  },

  friends: [
    { id: 1, name: 'Dymuch', src: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Dmitry_Medvedev_2016.jpg' },
    { id: 2, name: 'Natalya', src: 'https://images11.cosmopolitan.ru/upload/img_cache/7b3/7b3b3da698f08bee6e9e7402053f6df5_ce_750x497x0x129_fitted_740x0.jpg' },
    { id: 3, name: 'Adil', src: 'https://img.gazeta.ru/files3/784/11560784/skrskr2-pic905-895x505-4108.jpg' }],
};

const textAreaFunc = (NewPost) => {
  const PostData = {
    id: 0,
    like: 0,
    message: NewPost,
  };
  state.ProfilePages.profileData.push(PostData);
};

export { state, textAreaFunc };
