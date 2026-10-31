const { Router } = require('express');
const roomTypesRouter = Router();

const getAllRoomTypes = require('../controllers/getRoomTypes');
const getRoomTypesCreate = require('../controllers/getRoomTypesCreate');
const postRoomTypesCreate = require('../controllers/postRoomTypesCreate');
const getRoomType = require('../controllers/getRoomType');
const getRoomTypeUpdate = require('../controllers/getRoomTypeUpdate');
const postRoomTypeUpdate = require('../controllers/postRoomTypeUpdate');
const postRoomTypeDelete = require('../controllers/postRoomTypeDelete');

// GET /room-types
roomTypesRouter.get('/', getAllRoomTypes);

// GET /room-types/create
roomTypesRouter.get('/create', getRoomTypesCreate);

// POST /room-types/create
roomTypesRouter.post('/create', postRoomTypesCreate);

// GET /room-types/:name
roomTypesRouter.get('/:name', getRoomType);

// GET /room-types/:name/update
roomTypesRouter.get('/:name/update', getRoomTypeUpdate);

// POST /room-types/:name/update
roomTypesRouter.post('/:name/update', postRoomTypeUpdate);

// POST /room-types/:name/delete
roomTypesRouter.post('/:name/delete', postRoomTypeDelete);

module.exports = roomTypesRouter;
