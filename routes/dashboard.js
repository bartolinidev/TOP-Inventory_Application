const { Router } = require('express');
const dashboardRouter = Router();
const mainDashboard = require('../controllers/dashboard/mainDashboard');
const roomsDashboard = require('../controllers/dashboard/roomsDashboard');
const roomsByBedTypeDashboard = require('../controllers/dashboard/roomsByBedTypeDashboard');
const roomsByStandardDashboard = require('../controllers/dashboard/roomsByStandardDashboard');
const roomsByFloorDashboard = require('../controllers/dashboard/roomsByFloorDashboard');

// GET /
dashboardRouter.get('/', (req, res) => {
  res.redirect('/dashboard');
});

// GET /dashboard
dashboardRouter.get('/dashboard', mainDashboard);

// GET /dashboard/rooms
dashboardRouter.get('/dashboard/rooms', roomsDashboard);

// GET /dashboard/rooms/by-bed-type
dashboardRouter.get('/dashboard/rooms/by-bed-type', roomsByBedTypeDashboard);

// GET /dashboard/rooms/by-standard
dashboardRouter.get('/dashboard/rooms/by-standard', roomsByStandardDashboard);

// GET /dashboard/rooms/by-floor
dashboardRouter.get('/dashboard/rooms/by-floor', roomsByFloorDashboard);

// GET /dashboard/standards

module.exports = dashboardRouter;
