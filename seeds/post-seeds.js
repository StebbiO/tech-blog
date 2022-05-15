const { Post } = require('../models');

const postSeeds = [
    {
        title: 'Great website!',
        content: 'You really got it working, huh',
        user_id: 1
    },
    {
        title: 'Epic',
        content: 'This is so cool!',
        user_id: 2
    },
    {
        title: 'Okay I guess',
        content: 'Could use some work',
        user_id: 3
    },
    {
        title: 'Yeehaw',
        content: 'Howdy',
        user_id: 4
    },
    {
        title: 'Hello World!',
        content: 'Nice to meet ya',
        user_id: 5
    },
    {
        title: 'Last one',
        content: 'Yep, seed it',
        user_id: 6
    },
];

const seedPosts = () => Post.bulkCreate(postSeeds);

module.exports = seedPosts;