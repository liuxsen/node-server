import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

import base from '../../prototype/commen'
import questionModel from '../../models/question/question'
import topicModel from '../../models/topic/topic'
import answerModel from '../../models/answer/answer'
import bookMarksModel from '../../models/booksMarks/booksMarks'

class BookMarks extends base {
  constructor() {
    super();
    // this.name = '问题'
    this.add = this.add.bind(this);
    this.collect = this.collect.bind(this);
    this.delete = this.delete.bind(this);
    this.deleteFolder = this.deleteFolder.bind(this);
    this.list = this.list.bind(this);
    this.listCon = this.listCon.bind(this);
  }
  
  // 添加收藏夹
  async add(req,res,next){
    if(await this.checkToken(req,res)){
      const user_id = req.user_id;
      const params = {
        booksMark_user_id: user_id
      }
      Object.assign(req.body,params);
      try {
        const bookMarks = new bookMarksModel(req.body);
        const result = await bookMarks.save()
        res.send({
          error: 0
        })
      } catch (error) {
        res.send(error);
      }
    }
  }
// 查看某人的收藏夹
  async list(req,res,next){
    if (await this.checkToken(req, res)) {
      try {
        const user_id = req.user_id;
        const list = await bookMarksModel
          .find({ booksMark_user_id: user_id})
        res.send({
          error: 0,
          data: list
        })
      } catch (error) {
        res.send(error);
      }
     
    }
  }

  // 查看某人某个收藏夹以及内容
  async listCon(req, res, next) {
    if (await this.checkToken(req, res)) {
      try {
        const user_id = req.user_id;
        const bookMark_id = req.params.id;
        const list = await bookMarksModel
          .find({ booksMark_user_id: user_id, _id: bookMark_id})
          .populate('booksMark_contents.item')
        console.log('----listCon----')
        res.send({
          error: 0,
          data: list
        })
      } catch (error) {
        res.send(error);
      }

    }
  }

  async deleteFolder(req,res,next){
    if(await this.checkToken(req,res)){
      try {
        const booksMark_id = req.body.booksMark_id;
        const result = await bookMarksModel.findByIdAndRemove(booksMark_id);
        res.send({
          error: 0
        })
      } catch (error) {
        res.send(error)
      }
    }
  }

  // 收藏
  async collect (req,res,next){
    if (await this.checkToken(req, res)) {
      try {
        const typeList = ['Answer', 'Article'];
        const refLink = typeList[parseInt(req.body.refLink)];
        const booksMark_id = req.body.booksMark_id;
        // 将要保存的文章id或者答案id
        const source_id = req.body.source_id;
        const bookMark = await bookMarksModel.findById(booksMark_id);
        bookMark.booksMark_contents.push({
          refLink: refLink,
          item: source_id
        })
        const result = await bookMark.save();
        res.send({
          error: 0
        })
      } catch (error) {
        res.send(error);
      }
    }
  }

  //删除一个收藏的文章
  async delete (req,res,next){
    if (await this.checkToken(req, res)) {
      try {
        const source_id = req.body.source_id;
        const bookMark = await bookMarksModel.findById(req.body.booksMark_id);
        console.log('-----')
        console.log(bookMark);
        function findItem(source){
          if (source.item.toString() === source_id){
            return true
          }
        }
        const index = bookMark.booksMark_contents.findIndex(findItem)
        console.log(index);
        bookMark.booksMark_contents.splice(index,1);
        console.log(bookMark)
        const result = await bookMark.save();
        res.send({
          error: 0
        })
      } catch (error) {
        res.send(error);
      }
    }
  }

  // 

}

export default new BookMarks();