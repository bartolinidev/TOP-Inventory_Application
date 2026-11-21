const db = require('../../db/queriesRoomStandards');
const { validationResult } = require('express-validator');
const checkAdminPassword = require('../../utils/checkAdminPassword');

const postRoomStandardDelete = [
  checkAdminPassword,
  async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const standard = await db.getRoomStandard({ id });
        return res.status(400).render('roomStandards/updateRoomStandard', {
          title: `Update ${standard.name} Standard`,
          standard,
          errors: errors.array(),
        });
      }

      const roomsUsingStandard = await db.countRoomsInStandard({ id });

      if (roomsUsingStandard > 0) {
        const standard = await db.getRoomStandard({ id });

        return res.status(400).render('roomStandards/updateRoomStandard', {
          title: `Update ${standard.name} Standard`,
          standard,
          errors: [
            {
              msg: `Cannot delete this standard because it has ${roomsUsingStandard} room(s) currently assigned to it.`,
            },
          ],
        });
      }

      await db.deleteRoomStandard({ id });
      res.redirect('/room-standards');
    } catch (err) {
      next(err);
    }
  },
];

module.exports = postRoomStandardDelete;
