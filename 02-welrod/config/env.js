module.exports = {
  db: {
    production: process.env.MONGODB_URI,
    development: 'mongodb://localhost/welrod-dev',
    test: 'mongodb://localhost/welrod-test'
  },
  port: process.env.PORT || 8000,
  secret: process.env.SECRET || 'omg so so secret'
};
