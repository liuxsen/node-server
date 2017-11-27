import base from '../../prototype/commen'
import questionModel from '../../models/question/question'
import topicModel from '../../models/topic/topic'
import answerModel from '../../models/answer/answer'

class Question extends base {
  constructor() {
    super();
    // this.name = '问题'
    this.add = this.add.bind(this);
    this.follow = this.follow.bind(this);
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
          error: 0,
          question_id: result._id
        })
      } catch (error) {
        res.json({
          error: 500
        })
      }
    }
  }
  // 查找问题
  // 根据问题id查找问题，以及问题下面的评论
  async find(req,res,next){
    const question_id = req.params._id;
    // 分页大小
    const page_size = parseInt(req.body.page_size);
    // 当前页码
    const page = parseInt(req.body.page);

    try {
      const question = await questionModel
                      .findById(question_id)
                      .populate({ path: 'question_author'})
                      .populate({ path: 'question_topic'})
      const answers = await answerModel
                      .find({ answer_question_id: question_id})
                      .populate('answer_agree')
                      .skip(page_size*(page-1))
                      .limit(page_size)
      const result = {
        question: question,
        answers: answers
      }
      res.send(result);
    } catch (error) {
      res.send({
        error: 2001,
        msg: 'don\'t have this question id'
      })
      console.log(error)
    }
  }

  //问题列表
  async list(req,res,next){
    try {
      const pageSize = parseInt(req.body.page_size);
      const page = parseInt(req.body.page-1);
      const questionList = await questionModel
        .find()
        .sort('-question_update_at')
        .populate('question_topic')
        .populate('question_author')
        .skip(pageSize * page)
        .limit(10)
      res.send({
        error: 0,
        data: questionList
      })
    } catch (error) {
      res.send(error);
    }
  }

  // 关注一个问题
  async follow(req,res,next){
    if (await this.checkToken(req, res)) {
      const question_id = req.body.question_id;
      const user_id = req.user_id;
      const question = await questionModel.findById(question_id);
      if(question.question_follows.indexOf(user_id) === -1){
        question.question_follows.push(user_id);
      }else{
        res.send({
          error: 2002,
          msg:'已经关注过了'
        })
      }
      
      const result = await question.save();
      res.send({
        error: 0
      })
    }
  }

}

export default new Question();