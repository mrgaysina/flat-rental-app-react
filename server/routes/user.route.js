/* eslint-disable max-len */
const route = require('express').Router();
const { sign } = require('jsonwebtoken');
const { hash, compare } = require('bcryptjs');
// hash(password, 10)
const { verify } = require('jsonwebtoken');
const { isAuth } = require('../src/isAuth');

const {
  createAccessToken,
  createRefreshToken,
  sendRefreshToken,
  sendAccessToken,
} = require('../src/tokens');

const { User, Token } = require('../db/models');

route.post('/signup', async (req, res) => {
  console.log('req.body from signup ==>', req.body);
  const { name, email, password } = req.body;
  const userCheck = await User.findOne({ where: { email }, raw: true });
  if (userCheck) {
    res.send('Такой пользователь уже есть');
  } else {
    const user = await User.create({ username: name, email, password });
    res.json({ name: user.username, email: user.email, id: user.id });
  }
});
route.post('/login', async (req, res) => {
  // console.log('req.body from login ==>', req.body);
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email }, raw: true });
  // console.log('user from login', user);

  if (user) {
    if (password === user.password) {
      // 3. Create Refresh- and Accesstoken
      const accesstoken = createAccessToken(user.id);
      // console.log('accesstoken from login ==>', accesstoken);
      const refreshtoken = createRefreshToken(user.id);

      console.log('refreshtoken from login ==>', refreshtoken);
      // 4. Store Refreshtoken with user in "db"
      // Could also use different version numbers instead.
      // Then just increase the version number on the revoke endpoint
      const token = await Token.findOne({ where: { userId: user.id } });
      if (token) {
        await Token.update({ refreshToken: refreshtoken }, { where: { userId: user.id } });
      } else {
        await Token.create({ refreshToken: refreshtoken, userId: user.id });
      }
      // 5. Send token. Refreshtoken as a cookie and accesstoken as a regular response
      sendRefreshToken(res, refreshtoken);
      console.log('from login: req.cookies ===>', req.cookies);
      res.json({
        email: user.email, name: user.username, id: user.id, accesstoken,
      });
      // res.end();
    } else {
      return res.send('wrong password');
    }
  } else {
    return res.send('wrong email');
  }
});

route.post('/logout', async (req, res) => {
  // console.log('req.body from logout', req.body);
  const { user } = req.body;
  // Logic here for also remove refreshtoken from db
  await Token.destroy({ where: { userId: user.id } });
  res.clearCookie('refreshtoken', { path: '/refresh_token' });
  return res.send({
    message: 'Logged out',
  });
});

route.post('/protected', async (req, res) => {
  // console.log('req.headers from protected', req.headers);
  try {
    const userId = isAuth(req);
    // console.log('userId from protected', userId);
    if (userId !== null) {
      res.send({
        message: 'This is protected data.',
      });
    }
  } catch (err) {
    res.send(err);
  }
});
route.post('/refresh_token', async (req, res) => {
  const token = req.cookies.refreshtoken;
  console.log('token from refresh_token ==>', token);
  // If we don't have a token in our request
  if (!token) return res.send({ accesstoken: '' });
  // We have a token, let's verify it!
  let payload = null;
  try {
    payload = verify(token, process.env.REFRESH_TOKEN_SECRET);
    // console.log('payload from refresh', payload);
    // token is valid, check if user exist
    const user = await User.findOne({ where: { id: payload.userId }, include: Token, raw: true });
    console.log('user from refresh_token', user);
    if (!user) {
      console.log('если не юзер');
      return res.send({ accesstoken: '' });
    }
    // user exist, check if refreshtoken exist on user
    if (user['Token.refreshToken'] !== token) {
      console.log('если не совпадает токен');
      return res.send({ accesstoken: '' });
    } // найти токен в связанной модели
    // token exist, create new Refresh- and accesstoken
    const accesstoken = createAccessToken(user.id);
    const refreshtoken = createRefreshToken(user.id);
    // update refreshtoken on user in db
    // Could have different versions instead!
    await Token.update({ refreshToken: refreshtoken }, { where: { userId: user.id } });
    // All good to go, send new refreshtoken and accesstoken
    console.log('113 строка ', {
      accesstoken, email: user.email, name: user.username, id: user.id,
    });
    sendRefreshToken(res, refreshtoken);
    return res.send({
      accesstoken, email: user.email, name: user.username, id: user.id,
    });
  } catch (err) {
    return res.send({ accesstoken: '' });
  }
});

module.exports = route;
