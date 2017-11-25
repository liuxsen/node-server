import base from '../../prototype/commen'
import questionModel from '../../models/question/question'
import aswerModel from '../../models/answer/answer'

class Answer extends base {
  constructor() {
    super();
    // this.name = '问题'
    this.add = this.add.bind(this);
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
  
}

export default new Answer();