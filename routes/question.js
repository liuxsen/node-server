import express from 'express'
const router = express.Router();
import question from '../controller/question/question'

router.post('/add', question.add);
// router.post('/modify/:_id', question.modify);
export default router;