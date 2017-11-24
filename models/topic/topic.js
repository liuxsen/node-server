// 话题
'use strict'
import mongoose from 'mongoose'
const Schema = mongoose.Schema;


const topicSchema = new Schema({
 topic_name: {type: String},
 topic_create_at: {type: Date,default: Date.now()}, //话题创建时间
 topic_avatar:String, //话题头像
 topic_user: {type: Schema.Types.ObjectId,ref: 'User'}
})

const topic = mongoose.model('Topic', topicSchema);

export default topic;