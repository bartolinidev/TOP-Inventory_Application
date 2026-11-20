const db = require('../../db/queriesRooms');

const getAllRooms = async (req, res, next) => {
  try {
    const rooms = await db.getAllRooms();

    res.render('rooms/filteredRooms', {
      title: 'All Rooms',
      rooms,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getAllRooms;
