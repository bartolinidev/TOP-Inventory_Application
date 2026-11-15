const db = require('../../db/queries/queriesRooms');

const getRoomsByFloor = async (req, res, next) => {
  try {
    const { floor } = req.params;

    const rooms = await db.getRoomsByFloor({ floor });

    res.render('filteredRooms', {
      title: `Rooms on floor ${floor}`,
      rooms,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getRoomsByFloor;
