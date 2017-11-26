// 话题
'use strict'
import mongoose from 'mongoose'
const Schema = mongoose.Schema;


const answerSchema = new Schema({
  answer_question_id: { type: Schema.Types.ObjectId, ref: 'Question',required: true },
  answer_creat_at: {type: Date,default: Date.now},
  answer_content: {type: String,required: true},
  answer_comment_id: { type: Schema.Types.ObjectId,ref:'Comment'},
  answer_user_id: {type: Schema.Types.ObjectId,ref: 'User'},
  answer_agree: [{ type: Schema.Types.ObjectId, ref: 'User'}]//回答的赞  可以小于0
})

const Answer = mongoose.model('Answer', answerSchema);

export default Answer;