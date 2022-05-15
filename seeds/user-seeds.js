const { User } = require('../models');

const userSeeds = [
    {
        username: 'goober1',
        email: 'goober@gmail.com',
        password: 'fake123'
    },
    {
        username: 'test',
        email: 'test@gmail.com',
        password: 'fake12'
    },
    {
        username: 'hello',
        email: 'hello@gmail.com',
        password: 'fake23'
    },
    {
        username: 'cough',
        email: 'cough@gmail.com',
        password: 'fake13'
    },
    {
        username: 'sneeze',
        email: 'sneeze@gmail.com',
        password: 'fak123'
    },
    {
        username: 'blue',
        email: 'blue@gmail.com',
        password: 'ake123'
    },
];

const seedUsers = () => User.bulkCreate(userSeeds);

module.exports = seedUsers;