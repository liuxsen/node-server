// 话题
'use strict'
import mongoose from 'mongoose'
const Schema = mongoose.Schema;


const booksMarksSchema = new Schema({
  booksMark_user_id: {type: Schema.Types.ObjectId,required: true,ref: 'User'}, //收藏夹所有者
  booksMark_name: { type: String, required: true,maxlength: 20}, //收藏夹名字
  booksMark_description: { type: String, maxlength: 256}, //收藏夹描述
  booksMark_isSecret: {type: Number,default: 0},//收藏夹是否私密
  booksMark_contents: [{
    refLink: String,   // Article 文章 Answer 回答 
    item:{
        type: Schema.Types.ObjectId,
        refPath: 'booksMark_contents.refLink'
      } 
    } //收藏文章
  ] 
})

const BooksMark = mongoose.model('BooksMark', booksMarksSchema);

export default BooksMark;