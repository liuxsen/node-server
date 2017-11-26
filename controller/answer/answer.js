import base from '../../prototype/commen'
import questionModel from '../../models/question/question'
import aswerModel from '../../models/answer/answer'

class Answer extends base {
  constructor() {
    super();
    // this.name = '问题'
    this.add = this.add.bind(this);
    this.agree = this.agree.bind(this);
  }
  // 添加问题
  async add(req,res,next){
    if (await this.checkToken(req, res)) {
      try {
        const params = {
          answer_user_id: req.user_id
        }
        Object.assign(req.body,params);
        const answer = new aswerModel(req.body);
        const result = await answer.save();
        console.log(result);
        res.send({
          answer_id: result._id,
          error: 0
        })
      } catch (error) {
        res.send({
          error: 1008
        })
      }
    }
  }
  // 赞同回答
  async agree(req,res,next){
    if (await this.checkToken(req, res)) {
      const user_id = req.user_id;
      const agree = parseInt(req.body.agree);
      const answer_id = req.body.answer_id;
      const answer = await aswerModel.findById(answer_id);
      if (agree ===1){
        answer.answer_agree.push(user_id);
      }else if(agree === 2){
        answer.answer_agree.remove(user_id);
      }
      const result = await answer.save();
      console.log(result);
      res.send({
        error: 0
      })
    }
  }

}

export default new Answer();