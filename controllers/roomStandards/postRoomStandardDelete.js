const db = require('../../db/queriesRoomStandards');
const checkAdminPassword = require('../../utils/checkAdminPassword');

const postRoomStandardDelete = [
  checkAdminPassword,
  async (req, res, next) => {
    const id = Number(req.params.id);

    try {
      const roomsUsingStandard = await db.countRoomsInStandard({ id });

      if (roomsUsingStandard > 0) {
        const allStandards = await db.getAllRoomStandards();
        const pickedStandard = allStandards.find((std) => std.id === id);
        const otherStandards = allStandards.filter((std) => std.id !== id);

        return res.status(400).render('roomStandards/deleteRoomStandard', {
          title: 'Delete Room Standard',
          pickedStandard,
          otherStandards,
          error:
            'Cannot delete this standard because there are rooms assigned to it.',
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
