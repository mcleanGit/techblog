// models index.js developed from module
// import all models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// belongsToMany syntax uses special const UserPost
const UserPost = sequelize.define('user_post', {
 role: Sequelize.STRING
  }); 
   User.belongsToMany(Post, { through: UserPost });
   Post.belongsToMany(User, { through: UserPost });

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.belongsToMany(Post, {
  through: UserPost,
  as: belongsToMany('User, Post'),
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

Post.belongsToMany(User, {
 through: UserPost,
 as: belongsToMany('Post, User'),
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };
