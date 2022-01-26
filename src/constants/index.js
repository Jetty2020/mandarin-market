export const SERVER_BASE_URL = 'https://api.mandarin.cf';

export const routes = {
  home: '/',
  login: '/login',
  ownProfile: '/profile',
  profile: '/profile/:accountname',
  chat: '/chat',
  chatRoom: '/chat/:id',
  loginEmail: '/login/email',
  join: '/join',
  upload: '/upload',
  uploadEdit: '/upload/:postid',
  following: '/follow/:accountname/following',
  follower: '/follow/:accountname/follower',
  product: '/product',
  productEdit: '/product/:productid',
  edit: '/account/edit',
  postDetail: '/postdetail/:postid',
  search: '/search',
};
