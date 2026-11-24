const dbRooms = require('../../db/queriesRooms');
const dbStandards = require('../../db/queriesRoomStandards');
const { validationResult } = require('express-validator');
const checkAdminPassword = require('../../utils/checkAdminPassword');
const BED_TYPES = require('../../db/bedTypes');

const postRoomDelete = [
  checkAdminPassword,
  async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const errors = validationResult(req);

      const [room, standards] = await Promise.all([
        dbRooms.getRoomById({ id }),
        dbStandards.getAllRoomStandards(),
      ]);

      if (!errors.isEmpty()) {
        return res.status(400).render('rooms/updateRoom', {
          title: `Update Room`,
          room,
          standards,
          bedTypes: BED_TYPES,
          errors: errors.array(),
        });
      }

      await db.deleteRoom({ id });
      res.redirect('/dashboard/rooms');
    } catch (err) {
      next(err);
    }
  },
];

module.exports = postRoomDelete;
