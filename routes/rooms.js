const { Router } = require('express');
const roomsRouter = Router();

const getRooms = require('../controllers/rooms/getRooms');
const getRoomsCreate = require('../controllers/rooms/getRoomsCreate');
const postRoomsCreate = require('../controllers/rooms/postRoomsCreate');
const getRoomById = require('../controllers/rooms/getRoomById');
const getRoomUpdate = require('../controllers/rooms/getRoomUpdate');
const postRoomUpdate = require('../controllers/rooms/postRoomUpdate');
const postRoomDelete = require('../controllers/rooms/postRoomDelete');

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
