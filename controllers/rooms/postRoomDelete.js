const db = require('../../db/queries/queriesRooms');

const postRoomDelete = async (req, res, next) => {
  const { id } = req.params;

  try {
    await db.deleteRoom({ id });
    res.redirect('/rooms');
  } catch (err) {
    next(err);
  }
};

module.exports = postRoomDelete;
