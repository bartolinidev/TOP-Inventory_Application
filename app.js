const express = require('express');
const app = express();
const path = require('node:path');
const roomTypesRouter = require('./routes/roomTypes');

// Static paths

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

// Views

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Middleware for parsing HTML form data into req.body via POST method
app.use(express.urlencoded({ extended: true }));

// Routes

app.use('/room-types', roomTypesRouter);

// Catch-all (Custom 404)
app.use((req, res) => {
  res.status(404).render('404', { title: '404 - Not Found', path: null });
});

// Port

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Listening on port ${PORT}!`);
});
