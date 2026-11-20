const db = require('../../db/queriesRooms');

const getRoomsByFloor = async (req, res, next) => {
  try {
    const { floor } = req.params;

    const rooms = await db.getRoomsByFloor({ floor });

    res.render('rooms/filteredRooms', {
      title: `Rooms On Floor #${floor}`,
      rooms,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getRoomsByFloor;
