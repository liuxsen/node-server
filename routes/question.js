import express from 'express'
const router = express.Router();
import question from '../controller/question/question'

router.post('/add', question.add);
router.post('/detail/:_id', question.find);
router.post('/follow', question.follow);
router.post('/list', question.list);
export default router;