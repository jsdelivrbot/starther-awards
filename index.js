const chalk = require('chalk');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const { likeDefinition } = require('./db-models');

const sequelize = new Sequelize(process.env.DATABASE_URL);
const Like = sequelize.define('like', likeDefinition, {
    underscoredAll: true,
    underscored: true,
    timestamps: false
});
Like.sync({ force: true });

app.set('port', process.env.PORT || 5000);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('pages/index');
});

app.get('/likes/:postID', (req, res) => {
    const { postID } = req.params;
    const userID = req.query.user_id;
    Like.findAndCountAll({
        where: { postID: postID }
    })
        .then(result => {
            const { count, rows } = result;
            const userStatus = rows.filter(
                row => row.dataValues.userID === Number(userID)
            );
            res.send({
                count,
                status: userStatus.length === 1
            });
        })
        .catch(error => console.log(error));
});

app.post('/likes/toggle', (req, res) => {
    if (!req.body) {
        res.send({});
    }
    let { userID, postID } = req.body;
    userID = parseInt(userID);
    postID = parseInt(postID);

    Like.findAll({ where: { userID, postID } })
        .then(result => {
            if (result.length > 0) {
                // delete the existing like
                return result[0].destroy();
            } else {
                // create a like
                return Like.create({ userID, postID });
            }
        })
        .then(() => Like.findAndCountAll({ where: { postID } }))
        .then(result => {
            const { count, rows } = result;
            const userStatus = rows.filter(
                row => row.dataValues.userID === Number(userID)
            );
            res.send({
                count,
                status: userStatus.length === 1
            });
        })
        .catch(error => console.log(error));
});

app.delete('/likes', (req, res) => {});

sequelize
    .authenticate()
    .then(() => {
        console.log(
            chalk.green('DB Connection has been established successfully.')
        );
        app.listen(app.get('port'), function() {
            console.log(
                chalk.cyan('Node app is running on port', app.get('port'))
            );
        });
    })
    .catch(err => {
        console.error(chalk.red('Unable to connect to the database:', err));
    });
