const { Router } = require('express');
const roomTypesRouter = Router();

const getRoomTypes = require('../controllers/getRoomTypes');
const getRoomTypesCreate = require('../controllers/getRoomTypesCreate');
const postRoomTypesCreate = require('../controllers/postRoomTypesCreate');
const getRoomTypeByName = require('../controllers/getRoomTypeByName');
const getRoomTypeUpdate = require('../controllers/getRoomTypeUpdate');
const postRoomTypeUpdate = require('../controllers/postRoomTypeUpdate');
const postRoomTypeDelete = require('../controllers/postRoomTypeDelete');

// GET /room-types
roomTypesRouter.get('/', getRoomTypes);

// GET /room-types/create
roomTypesRouter.get('/create', getRoomTypesCreate);

// POST /room-types/create
roomTypesRouter.post('/create', postRoomTypesCreate);

// GET /room-types/:name
roomTypesRouter.get('/:name', getRoomTypeByName);

// GET /room-types/:name/update
roomTypesRouter.get('/:name/update', getRoomTypeUpdate);

// POST /room-types/:name/update
roomTypesRouter.post('/:name/update', postRoomTypeUpdate);

// POST /room-types/:name/delete
roomTypesRouter.post('/:name/delete', postRoomTypeDelete);

module.exports = roomTypesRouter;
