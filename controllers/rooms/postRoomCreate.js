const db = require('../../db/queriesRooms');
const { validationResult, matchedData } = require('express-validator');
const validateRoom = require('../../utils/validateRoom');

const postRoomCreate = [
  ...validateRoom,
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).render('rooms/getRoomCreate', {
          title: 'Create Room',
          errors: errors.array(),
        });
      }

      const { id, room_standard_id, floor, bed_type, accessible } =
        matchedData(req);
      await db.createRoom({
        id,
        room_standard_id,
        floor,
        bed_type,
        accessible,
      });

      res.redirect('/rooms');
    } catch (err) {
      next(err);
    }
  },
];

module.exports = postRoomCreate;
