const Sequelize = require('sequelize');
const Post = {
    title: Sequelize.STRING,
    imgUrl: Sequelize.STRING,
    likes: Sequelize.INTEGER
};
module.exports = Post;
