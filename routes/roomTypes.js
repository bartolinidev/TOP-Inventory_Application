const { Router } = require('express');
const roomTypesRouter = Router();

const getRoomTypes = require('../controllers/roomTypes/getRoomTypes');
const getRoomTypesCreate = require('../controllers/roomTypes/getRoomTypesCreate');
const postRoomTypesCreate = require('../controllers/roomTypes/postRoomTypesCreate');
const getRoomTypeByName = require('../controllers/roomTypes/getRoomTypeByName');
const getRoomTypeUpdate = require('../controllers/roomTypes/getRoomTypeUpdate');
const postRoomTypeUpdate = require('../controllers/roomTypes/postRoomTypeUpdate');
const postRoomTypeDelete = require('../controllers/roomTypes/postRoomTypeDelete');

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
