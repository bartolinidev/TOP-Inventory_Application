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

// GET /room-standards/:name/update
roomStandardsRouter.get('/:name/update', getRoomStandardUpdate);

// POST /room-standards/:name/update
roomStandardsRouter.post('/:name/update', postRoomStandardUpdate);

// POST /room-standards/:name/delete
roomStandardsRouter.post('/:name/delete', postRoomStandardDelete);

module.exports = roomStandardsRouter;
