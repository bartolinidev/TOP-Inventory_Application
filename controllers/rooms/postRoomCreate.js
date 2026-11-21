const db = require('../../db/queriesRooms');
const dbStandards = require('../../db/queriesRoomStandards');
const BED_TYPES = require('../../db/bedTypes');
const { validationResult, matchedData } = require('express-validator');
const validateRoom = require('../../utils/validateRoom');

const postRoomCreate = [
  ...validateRoom,
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const standards = await dbStandards.getAllRoomStandards();
        return res.status(400).render('rooms/createRoom', {
          title: 'Create Room',
          standards,
          bedTypes: BED_TYPES,
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
