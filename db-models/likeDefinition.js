const Sequelize = require('sequelize');

const likeDefinition = {
    like: Sequelize.BOOLEAN,
    userID: Sequelize.INTEGER,
    postID: Sequelize.INTEGER
};
module.exports = likeDefinition;
