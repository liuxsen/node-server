'use strict';
module.exports = {
  port: 8001,
  url: 'mongodb://localhost:27017/zhihu',
  session: {
    name: 'SID',
    secret: 'SID',
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 365 * 24 * 60 * 60 * 1000,
    }
  },
  token: {
    secret: 'secret', //生成token的密码
    expiresIn: { expiresIn: '7d' }  //token最大生存时间
  }
}