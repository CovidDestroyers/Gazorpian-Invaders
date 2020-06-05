require('dotenv').config();

const bodyParser = require('body-parser');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
//  const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const session = require('express-session');
const redis = require('redis');
const RedisStore = require('connect-redis')(session);

const app = express();
const redisClient = redis.createClient({ url: process.env.REDIS_URL });

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('trust proxy', 1);

app.use(cors());
app.use(compression());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));

// Enforces HTTPS
if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line global-require
  const enforce = require('express-sslify');

  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

// Redis Set Up
app.use(
  session({
    genid: () => {
      return uuidv4();
    },
    store: new RedisStore({
      client: redisClient
    }),
    name: '_redisGazorpian',
    secret: process.env.REDIS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, maxAge: 120000 }
  })
);

app.use('/', indexRouter);
app.use('/users', usersRouter);

redisClient.on('error', (err) => {
  console.log('Redis error:', err);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
