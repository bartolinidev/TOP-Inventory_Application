const db = require('../../db/queriesRooms');
const { validationResult, matchedData } = require('express-validator');
const validateRoom = require('../../utils/validateRoom');

const postRoomUpdate = [
  ...validateRoom,
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).render('updateRoom', {
          title: 'Update Room',
          errors: errors.array(),
        });
      }

      const originalId = req.params.id;

      const { id, room_standard_id, floor, bed_type, accessible } =
        matchedData(req);
      await db.updateRoom(originalId, {
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

module.exports = postRoomUpdate;
