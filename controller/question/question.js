import base from '../../prototype/commen'
import questionModel from '../../models/question/question'
import topicModel from '../../models/topic/topic'

class Question extends base {
  constructor() {
    super();
    // this.name = '问题'
    this.add = this.add.bind(this);
    
  }
  // 添加问题
  async add(req,res,next){
    if (await this.checkToken(req,res)){
      const questionInfo = req.body;
      console.log(questionInfo)
      console.log(req.user_id);
      const question = new questionModel({
        question_title: questionInfo.question_title,
        question_description: questionInfo.question_description,
        question_topic: questionInfo.question_topic,
        question_anonymous: questionInfo.question_anonymous,
        question_author: req.user_id
      })
      try {
        const result = await question.save();
        console.log(result);
        console.log('保存成功');
        res.json({
          error: 0
        })
      } catch (error) {
        res.json({
          error: 500
        })
      }
    }
  }
  // 回答问题
  async answer(req,res,next){
    if(await this.checkToken(req,res)){
      
    }
  }
}

export default new Question();