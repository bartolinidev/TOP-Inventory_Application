const db = require('../../db/queriesRooms');

const getRoomById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const room = await db.getRoomById({ id });

    res.render('roomDetails', {
      title: `Room #${id} details`,
      room,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getRoomById;
