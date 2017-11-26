// 话题
'use strict'
import mongoose from 'mongoose'
const Schema = mongoose.Schema;


const booksMarksSchema = new Schema({
  booksMark_user_id: {type: Schema.Types.ObjectId,required: true}, //收藏夹所有者
  booksMark_name: { type: String, required: true,maxlength: 20}, //收藏夹名字
  booksMark_description: { type: String, maxlength: 256}, //收藏夹描述
  booksMark_isSecret: {type: Boolean,default: false},//收藏夹是否私密
})

const BooksMark = mongoose.model('Answer', booksMarksSchema);

export default BooksMark;