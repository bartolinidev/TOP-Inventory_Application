const { Router } = require('express');
const roomsRouter = Router();

const getRooms = require('../controllers/getRooms');
const getRoomsCreate = require('../controllers/getRoomsCreate');
const postRoomsCreate = require('../controllers/postRoomsCreate');
const getRoomById = require('../controllers/getRoomById');
const getRoomUpdate = require('../controllers/getRoomUpdate');
const postRoomUpdate = require('../controllers/postRoomUpdate');
const postRoomDelete = require('../controllers/postRoomDelete');

// GET /rooms
roomsRouter.get('/', getRooms);

// GET /rooms/create
roomsRouter.get('/create', getRoomsCreate);

// POST /rooms/create
roomsRouter.post('/create', postRoomsCreate);

// GET /rooms/:id
roomsRouter.get('/:id', getRoomById);

// GET /rooms/:id/update
roomsRouter.get('/:id/update', getRoomUpdate);

// POST /rooms/:id/update
roomsRouter.post('/:id/update', postRoomUpdate);

// POST /rooms/:id/delete
roomsRouter.post('/:id/delete', postRoomDelete);

module.exports = roomsRouter;
