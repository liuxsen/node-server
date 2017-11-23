import userModel from '../models/user'
import jwt from 'jsonwebtoken'
import config from '../config/default'

class User {
  constructor(){
    this.isLogUp = this.isLogUp.bind(this);
    this.add = this.add.bind(this);
  }
  
  async findUser(req,res,next){

  }
  // 更新user
  async modifyUser(req,res,next){
    const newUser = req.body;
    const uid = req.params.uid;
    if(uid){
      try {
        const user = await userModel.findOne({ _id: uid });
        console.log(user);
        user.user_name = newUser.user_name;
        user.user_avatar = newUser.user_avatar;
        user.user_age = newUser.user_age;
        user.user_sign_up_time = newUser.user_sign_up_time;
        user.user_city = newUser.user_city;
        user.user_password = newUser.user_password;
        user.user_job = newUser.user_job;
        user.user_one_word = newUser.user_one_word;
        user.user_place = newUser.user_place;
        user.user_education = newUser.user_education && JSON.parse(newUser.user_education);
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