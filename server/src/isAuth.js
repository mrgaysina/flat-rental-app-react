const { verify } = require('jsonwebtoken');

const isAuth = (req) => {
  const auth = req.headers.cookie;
  console.log('auth  ', auth);
  if (!auth) throw new Error('You need to login.');
  // Based on 'refreshtoken=ksfljrewori384328289398432'
  const token = auth.split('=')[1];
  // console.log('token from isAuth  ', token);
  let payload = null;
  payload = verify(token, process.env.REFRESH_TOKEN_SECRET);
  // console.log('payload from isAuth', payload);
  const { userId } = payload;
  // console.log('userId from isAuth', userId);
  return userId;
};

module.exports = {
  isAuth,
};
