const chalk = require('chalk');
// const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const { likeDefinition } = require('./db-models');

const sequelize = new Sequelize(process.env.DATABASE_URL);
const Like = sequelize.define('like', likeDefinition);
Like.sync({ force: true });

app.set('port', process.env.PORT || 5000);

app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.json());

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('pages/index');
});

app.get('/likes/:postID', (req, res) => {
    const { postID } = req.params;
    Like.findAndCountAll({ where: { postID } }).then(result =>
        console.log(result)
    );
    // Like.findAll().then(likes => res.send(likes));
});

app.post('/likes', (req, res) => {});

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
