const db = require('../db/queries/queriesRooms');

const getRoomById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const room = await db.getRoomById({ id });

    res.render('roomDetails', {
      title: `Rooms #${id} details`,
      room,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getRoomById;
