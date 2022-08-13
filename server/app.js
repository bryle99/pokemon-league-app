const app = require('./config/express');
const sequelize = require('./config/sequelize-db');
const apiRoutes = require('./routes/index.route');
const joiErrorHandler = require('./middlewares/joi.error');

// sequelize database connection
async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
connect();

// API Route
app.use('/api', apiRoutes);

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// Joi error handler middleware
app.use(joiErrorHandler);

app.listen(app.get('port'), app.get('host'), () => {
  console.log(`Server running at http://${app.get('host')}:${app.get('port')}`);
});

module.exports = app;
