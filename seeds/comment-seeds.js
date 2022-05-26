const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Looking forward to it, Ralph!',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'CSS still has great value in comparison with many pre-packaged libraries!',
    user_id: 4,
    post_id: 2
  },
  {
    comment_text: 'Hope you will talk about static and dynamic HTML apps',
    user_id: 3,
    post_id: 1
  },
 ];

 const seedComments = () => Comment.bulkCreate(commentdata);
 
 module.exports = seedComments;