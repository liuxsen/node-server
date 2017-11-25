import express from 'express'
const router = express.Router();
import question from '../controller/question/question'

router.post('/add', question.add);
router.post('/find/:_id', question.find);
router.post('/follow', question.follow);
export default router;