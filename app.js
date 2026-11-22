const express = require('express');
const app = express();
const path = require('node:path');
const roomStandardsRouter = require('./routes/roomStandards');
const roomsRouter = require('./routes/rooms');
const dashboardRouter = require('./routes/dashboard');

// Static paths

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

// Views

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Middleware for parsing HTML form data into req.body via POST method
app.use(express.urlencoded({ extended: true }));

// Routes

app.use('/', dashboardRouter);
app.use('/room-standards', roomStandardsRouter);
app.use('/rooms', roomsRouter);

// Catch-all (Custom 404 for unmatched routes)
app.use((req, res) => {
  res.status(404).render('404', { title: '404 - Not Found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  const status = err.status || 500;

  if (status === 404) {
    return res.status(404).render('404', { title: '404 - Not Found' });
  }

  res.status(status).render('error', {
    title: `Error ${status}`,
    message: err.message || 'Something went wrong!',
  });
});

// Port

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Listening on port ${PORT}!`);
});
