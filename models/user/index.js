'use strict'
import mongoose from 'mongoose'
const Schema = mongoose.Schema;


const education = new Schema({
  school: String, //学校
  domain: String //专业
})

const userSchema = new Schema({
  user_id: Number,
  user_name: String,
  user_avatar: String,
  user_age: Number,
  user_sign_up_time: String,
  user_city: String,
  user_password: String,
  user_phone: String,
  user_email: String,
  user_job: String,
  user_sex: String,
  user_description: String, //个人简介
  user_one_word: String, //一句话介绍自己 
  user_place: String,
  user_education: [education]
})

const user = mongoose.model('User',userSchema);

export default user;