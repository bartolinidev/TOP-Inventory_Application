const { Router } = require('express');
const roomsRouter = Router();

const getAllRooms = require('../controllers/rooms/getAllRooms');
const getAccessibleRooms = require('../controllers/rooms/getAccessibleRooms');
const getRoomCreate = require('../controllers/rooms/getRoomCreate');
const postRoomCreate = require('../controllers/rooms/postRoomCreate');
const getRoomsByFloor = require('../controllers/rooms/getRoomsByFloor');
const getRoomsByBedType = require('../controllers/rooms/getRoomsByBedType');
const getRoomsByStandard = require('../controllers/rooms/getRoomsByStandard');
const getRoomUpdate = require('../controllers/rooms/getRoomUpdate');
const postRoomUpdate = require('../controllers/rooms/postRoomUpdate');
const postRoomDelete = require('../controllers/rooms/postRoomDelete');

// GET /rooms
roomsRouter.get('/', getAllRooms);

// GET /rooms/accessible
roomsRouter.get('/accessible', getAccessibleRooms);

// GET /rooms/create
roomsRouter.get('/create', getRoomCreate);

// POST /rooms/create
roomsRouter.post('/create', postRoomCreate);

// GET /rooms/floor/:floor
roomsRouter.get('/floor/:floor', getRoomsByFloor);

// GET /rooms/standard/:standard_id
roomsRouter.get('/standard/:standard_id', getRoomsByStandard);

// GET /rooms/bed-type/:bed_type
roomsRouter.get('/bed-type/:bed_type', getRoomsByBedType);

// GET /rooms/id/:id/update
roomsRouter.get('/id/:id/update', getRoomUpdate);

// POST /rooms/id/:id/update
roomsRouter.post('/id/:id/update', postRoomUpdate);

// POST /rooms/id/:id/delete
roomsRouter.post('/id/:id/delete', postRoomDelete);

module.exports = roomsRouter;
