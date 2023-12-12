const { User } = require('../models')

const userData = [
    {
        id: 1,
        user_name: 'sal',
        email: 'sal@nomail.com',
        password: 'AY_wordpass'
    },
    {
        id: 2,
        user_name: 'ryan',
        email: 'ryan@nomail.com',
        password: 'AY_wordpass'
    },
    {
        id: 3,
        user_name: 'pasha',
        email: 'pasha@nomail.com',
        password: 'AY_wordpass'
    },
    {
        id: 4,
        user_name: 'peyton',
        email: 'peyton@nomail.com',
        password: 'AY_wordpass'
    },
];

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true
});

module.exports = seedUser;