
'use strict';
import '../prototype/prototype'
import user from './user'
import topic from './topic'
import question from './question'
import answer from './answer'
import bookMarks from './bookMarks'

export default app =>{
  app.use('/user',user);
  app.use('/topic', topic);
  app.use('/question', question);
  app.use('/answer', answer);
  app.use('/bookMark', bookMarks);
}