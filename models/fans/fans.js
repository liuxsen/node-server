// 关注
'use strict'
import mongoose from 'mongoose'
const Schema = mongoose.Schema;


const fansSchema = new Schema({
  follow_user_id: {type: Schema.Types.ObjectId,required: true},
  follow_fans: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

const Follow = mongoose.model('Question', fansSchema);

export default Follow;