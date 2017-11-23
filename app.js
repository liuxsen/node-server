import express from 'express';
import router from './routes/index'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import session from 'express-session';
import db from './mongodb/db'
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cookieParser());
// app.use(express.static('./public'));
router(app);

app.listen(3000);