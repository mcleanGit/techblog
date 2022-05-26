const { Post } = require('../models');

const postdata = [
  {
    title: 'TechBlog1',
    post_text: 'Watch for upcoming seminar on HTML today!',
    user_id: 1
  },
  {
    title: 'TechBlog2',
    post_texst: 'Watch for upcoming seminar on Advanced CSS today!',
    user_id: 2
  },
  {
   title: 'TechBlog2',
   post_texst: 'Watch for upcoming seminar on JS vanilla and multiplex!',
   user_id: 3
  },
 ];

 const seedPosts = () => Post.bulkCreate(postdata);
 
 module.exports = seedPosts;
 