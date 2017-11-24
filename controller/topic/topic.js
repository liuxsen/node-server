import base from '../../prototype/commen'
import topicModel from '../../models/topic/topic'
class Topic extends base {
  constructor(){
    super();
    this.name = '话题文章'
    this.add = this.add.bind(this);
    this.hasTopic = this.hasTopic.bind(this);
    this.find = this.find.bind(this);
    // this.checkToken = this.checkToken.bind(this);
  }
  async hasTopic(topicName){
    try {
      const topic = await topicModel.findOne({ topic_name: topicName })
      return topic;
    } catch (error) {
      return false;
    }
    
  }
  async add (req,res,next){
   const  isLogin = await this.checkToken(req,res,next);
    if (isLogin){
      console.log(req.user_id);
      console.log('登录了');
      const topicInfo = req.body;
      const hasTopic = await this.hasTopic(topicInfo.topic_name);
      if(!hasTopic){
        const topic = new topicModel({
          topic_name: topicInfo.topic_name,
          topic_user: req.user_id
        })
        try {
          const result = await topic.save();
          res.json({
            error: 0
          });
        } catch (error) {
          console.log(error);
        }
      }else{
        res.json({
          error: 1006,
          msg: '话题已经创建了'
        })
      }
    }else{
      console.log('没有登录')
    }
  }
  async modify (req,res,next){
    if (this.checkToken(req,res,next)) {
      console.log('登录了')
      
    } else {
      console.log('没有登录')
    }
  }
  async find(req, res, next) {
    if (this.checkToken(req, res)) {
      const questionInfo = req.body;
      console.log(questionInfo)
      const result = await topicModel.find({
        // mongoose 正则匹配关键字
        topic_name: { $regex: questionInfo.keywords, $options: 'ig' }
      })
        .limit(10)
      console.log(result);
      res.json(result);
    }
  }
}

export default new Topic();