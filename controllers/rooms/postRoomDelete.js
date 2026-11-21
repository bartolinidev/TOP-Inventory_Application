const db = require('../../db/queriesRooms');
const checkAdminPassword = require('../../utils/checkAdminPassword');

const postRoomDelete = [
  checkAdminPassword,
  async (req, res, next) => {
    const { id } = req.params;

    try {
      await db.deleteRoom({ id });
      res.redirect('/dashboard/rooms');
    } catch (err) {
      next(err);
    }
  },
];

module.exports = postRoomDelete;
