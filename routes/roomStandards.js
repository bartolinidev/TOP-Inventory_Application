const { Router } = require('express');
const roomStandardsRouter = Router();

const getRoomStandards = require('../controllers/roomStandards/getRoomStandards');
const getRoomStandardsCreate = require('../controllers/roomStandards/getRoomStandardsCreate');
const postRoomStandardsCreate = require('../controllers/roomStandards/postRoomStandardsCreate');
const getRoomStandardByName = require('../controllers/roomStandards/getRoomStandardByName');
const getRoomStandardUpdate = require('../controllers/roomStandards/getRoomStandardUpdate');
const postRoomStandardUpdate = require('../controllers/roomStandards/postRoomStandardUpdate');
const postRoomStandardDelete = require('../controllers/roomStandards/postRoomStandardDelete');

// GET /room-standards
roomStandardsRouter.get('/', getRoomStandards);

// GET /room-standards/create
roomStandardsRouter.get('/create', getRoomStandardsCreate);

// POST /room-standards/create
roomStandardsRouter.post('/create', postRoomStandardsCreate);

// GET /room-standards/:name
roomStandardsRouter.get('/:name', getRoomStandardByName);

// GET /room-standards/:name/update
roomStandardsRouter.get('/:name/update', getRoomStandardUpdate);

// POST /room-standards/:name/update
roomStandardsRouter.post('/:name/update', postRoomStandardUpdate);

// POST /room-standards/:name/delete
roomStandardsRouter.post('/:name/delete', postRoomStandardDelete);

module.exports = roomStandardsRouter;
