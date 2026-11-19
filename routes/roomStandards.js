const { Router } = require('express');
const roomStandardsRouter = Router();

const getAllRoomStandards = require('../controllers/roomStandards/getAllRoomStandards');
const getRoomStandardsCreate = require('../controllers/roomStandards/getRoomStandardsCreate');
const postRoomStandardsCreate = require('../controllers/roomStandards/postRoomStandardCreate');
const getRoomStandardUpdate = require('../controllers/roomStandards/getRoomStandardUpdate');
const postRoomStandardUpdate = require('../controllers/roomStandards/postRoomStandardUpdate');
const postRoomStandardDelete = require('../controllers/roomStandards/postRoomStandardDelete');

// GET /room-standards
roomStandardsRouter.get('/', getAllRoomStandards);

// GET /room-standards/create
roomStandardsRouter.get('/create', getRoomStandardsCreate);

// POST /room-standards/create
roomStandardsRouter.post('/create', postRoomStandardsCreate);

// GET /room-standards/:id/update
roomStandardsRouter.get('/:id/update', getRoomStandardUpdate);

// POST /room-standards/:id/update
roomStandardsRouter.post('/:id/update', postRoomStandardUpdate);

// POST /room-standards/:id/delete
roomStandardsRouter.post('/:id/delete', postRoomStandardDelete);

module.exports = roomStandardsRouter;
