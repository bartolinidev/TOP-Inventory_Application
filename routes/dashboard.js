const { Router } = require('express');
const dashboardRouter = Router();
const mainDashboard = require('../controllers/dashboard/mainDashboard');
const roomsDashboard = require('../controllers/dashboard/roomsDashboard');
const roomsByBedTypeDashboard = require('../controllers/dashboard/roomsByBedTypeDashboard');
const roomsByStandardDashboard = require('../controllers/dashboard/roomsByStandardDashboard');

dashboardRouter.get('/', (req, res) => {
  res.redirect('/dashboard');
});

// GET /dashboard
dashboardRouter.get('/dashboard', mainDashboard);

// GET /dashboard/rooms
dashboardRouter.get('/dashboard/rooms', roomsDashboard);

// GET /dashboard/rooms/bed-type
dashboardRouter.get('/dashboard/rooms', roomsByBedTypeDashboard);

// GET /dashboard/rooms/standard
dashboardRouter.get('/dashboard/rooms', roomsByStandardDashboard);

// GET /dashboard/standards

module.exports = dashboardRouter;
