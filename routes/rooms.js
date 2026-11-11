const { Router } = require('express');
const roomsRouter = Router();

const getRooms = require('../controllers/rooms/getRooms');
const getRoomsCreate = require('../controllers/rooms/getRoomsCreate');
const postRoomsCreate = require('../controllers/rooms/postRoomsCreate');
const getRoomsByFloor = require('../controllers/rooms/getRoomsByFloor');
const getRoomsByBedType = require('../controllers/rooms/getRoomsByBedType');
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

// GET /rooms/floor/:floor
roomsRouter.get('/floor/:floor', getRoomsByFloor);

// GET /rooms/standard/:standard
roomsRouter.get('/standard/:standard', getRoomsByStandard);

// GET /rooms/bed-type/:bed_type
roomsRouter.get('/bed-type/:bed_type', getRoomsByBedType);

// GET /rooms/id/:id
roomsRouter.get('/id/:id', getRoomById);

// GET /rooms/id/:id/update
roomsRouter.get('/id/:id/update', getRoomUpdate);

// POST /rooms/id/:id/update
roomsRouter.post('/id/:id/update', postRoomUpdate);

// POST /rooms/id/:id/delete
roomsRouter.post('/id/:id/delete', postRoomDelete);

module.exports = roomsRouter;
