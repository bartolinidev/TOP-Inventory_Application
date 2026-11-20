const db = require('../../db/queriesRooms');

const getRoomUpdate = async (req, res, next) => {
  const { id } = req.params;
  try {
    const room = await db.getRoomById({ id });

    res.render('rooms/updateRoom', {
      title: 'Update Room',
      room,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getRoomUpdate;
