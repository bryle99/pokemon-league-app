const app = require('./config/express');
const sequelize = require('./config/sequelize-db');

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

// API Router
// app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(app.get('port'), app.get('host'), () => {
  console.log(`Server running at http://${app.get('host')}:${app.get('port')}`);
});

module.exports = app;
