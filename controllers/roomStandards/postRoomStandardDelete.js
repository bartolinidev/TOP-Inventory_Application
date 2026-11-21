const db = require('../../db/queriesRoomStandards');
const checkAdminPassword = require('../../utils/checkAdminPassword');

const postRoomStandardDelete = [
  checkAdminPassword,
  async (req, res, next) => {
    const id = Number(req.params.id);

    try {
      const roomsUsingStandard = await db.countRoomsInStandard({ id });

      if (roomsUsingStandard > 0) {
        const standard = await db.getRoomStandard({ id });

        return res.status(400).render('roomStandards/updateRoomStandard', {
          title: `Update ${standard.name} Standard`,
          standard,
          errors: [
            {
              msg: `Cannot delete this standard because ${roomsUsingStandard} room(s) are currently assigned to it.`,
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
