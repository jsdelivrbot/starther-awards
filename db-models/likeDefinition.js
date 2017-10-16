const Sequelize = require('sequelize');

const likeDefinition = {
    userID: Sequelize.INTEGER,
    postID: Sequelize.INTEGER
};
module.exports = likeDefinition;
