import express from 'express'
const router = express.Router();
import answer from '../controller/answer/answer'

router.post('/add', answer.add);
router.post('/agree', answer.agree);
export default router;