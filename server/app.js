const app = require('./config/express');

// API Router
// app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(app.get('port'), app.get('host'), () => {
  console.log(`Server running at http://${app.get('host')}:${app.get('port')}`);
});

module.exports = app;
