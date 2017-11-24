var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;


const studentSchema = Schema({
  name: String,
  age: Number,
  xuexiao: {
    type: Schema.Types.ObjectId,
    ref: 'School' //这里要写你指向的数据库表名字
  }
});

const schoolSchemal = Schema({
  name: String,
});

const studentModel = mongoose.model('Student', studentSchema);
const schoolModel = mongoose.model('School', schoolSchemal);


//创建学校
const school = schoolModel({
  name: '第一高中'
});

studentModel
  .findOne({
    name: '小红'
  })
  .exec(function (err, student) {
    console.log('id: ', student.xuexiao, 'name: ', student.xuexiao.name);
    //id:  58ddd5db6216a905ce973de4 name:  undefined
    //这里打印只有id，并没有属性
  });

studentModel
  .findOne({
    name: '小红'
  })
  .populate('xuexiao') //加上这句话也就有了属性值, 
  .exec(function (err, student) {
    console.log('id: ', student.xuexiao, 'name: ', student.xuexiao.name);
    //id:  { _id: 58ddd5db6216a905ce973de4, name: '第一高中', __v: 0 } name:  第一高中
  });