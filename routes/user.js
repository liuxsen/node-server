import express from 'express'
const router = express.Router();
import user from '../controller/user/user'

router.post('/modify/:uid', user.modifyUser);
router.post('/add',user.add);
router.post('/login',user.login);
export default router;