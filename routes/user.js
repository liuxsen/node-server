import express from 'express'
const router = express.Router();
import user from '../controller/user'

router.post('/modify/:uid', user.modifyUser);
router.post('/add',user.add);
export default router;