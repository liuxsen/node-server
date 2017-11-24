import jwt from 'jsonwebtoken'
import config from '../config/default'

class base {
  constructor(){
    this.name = '继承函数';
    
  }
  // 判断token的合法性
  async checkToken(req,res,next){
    const token = req.headers.token;
    if(token){
      try {
        const info = await jwt.verify(token, config.token.secret);
        console.log(info)
        req.user_id = info._id;
        return info;
      } catch (error) {
        res.send({
          error: 1006,
          msg: '没有登录，或者token失效'
        })
      }
    }
    res.send({
      error: 1006,
      msg: '没有登录，或者token失效'
    })
  }
}

export default base;