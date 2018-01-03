const express = require('express');
const router = require('./config/router');
const chatRouter = require('./config/chat-router');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressJWT = require('express-jwt');
const env = require('./config/env');
const app = express();
const dest = `${__dirname}/public`;
const socketEvents = require('./lib/socketEvents');

app.use(express.static(dest));
mongoose.connect(env.db['development'], { useMongoClient: true });

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', expressJWT({ secret: env.secret })
  .unless({
    path: [
      { url: '/api/v1/register', methods: ['POST'] },
      { url: '/api/v1/login', methods: ['POST'] }
    ]
  }));
app.use(jwtErrorHandler);

function jwtErrorHandler(err, req, res, next){
  if (err.name !== 'UnauthorizedError') return next();
  return res.status(401).json({ message: 'Unauthorized request.' });
}

app.use('/api/v1', router);
app.use('/api/v1/chat', chatRouter);

app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));
// app.get('/*', (req, res) => res.json({message: 'It seems to work'}));

const server = app.listen(env.port, () => console.log(`Express has started on port: ${env.port}`));

const io = require('socket.io').listen(server);
socketEvents(io);
