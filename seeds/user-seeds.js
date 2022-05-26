const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'ralph_alpher',
    password: 'password123'
  },
  {
    username: 'hans_bethe',
    password: 'password123'
  },
  {
   username: 'george_gamow',
   password: 'password123'
 },
 {
  username: 'daisy_delta',
  password: 'password123'
},
{
 username: 'ellie_epsilon',
 password: 'password123'
},
{
 username: 'oliver_omicron',
 password: 'password123'
},
{
 username: 'peter_pi',
 password: 'password123'
},
 ];

 const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});
 
 module.exports = seedUsers;