# starther-awards
Demo project for the starther workshop

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```
$ yarn install
$ yarn build
$ heroku local
```

The above commands will update the webpack bundle and start the node.js server
on port 5000.

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)