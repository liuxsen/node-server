import express from 'express'
const router = express.Router();
import bookMarks from '../controller/bookMarks/bookMarks'

router.post('/list', bookMarks.list);
router.post('/f/:id', bookMarks.listCon);
router.post('/add', bookMarks.add);
router.post('/collect', bookMarks.collect);
router.post('/delete', bookMarks.delete);
router.post('/delFolder', bookMarks.deleteFolder);
export default router;