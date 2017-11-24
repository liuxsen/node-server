import express from 'express'
const router = express.Router();
import topic from '../controller/topic/topic'

router.post('/add',topic.add);
router.post('/find',topic.find);
router.post('/modify/:_id',topic.modify);
export default router;