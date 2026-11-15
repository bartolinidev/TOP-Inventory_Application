const { Router } = require('express');
const indexRouter = Router();

// GET /
indexRouter.get('/', (req, res) => {
  res.render('dashboard', {
    title: 'Dashboard',
  });
});

module.exports = indexRouter;
