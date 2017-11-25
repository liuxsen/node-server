// 话题
'use strict'
import mongoose from 'mongoose'
const Schema = mongoose.Schema;


const topicSchema = new Schema({
  question_title: String,
  question_topic: [{type: Schema.Types.ObjectId,ref: 'Topic'}],
  question_description: String,
  question_anonymous: {type: Boolean,default: false},
  question_author: { type: Schema.Types.ObjectId,ref: 'User'},
  question_follows: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

const Question = mongoose.model('Question', topicSchema);

export default Question;