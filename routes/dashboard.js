const { Router } = require('express');
const mainDashboard = require('../controllers/dashboard/mainDashboard');
const dashboardRouter = Router();

dashboardRouter.get('/', (req, res) => {
  res.redirect('/dashboard');
});

// GET /dashboard
dashboardRouter.get('/dashboard', mainDashboard);

// GET /dashboard/rooms

// GET /dashboard/standards

module.exports = dashboardRouter;
