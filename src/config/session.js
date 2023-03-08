const session = require('express-session');
const MongoStore = require('connect-mongo');

module.exports = (app) => {
  app.use(
    session({
      store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
      secret: 'super secret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 * 2,
      },
    })
  );
};
