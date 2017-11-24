
'use strict';
import user from './user'
import topic from './topic'
import question from './question'

export default app =>{
  app.use('/user',user);
  app.use('/topic', topic);
  app.use('/question', question);
}