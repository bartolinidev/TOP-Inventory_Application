const { Router } = require('express');
const roomStandardsRouter = Router();

const getAllRoomStandards = require('../controllers/roomStandards/getAllRoomStandards');
const getRoomStandardCreate = require('../controllers/roomStandards/getRoomStandardCreate');
const postRoomStandardCreate = require('../controllers/roomStandards/postRoomStandardCreate');
const getRoomStandardUpdate = require('../controllers/roomStandards/getRoomStandardUpdate');
const postRoomStandardUpdate = require('../controllers/roomStandards/postRoomStandardUpdate');
const postRoomStandardDelete = require('../controllers/roomStandards/postRoomStandardDelete');

// GET /room-standards
roomStandardsRouter.get('/', getAllRoomStandards);

// GET /room-standards/create
roomStandardsRouter.get('/create', getRoomStandardCreate);

// POST /room-standards/create
roomStandardsRouter.post('/create', postRoomStandardCreate);

// GET /room-standards/id/:id/update
roomStandardsRouter.get('/id/:id/update', getRoomStandardUpdate);

// POST /room-standards/id/:id/update
roomStandardsRouter.post('/id/:id/update', postRoomStandardUpdate);

// POST /room-standards/id/:id/delete
roomStandardsRouter.post('/id/:id/delete', postRoomStandardDelete);

module.exports = roomStandardsRouter;
