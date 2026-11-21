const db = require('../../db/queriesRooms');
const dbStandards = require('../../db/queriesRoomStandards');
const BED_TYPES = require('../../db/bedTypes');
const { validationResult, matchedData } = require('express-validator');
const checkAdminPassword = require('../../utils/checkAdminPassword');
const validateRoom = require('../../utils/validateRoom');

const postRoomUpdate = [
  checkAdminPassword,
  ...validateRoom,
  async (req, res, next) => {
    try {
      const originalId = req.params.id;
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const [room, standards] = await Promise.all([
          db.getRoomById({ id: originalId }),
          dbStandards.getAllRoomStandards(),
        ]);

        return res.status(400).render('rooms/updateRoom', {
          title: 'Update Room',
          room,
          standards,
          bedTypes: BED_TYPES,
          errors: errors.array(),
        });
      }

      const { id, room_standard_id, floor, bed_type, accessible } =
        matchedData(req);
      await db.updateRoom(originalId, {
        id,
        room_standard_id,
        floor,
        bed_type,
        accessible,
      });

      res.redirect('/dashboard/rooms');
    } catch (err) {
      next(err);
    }
  },
];

module.exports = postRoomUpdate;
