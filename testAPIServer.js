var _ = require('lodash');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

let USER_DATA = [
  {
    name: 'Peter',
    username: 'goldendase',
    status: 'active',
    currentTask: 'Presenting',
    location: {
      address: {
        city: 'Chicago'
      }
    }
  },
  {
    name: 'Dan',
    username: 'dc',
    status: 'active',
    currentTask: 'Watching',
    location: {
      address: {
        city: 'Chicago'
      }
    }
  },
  {
    name: 'Jaime',
    username: 'jaime',
    status: 'inactive',
    currentTask: 'Sleeping',
    location: {
      address: {
        city: 'Lombard'
      }
    }
  }
];

let VALID_TASKS = [
  'Sleeping', 'Watching', 'Presenting', 'Coding'
];

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.header("Pragma", "no-cache");
  res.header("Expires", 0);

  next();
});

app.get('/users/:username', (req, res) => {
  const username = req.params.username;
  const user = _.find(USER_DATA, (user) => user.username === username)
  if (!user) {
    res.status(404).send({status: 'Not found.'});
  } else {
    setTimeout(() => res.status(200).send(user), 2000);
  }
});

app.put('/users/:username', (req, res) => {
  const updatedUser = req.body;
  if (!_.find(USER_DATA, (user) => user.username === username)) {
    return res.status(404).send({error: 'Not found.'});
  }
  if (!VALID_TASKS.contains(updatedUser.currentTask)) {
    return res.status(400).send({error: 'Not a valid task.'})
  }
  USER_DATA = _.map(USER_DATA, (value, key) => {
    if (value.username === req.params.username) {
      return updatedUser;
    } else {
      return value;
    }
  })
  res.status(202).send(newUser);
});

app.put('/users/:username/task', (req, res) => {
  const newTask = req.body.task;
  if (!_.find(USER_DATA, (user) => user.username === username)) {
    return res.status(404).send({error: 'Not found.'});
  }
  if (!VALID_TASKS.contains(updatedUser.currentTask)) {
    return res.status(400).send({error: 'Not a valid task.'})
  }

  USER_DATA = _.map(USER_DATA, (value, key) => {
    if (value.username === req.params.username) {
      return updatedUser;
    } else {
      return value;
    }
  })
  res.status(202).send(newUser);
});

app.get('/secure', (req, res) => {
  if (req.get('Authorization') !== 'banana') {
    res.status(401).send({error: 'Unauthorized'});
  } else {
    res.status(200).send({secret: 'http://d39kbiy71leyho.cloudfront.net/wp-content/uploads/2016/05/09170020/cats-politics-TN.jpg'});
  }
});

app.get('/users', (req, res) => {
  const users = _.map(USER_DATA, (user) => {username: user.username})
  res.status(200).send(USER_DATA);
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  if (_.find(USER_DATA, (user) => user.username === newUser.username)) {
    res.status(400).send({error: 'Username is not available'});
  } else {
    USER_DATA.push(newUser);
    res.status(202).send(newUser);
  }
});

app.listen(3000, function () {
  console.log('Test server running on port 3000.');
});
