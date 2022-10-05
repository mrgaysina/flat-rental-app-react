/* eslint-disable max-len */
const route = require('express').Router();
const { hash, compare } = require('bcryptjs');
// hash(password, 10)
const cookieParser = require('cookie-parser');
const { verify } = require('jsonwebtoken');
const { isAuth } = require('../isAuth');

const {
  createAccessToken,
  createRefreshToken,
  sendRefreshToken,
  sendAccessToken,
} = require('../tokens');

const { User, Token } = require('../../db/models');

route.post('/auth/signup', async (req, res) => {
  // console.log(req.body);
  const { name, email, password } = req.body;
  const userCheck = await User.findOne({ where: { email }, raw: true });
  if (userCheck) {
    res.send('Такой пользователь уже есть');
  } else {
    const user = await User.create({ username: name, email, password });
    res.json({ name: user.username, id: user.id });
  }
});
route.post('/auth/signin', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email }, raw: true });

  if (user) {
    if (password === user.password) {
      // 3. Create Refresh- and Accesstoken
      const accesstoken = createAccessToken(user.id);
      const refreshtoken = createRefreshToken(user.id);
      // 4. Store Refreshtoken with user in "db"
      // Could also use different version numbers instead.
      // Then just increase the version number on the revoke endpoint
      await Token.create({ refreshToken: refreshtoken, userId: user.id });
      // 5. Send token. Refreshtoken as a cookie and accesstoken as a regular response
      sendRefreshToken(res, refreshtoken);
      sendAccessToken(req, res, accesstoken);
    } else {
      return res.send('wrong password');
    }
  } else {
    return res.send('wrong email');
  }
});

route.get('/auth/signout', (req, res) => {
  res.clearCookie('refreshtoken', { path: '/refresh_token' });
  // Logic here for also remove refreshtoken from db
  return res.send({
    message: 'Logged out',
  });
});

route.post('/protected', async (req, res) => {
  try {
    const userId = isAuth(req);
    if (userId !== null) {
      res.send({
        data: 'This is protected data.',
      });
    }
  } catch (err) {
    res.send({
      error: `${err.message}`,
    });
  }
});
route.post('/refresh_token', async (req, res) => {
  const token = req.cookies.refreshtoken;
  // If we don't have a token in our request
  if (!token) return res.send({ accesstoken: '' });
  // We have a token, let's verify it!
  let payload = null;
  try {
    payload = verify(token, process.env.REFRESH_TOKEN_SECRET);
    // token is valid, check if user exist
    const user = await User.findByPK(payload.userId);
    if (!user) return res.send({ accesstoken: '' });
    // user exist, check if refreshtoken exist on user
    if (user.refreshtoken !== token) { return res.send({ accesstoken: '' }); } // ????? найти токен в связанной модели
    // token exist, create new Refresh- and accesstoken
    const accesstoken = createAccessToken(user.id);
    const refreshtoken = createRefreshToken(user.id);
    // update refreshtoken on user in db
    // Could have different versions instead!
    await Token.create({ refreshToken: refreshtoken, userId: user.id });
    // All good to go, send new refreshtoken and accesstoken
    sendRefreshToken(res, refreshtoken);
    return res.send({ accesstoken });
  } catch (err) {
    return res.send({ accesstoken: '' });
  }
});

module.exports = route;
