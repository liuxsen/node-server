import userModel from '../../models/user'
import jwt from 'jsonwebtoken'
import config from '../../config/default'
import md5 from 'md5'

const generageToken = function generageToken(id){
  const token = jwt.sign({ _id: id }, config.token.secret, config.token.expiresIn);
  return token;
}


class User {
  constructor(){
    this.isLogUp = this.isLogUp.bind(this);
    this.add = this.add.bind(this);
    this.findUser = this.findUser.bind(this);
    this.test = 1;
    this.modifyUser = this.modifyUser.bind(this);
    // this.getId = this.getId.bind(this);
    // this.generageToken = this.generageToken.bind(this);
  }
  getId(token){
    const info = jwt.verify(token, config.token.secret);
    return info;
  }
  
  async findUser(phone){
    return await userModel.findOne({ user_phone: phone});
  }
  async login(req,res,next){
    console.log(req.body)
    const clientUser = req.body;
    const phone = clientUser.user_phone;
    console.log(phone)
    const pwd = md5(clientUser.user_password);
    const user = await userModel.findOne({ user_phone: phone });
    console.log(user);
    if(user){
      if(user.user_password === pwd){
        const token = generageToken(user._id);
        console.log(token);
        res.json({
          uid: user._id,
          token: token
        })
      }else{
        res.json({
          error: 1005,
          msg: '密码错误'
        })
      }
    }else{
      res.json({
        error: 1004,
        msg: '用户没有注册'
      })
    }
  }
  // 更新user
  async modifyUser(req,res,next){
    console.log('-----')
    console.log(this);

    const newUser = req.body;
    const uid = req.params.uid;
    console.log(uid);
    if(uid){
      try {
        const user = await userModel.findOne({ _id: uid });
        console.log(user);
        user.user_name = newUser.user_name;
        user.user_avatar = newUser.user_avatar;
        user.user_age = newUser.user_age;
        user.user_sign_up_time = newUser.user_sign_up_time;
        user.user_city = newUser.user_city;
        user.user_password = md5(newUser.user_password);
        user.user_job = newUser.user_job;
        user.user_one_word = newUser.user_one_word;
        user.user_place = newUser.user_place;
        if (newUser.user_education){
          user.user_education = JSON.parse(newUser.user_education);
        }
        
        const result = await user.save();
        res.send({
          error: 0
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
  // 数据库是否有这个人
  async isLogUp(phone) {
    const haveUser = await userModel.findOne({ user_phone: phone });
    if (haveUser) {
      return true;
    } else {
      return false;
    }
  }

  async add(req,res,next){
    const user = req.body;
    const phone = req.body.user_phone;
    const userPwd = req.body.user_password;
    console.log(phone)
    if (phone && userPwd){
      const isLogup = await this.isLogUp(phone);
      if (!isLogup){
        if (user.user_education){
          user.user_education = JSON.parse(user.user_education);
        }
        user.user_password = md5(user.user_password);
        const newUser = new userModel(user);
        const back = await newUser.save();
        const token = jwt.sign({_id: back._id}, config.token.secret, config.token.expiresIn);
        console.log(token);
        res.send({
          token: token,
          uid: back._id,
          error: 0,
          msg: '注册成功!'
        });
      }else{
        res.send({
          error: 500,
          msg: '已经注册'
        })
      }
    }else{
      res.send({
        error: 1000,
        msg: '没有手机号码，或者密码'
      })
    }    
    
  }
}

export default new User();